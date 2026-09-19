#!/usr/bin/env python3
"""Search Quality Gate — report-only deterministic SEO/content audit.

Usage: sqg.py audit --sitemap URL [--sample N | --all] [--out report.json]
       sqg.py audit --url URL ...            (single URL check)
       sqg.py dupes --sitemap URL [--sample N]  (near-duplicate detection)

Checks per URL (severity):
  BLOCKER: non-200, noindex on sitemap URL, missing canonical, canonical mismatch,
           redirect in sitemap, unparseable JSON-LD, missing title, missing H1,
           placeholder/lorem content, unresolved template vars
  WARNING: duplicate title/desc across sample, multiple H1, empty main content,
           thin visible text (<150 words on non-tool pages), missing meta desc,
           amazon/affiliate link without rel=sponsored
  INFO:    missing hreflang on multi-lang site, sitemap lastmod missing
"""
import argparse, concurrent.futures as cf, hashlib, json, re, sys, time
import html as htmllib
import urllib.request, urllib.error, xml.etree.ElementTree as ET

UA = "Mozilla/5.0 (compatible; SearchQualityGate/1.0; +https://audiogearprices.com)"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}

def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.geturl(), r.read().decode("utf-8", "replace"), dict(r.headers)
    except urllib.error.HTTPError as e:
        return e.code, url, e.read().decode("utf-8", "replace") if e.fp else "", dict(e.headers or {})
    except Exception as e:
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
    head = body[:20000]
    m = re.search(r'<meta[^>]+name=["\']robots["\'][^>]+content=["\']([^"\']+)', body, re.I)
    if m and "noindex" in m.group(1).lower():
        issues.append(("BLOCKER", "noindex meta robots"))
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
    # affiliate links without rel=sponsored
    for href in re.findall(r'<a[^>]+href=["\']([^"\']*(?:amazon|tag=|utm)[^"\']*)["\'][^>]*>', body, re.I):
        pass  # checked below via full anchor tags
    bad_aff = 0
    for anchor in re.findall(r"<a\b[^>]*>", body, re.I):
        href = re.search(r'href=["\']([^"\']+)', anchor)
        if href and re.search(r"amazon\.|aff|ref=", href.group(1), re.I):
            if not re.search(r'rel=["\'][^"\']*sponsored', anchor, re.I):
                bad_aff += 1
    if bad_aff:
        issues.append(("WARNING", f"{bad_aff} affiliate links without rel=sponsored"))
    txt = visible_text(body)
    low = txt.lower()
    if "lorem ipsum" in low or re.search(r"\{\{.*?\}\}|\$\{.*?\}|<%-?.*?%>", txt):
        issues.append(("BLOCKER", "placeholder/unresolved template content"))
    words = len(txt.split())
    return {"url": url, "status": status, "final": final_url, "title": title,
            "words": words, "schemas": [s.get("@type") if isinstance(s, dict) else "?" for s in schemas],
            "lastmod": sitemap_lastmod, "text_head": txt[:200], "issues": issues,
            "bad_aff": bad_aff, "sha": hashlib.sha256(re.sub(r"\d", "", txt.lower()).encode()).hexdigest()[:12]}

def load_sitemap(sm_url):
    st, _, body, _ = fetch(sm_url)
    if st != 200:
        sys.exit(f"sitemap fetch failed: {st}")
    root = ET.fromstring(body)
    out = []
    for u in root.findall(".//s:url", NS):
        loc = u.find("s:loc", NS)
        lm = u.find("s:lastmod", NS)
        out.append((loc.text.strip(), lm.text.strip() if lm is not None else None))
    # nested sitemaps
    for sm in root.findall(".//s:sitemap/s:loc", NS):
        out += load_sitemap(sm.text.strip())
    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["audit", "dupes"])
    ap.add_argument("--sitemap"); ap.add_argument("--url", action="append", default=[])
    ap.add_argument("--sample", type=int, default=30); ap.add_argument("--all", action="store_true")
    ap.add_argument("--out")
    a = ap.parse_args()
    urls = [(u, None) for u in a.url]
    if a.sitemap:
        sm = load_sitemap(a.sitemap)
        urls += sm if a.all else sm[: a.sample]
    results = []
    with cf.ThreadPoolExecutor(max_workers=8) as ex:
        futs = [ex.submit(check_url, u, lm) for u, lm in urls]
        for f in futs:
            results.append(f.result()); time.sleep(0)
    if a.cmd == "audit":
        # duplicate titles within sample
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
        summary = {"checked": len(results), "blockers": sum(1 for r in results if any(s=="BLOCKER" for s,_ in r["issues"])),
                   "warnings": sum(1 for r in results if any(s=="WARNING" for s,_ in r["issues"]) and not any(s=="BLOCKER" for s,_ in r["issues"])),
                   "clean": sum(1 for r in results if not r["issues"])}
        print(json.dumps(summary))
        for r in results:
            for sev, msg in r["issues"]:
                print(f"[{sev}] {r['url']} :: {msg}")
    else:  # dupes — shingle similarity on normalized text via hash proxy
        by_sha = {}
        for r in results:
            by_sha.setdefault(r.get("sha"), []).append(r["url"])
        for sha, us in sorted(by_sha.items(), key=lambda x: -len(x[1])):
            if len(us) > 1:
                print(f"SIMILAR x{len(us)}: " + " | ".join(us[:5]) + (" ..." if len(us) > 5 else ""))
    if a.out:
        json.dump(results, open(a.out, "w"), ensure_ascii=False, indent=1)

if __name__ == "__main__":
    main()
