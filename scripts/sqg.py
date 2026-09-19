#!/usr/bin/env python3
"""Search Quality Gate — deterministic SEO/content audit with fail-closed CI semantics.

Usage: sqg.py audit --sitemap URL [--sample N | --all] [--out report.json]
       sqg.py audit --url URL ...            (single URL check)
       sqg.py dupes --sitemap URL [--sample N]  (near-duplicate detection)
       sqg.py baseline --out baseline.json       (create baseline snapshot)
       sqg.py audit ... --baseline baseline.json --mode enforce
                                                   (baseline-aware enforcement)

FAIL-CLOSED RULES (exit code 2 + ::error:: lines):
  - --sitemap not provided for audit/dupes            -> FAIL
  - sitemap fetch non-200 / network error / timeout   -> FAIL
  - sitemap body not parseable XML                    -> FAIL
  - sitemap parsed but contains 0 URLs                -> FAIL
  - sitemap endpoint redirected to unexpected dest    -> reported (WARNING in
    report + stderr notice); a cross-origin redirect is a FAIL (likely WAF/
    challenge page or wrong variable).

Baseline enforcement mode (Phase 2):
  existing blocker (in baseline)     -> report only
  new blocker (not in baseline)      -> FAIL
  existing blocker count increases   -> FAIL
  existing blocker resolved          -> PASS (report as resolved)
"""
import argparse, concurrent.futures as cf, hashlib, json, re, sys, time
import html as htmllib
import urllib.request, urllib.error, xml.etree.ElementTree as ET
from urllib.parse import urlsplit

UA = "Mozilla/5.0 (compatible; SearchQualityGate/1.1; +https://audiogearprices.com)"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def ci_error(msg):
    print(f"::error::{msg}", file=sys.stderr)
    print(f"[SQG-FAIL] {msg}", file=sys.stderr)


def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.geturl(), r.read().decode("utf-8", "replace"), dict(r.headers)
    except urllib.error.HTTPError as e:
        try:
            body = e.read().decode("utf-8", "replace") if e.fp else ""
        except Exception:
            body = ""
        return e.code, url, body, dict(e.headers or {})
    except Exception:
        return 0, url, "", {}


def visible_text(body):
    t = re.sub(r"<(script|style|noscript|svg)[^>]*>.*?</\1>", " ", body, flags=re.S | re.I)
    t = htmllib.unescape(re.sub(r"<[^>]+>", " ", t))
    return re.sub(r"\s+", " ", t).strip()


def check_url(url, sitemap_lastmod=None):
    issues, status, final_url, body, headers = [], *fetch(url)
    if status != 200:
        issues.append(("BLOCKER", f"HTTP {status}"))
        return {"url": url, "status": status, "final": final_url, "issues": issues}
    if final_url.rstrip("/") != url.rstrip("/"):
        issues.append(("BLOCKER", f"redirects to {final_url}"))
    m = re.search(r'<meta[^>]+name=["\']robots["\'][^>]+content=["\']([^"\']+)', body, re.I)
    if m and "noindex" in m.group(1).lower():
        issues.append(("BLOCKER", "noindex meta robots"))
    xr = headers.get("X-Robots-Tag", "")
    if "noindex" in xr.lower():
        issues.append(("BLOCKER", "noindex X-Robots-Tag"))
    can = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)', body, re.I) or \
          re.search(r'<link[^>]+href=["\']([^"\']+)["\'][^>]+rel=["\']canonical["\']', body, re.I)
    if not can:
        issues.append(("BLOCKER", "missing canonical"))
    elif can.group(1).rstrip("/") not in (url.rstrip("/"), final_url.rstrip("/")):
        issues.append(("BLOCKER", f"canonical points elsewhere: {can.group(1)}"))
    t = re.search(r"<title[^>]*>(.*?)</title>", body, re.S | re.I)
    title = htmllib.unescape(t.group(1)).strip() if t else ""
    if not title:
        issues.append(("BLOCKER", "missing title"))
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", body, re.S | re.I)
    if not h1s:
        issues.append(("BLOCKER", "missing H1"))
    elif len(h1s) > 1:
        issues.append(("WARNING", f"{len(h1s)} H1 tags"))
    md = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)', body, re.I)
    if not md or not md.group(1).strip():
        issues.append(("WARNING", "missing meta description"))
    # JSON-LD parse
    schemas = []
    for i, blk in enumerate(re.findall(r'<script[^>]+ld\+json["\'][^>]*>(.*?)</script>', body, re.S | re.I)):
        try:
            schemas.append(json.loads(blk))
        except Exception:
            issues.append(("BLOCKER", f"unparseable JSON-LD block #{i+1}"))
    # affiliate/paid links without rel=sponsored (sponsored is the primary
    # semantic marker for paid links; nofollow not required alongside it)
    bad_aff = 0
    for anchor in re.findall(r"<a\b[^>]*>", body, re.I):
        href = re.search(r'href=["\']([^"\']+)', anchor)
        if href and re.search(r"amazon\.|amzn\.to|aff|tag=|ref=", href.group(1), re.I):
            if not re.search(r'rel=["\'][^"\']*\bsponsored\b', anchor, re.I):
                bad_aff += 1
    if bad_aff:
        issues.append(("WARNING", f"{bad_aff} affiliate/paid links without rel=sponsored"))
    txt = visible_text(body)
    low = txt.lower()
    if "lorem ipsum" in low or re.search(r"\{\{.*?\}\}|\$\{.*?\}|<%-?.*?%>", txt):
        issues.append(("BLOCKER", "placeholder/unresolved template content"))
    words = len(txt.split())
    return {"url": url, "status": status, "final": final_url, "title": title,
            "words": words, "schemas": [s.get("@type") if isinstance(s, dict) else "?" for s in schemas],
            "lastmod": sitemap_lastmod, "text_head": txt[:200], "issues": issues,
            "bad_aff": bad_aff, "sha": hashlib.sha256(re.sub(r"\d", "", txt.lower()).encode()).hexdigest()[:12]}


def load_sitemap(sm_url, depth=0):
    """Fetch+parse a sitemap. FAIL-CLOSED: exits 2 on fetch/parse/empty errors."""
    if not sm_url:
        ci_error("sitemap URL is empty (SQG_SITEMAP repository variable not configured?)")
        sys.exit(2)
    if depth > 3:
        ci_error(f"sitemap nesting too deep (>3) at {sm_url}")
        sys.exit(2)
    st, final, body, hdrs = fetch(sm_url, timeout=30)
    if st == 0:
        ci_error(f"sitemap fetch failed: network error/timeout for {sm_url}")
        sys.exit(2)
    if st != 200:
        ci_error(f"sitemap fetch failed: HTTP {st} for {sm_url}")
        sys.exit(2)
    if final.rstrip("/") != sm_url.rstrip("/"):
        dest_host = urlsplit(final).netloc
        src_host = urlsplit(sm_url).netloc
        if dest_host != src_host:
            ci_error(f"sitemap redirected cross-origin: {sm_url} -> {final} (wrong SQG_SITEMAP or WAF/challenge?)")
            sys.exit(2)
        print(f"[SQG-NOTICE] sitemap redirected: {sm_url} -> {final}", file=sys.stderr)
    if "<html" in body[:2000].lower() and "<urlset" not in body.lower() and "<sitemapindex" not in body.lower():
        ci_error(f"sitemap at {sm_url} returned HTML, not XML (challenge page or wrong URL)")
        sys.exit(2)
    try:
        root = ET.fromstring(body)
    except ET.ParseError as e:
        ci_error(f"sitemap XML parse failed for {sm_url}: {e}")
        sys.exit(2)
    out = []
    for u in root.findall(".//s:url", NS):
        loc = u.find("s:loc", NS)
        lm = u.find("s:lastmod", NS)
        if loc is not None and loc.text:
            out.append((loc.text.strip(), lm.text.strip() if lm is not None else None))
    kids = root.findall(".//s:sitemap/s:loc", NS)
    for sm in kids:
        out += load_sitemap(sm.text.strip(), depth + 1)
    if depth == 0 and not out:
        ci_error(f"sitemap contained 0 URLs: {sm_url}")
        sys.exit(2)
    return out


def run_checks(urls):
    results = []
    with cf.ThreadPoolExecutor(max_workers=8) as ex:
        futs = [ex.submit(check_url, u, lm) for u, lm in urls]
        for f in futs:
            results.append(f.result())
    # duplicate titles within checked set
    seen = {}
    for r in results:
        t = r.get("title")
        if t:
            seen.setdefault(t, []).append(r["url"])
    for t, us in seen.items():
        if len(us) > 1:
            for r in results:
                if r.get("title") == t:
                    r["issues"].append(("WARNING", f"duplicate title x{len(us)}: {t[:60]}"))
    return results


def blocker_items(results):
    """Return set of (url, rule_id) for blockers; rule_id = stable slug of message."""
    out = set()
    for r in results:
        for s, m in r["issues"]:
            if s == "BLOCKER":
                out.add((r["url"], rule_id(m)))
    return out


def rule_id(msg):
    slug = re.sub(r"https?://\S+", "URL", msg)
    slug = re.sub(r"[^a-z0-9]+", "-", slug.lower()).strip("-")[:60]
    return slug


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["audit", "dupes", "baseline"])
    ap.add_argument("--sitemap"); ap.add_argument("--url", action="append", default=[])
    ap.add_argument("--sample", type=int, default=30); ap.add_argument("--all", action="store_true")
    ap.add_argument("--out")
    ap.add_argument("--baseline", help="baseline snapshot JSON for enforcement mode")
    ap.add_argument("--mode", choices=["report", "enforce"], default="report")
    a = ap.parse_args()

    if a.cmd in ("audit", "dupes") and not a.sitemap and not a.url:
        ci_error("no --sitemap and no --url given (SQG_SITEMAP repository variable not configured?)")
        sys.exit(2)

    urls = [(u, None) for u in a.url]
    if a.sitemap:
        sm = load_sitemap(a.sitemap)
        urls += sm if a.all else sm[: a.sample]

    results = run_checks(urls)

    if a.cmd == "audit":
        summary = {"checked": len(results),
                   "blockers": sum(1 for r in results if any(s == "BLOCKER" for s, _ in r["issues"])),
                   "warnings": sum(1 for r in results if any(s == "WARNING" for s, _ in r["issues"]) and not any(s == "BLOCKER" for s, _ in r["issues"])),
                   "clean": sum(1 for r in results if not r["issues"])}
        print(json.dumps(summary))
        for r in results:
            for sev, msg in r["issues"]:
                print(f"[{sev}] {r['url']} :: {msg}")
    else:  # dupes
        by_sha = {}
        for r in results:
            by_sha.setdefault(r.get("sha"), []).append(r["url"])
        for sha, us in sorted(by_sha.items(), key=lambda x: -len(x[1])):
            if len(us) > 1:
                print(f"SIMILAR x{len(us)}: " + " | ".join(us[:5]) + (" ..." if len(us) > 5 else ""))

    if a.cmd == "baseline":
        snap = {"created_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "sitemap": a.sitemap, "sampled": len(results),
                "blockers": sorted([{"url": u, "rule": rid, "reason": m}
                                    for u, rid, m in ((r["url"], rule_id(m), m)
                                                      for r in results
                                                      for s, m in r["issues"] if s == "BLOCKER")],
                                                  key=lambda b: (b["url"], b["rule"]))}
        if a.out:
            json.dump(snap, open(a.out, "w"), ensure_ascii=False, indent=1)
            print(f"baseline written: {a.out} ({len(snap['blockers'])} known blockers)")
        else:
            print(json.dumps(snap, ensure_ascii=False))
        sys.exit(0)

    if a.out:
        json.dump(results, open(a.out, "w"), ensure_ascii=False, indent=1)

    # ---- baseline-aware enforcement (Phase 2) ----
    if a.baseline:
        try:
            base = json.load(open(a.baseline))
        except Exception as e:
            ci_error(f"cannot read baseline file {a.baseline}: {e}")
            sys.exit(2)
        known = {(b["url"], b["rule"]) for b in base.get("blockers", [])}
        current = blocker_items(results)
        new = current - known
        resolved = known - current
        # count increase on same (url, rule) can't exceed 1; detect URL-level regression:
        known_urls = {u for u, _ in known}
        for u, rid in new:
            sev_note = "NEW blocker (not in baseline)" if u not in known_urls else f"blocker count increased on {u}"
            ci_error(f"{sev_note}: {u} :: {rid}")
        print(f"[SQG] baseline {base.get('created_at','?')}: known={len(known)} current={len(current)} new={len(new)} resolved={len(resolved)}")
        for u, rid in sorted(resolved):
            print(f"[RESOLVED] {u} :: {rid}")
        if a.mode == "enforce" and new:
            sys.exit(1)
        sys.exit(0)

    # Phase 1 default: report-only, but exit non-zero ONLY if audit couldn't run
    # (fetch/parse errors already exited 2 above). Blockers here do not fail CI yet.
    sys.exit(0)


if __name__ == "__main__":
    main()
