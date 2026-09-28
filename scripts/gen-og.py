#!/usr/bin/env python3
"""neleredikkat.com — programatik og:image üretici (1200x630).

Her rehber için: kategori rengine göre degrade zemin, büyük başlık,
kategori etiketi ve marka altlığı. Türkçe karakter desteği: DejaVu Sans.

Kullanım: python3 gen-og.py            (repo kökünde; out/ hâlâ üretilmemişken)
Çıktı:   public/og/<category>/<slug>.png
"""
import html
import json
import os
import re
import sys
import textwrap

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "og")

FONT_BOLD = "/home/hermeswebui/.hermes/home/.local/lib/python3.12/site-packages/matplotlib/mpl-data/fonts/ttf/DejaVuSans-Bold.ttf"
FONT_REG = "/home/hermeswebui/.hermes/home/.local/lib/python3.12/site-packages/matplotlib/mpl-data/fonts/ttf/DejaVuSans.ttf"
FONT_SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"

# Kategori renk paleti (tailwind renk adlarının RGB karşılıkları)
PALETTE = {
    "teknoloji": ((5, 150, 105), (13, 148, 136)),      # emerald → teal
    "ev-yasam": ((217, 119, 6), (245, 158, 11)),        # amber
    "otomobil-motosiklet": ((37, 99, 235), (29, 78, 216)),  # blue
    "anne-bebek": ((225, 29, 72), (219, 39, 119)),      # rose → pink
    "giyim-aksesuar": ((126, 34, 206), (147, 51, 234)), # purple
    "spor-outdoor": ((21, 128, 61), (34, 197, 94)),     # green
    "hobi": ((79, 70, 229), (99, 102, 241)),            # indigo
    "seyahat": ((8, 145, 178), (6, 182, 212)),          # cyan
    "dijital-hizmetler": ((13, 148, 136), (20, 184, 166)),  # teal
    "is-egitim": ((124, 58, 237), (139, 92, 246)),      # violet
    "ses-muzik-creator": ((234, 88, 12), (249, 115, 22)),   # orange
}
DEFAULT_PAIR = ((5, 150, 105), (13, 148, 136))

TR_LOWER = str.maketrans("ÇĞİÖŞÜ", "çğiöşü")


def tr_lower(s: str) -> str:
    return s.translate(TR_LOWER).lower()


def parse_guides():
    """guides.ts + new-guides.ts içinden (slug, title, categorySlug, checklist sayısı) çıkarır."""
    combined = []
    for fname in ["guides.ts", "new-guides.ts"]:
        path = os.path.join(REPO, "src", "data", fname)
        with open(path, encoding="utf-8") as f:
            combined.append(f.read())
    text = "\n".join(combined)

    guides = []
    # Blok bazlı yakalama — iki format:
    #   TS stili:   id: 'x',\n slug: 'y',\n categorySlug: 'z',\n title: '...'
    #   JSON stili: "id": "x",\n "slug": "y",\n "categorySlug": "z",\n "title": "..."
    ts_pattern = re.compile(
        r"id: '(?P<id>[a-z0-9-]+)',\s*\n\s+slug: '(?P<slug>[a-z0-9-]+)',\s*\n"
        r"\s+categorySlug: '(?P<cat>[a-z0-9-]+)',\s*\n"
        r"\s+title: '(?P<title>[^']+)',",
        re.M,
    )
    json_pattern = re.compile(
        r"\"id\":\s*\"(?P<id>[a-z0-9-]+)\",\s*\n\s*\"slug\":\s*\"(?P<slug>[a-z0-9-]+)\",\s*\n"
        r"\s*\"categorySlug\":\s*\"(?P<cat>[a-z0-9-]+)\",\s*\n"
        r"\s*\"title\":\s*\"(?P<title>[^\"]+)\",",
        re.M,
    )
    for m in list(ts_pattern.finditer(text)) + list(json_pattern.finditer(text)):
        guides.append(
            {
                "slug": m.group("slug"),
                "cat": m.group("cat"),
                "title": html.unescape(m.group("title")).replace("\\'", "'"),
            }
        )
    return guides


def wrap_title(draw, title, font, max_width):
    """Başlığı kelime kelime sar; 4 satır max."""
    words = title.split()
    lines = []
    cur = ""
    for w_ in words:
        trial = (cur + " " + w_).strip()
        if draw.textlength(trial, font=font) <= max_width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines[:4]


def make_og(slug, cat, title):
    pair = PALETTE.get(cat, DEFAULT_PAIR)
    img = Image.new("RGB", (W, H), pair[0])
    d = ImageDraw.Draw(img)

    # köşegen degrade
    for y in range(H):
        t = y / H
        r = int(pair[0][0] + (pair[1][0] - pair[0][0]) * t)
        g = int(pair[0][1] + (pair[1][1] - pair[0][1]) * t)
        b = int(pair[0][2] + (pair[1][2] - pair[0][2]) * t)
        d.line([(0, y), (W, y)], fill=(r, g, b))

    # dekoratif daireler (opaklık yok, koyu ton)
    deco = tuple(int(c * 0.75) for c in pair[1])
    d.ellipse([W - 260, -180, W + 220, 300], outline=deco, width=3)
    d.ellipse([W - 180, -100, W + 300, 380], outline=deco, width=2)
    d.ellipse([-160, H - 220, 260, H + 200], outline=deco, width=3)

    # üst etiket
    cat_names = {
        "teknoloji": "Teknoloji", "ev-yasam": "Ev & Yaşam",
        "otomobil-motosiklet": "Otomobil & Motosiklet", "anne-bebek": "Anne & Bebek",
        "giyim-aksesuar": "Giyim & Aksesuar", "spor-outdoor": "Spor & Outdoor",
        "hobi": "Hobi", "seyahat": "Seyahat", "dijital-hizmetler": "Dijital Hizmetler",
        "is-egitim": "İş & Eğitim", "ses-muzik-creator": "Ses, Müzik & Creator",
    }
    label = cat_names.get(cat) or cat
    f_label = ImageFont.truetype(FONT_BOLD, 30)
    f_title = ImageFont.truetype(FONT_BOLD, 62)
    f_brand = ImageFont.truetype(FONT_BOLD, 34)

    # Etiket bandı (yarı saydam beyaz kutu — beyaz dolgu + alpha compositing)
    tw = d.textlength(label, font=f_label)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rounded_rectangle([70, 78, 70 + tw + 48, 78 + 56], radius=14, fill=(255, 255, 255, 60))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(img)
    d.text((94, 90), label, font=f_label, fill=(255, 255, 255))

    # Başlık
    lines = wrap_title(d, title, f_title, W - 200)
    y = 200
    for line in lines:
        d.text((72, y), line, font=f_title, fill=(255, 255, 255))
        y += 76

    # Alt marka satırı
    d.text((72, H - 92), "neleredikkat.com", font=f_brand, fill=(255, 255, 255))
    f_sub = ImageFont.truetype(FONT_REG, 24)
    d.text((72, H - 48), "Satın almadan önce nelere dikkat edilmeli?", font=f_sub, fill=(235, 240, 240))

    outdir = os.path.join(OUT, cat)
    os.makedirs(outdir, exist_ok=True)
    outpath = os.path.join(outdir, f"{slug}.png")
    img.save(outpath, "PNG", optimize=True)
    return outpath


def main():
    guides = parse_guides()
    print(f"rehber sayisi: {len(guides)}")
    made = 0
    for g in guides:
        try:
            make_og(g["slug"], g["cat"], g["title"])
            made += 1
        except Exception as e:
            print(f"HATA {g['slug']}: {e}", file=sys.stderr)
    print(f"uretildi: {made}")

    # Kategori hub görselleri: _kategori.png
    cat_names = {
        "teknoloji": "Teknoloji", "ev-yasam": "Ev & Yaşam",
        "otomobil-motosiklet": "Otomobil & Motosiklet", "anne-bebek": "Anne & Bebek",
        "giyim-aksesuar": "Giyim & Aksesuar", "spor-outdoor": "Spor & Outdoor",
        "hobi": "Hobi", "seyahat": "Seyahat", "dijital-hizmetler": "Dijital Hizmetler",
        "is-egitim": "İş & Eğitim", "ses-muzik-creator": "Ses, Müzik & Creator",
    }
    for cat, name in cat_names.items():
        try:
            make_og("_kategori", cat, f"{name} Rehberleri")
            made += 1
        except Exception as e:
            print(f"HATA kategori {cat}: {e}", file=sys.stderr)
    # Site default
    try:
        make_og("default", "teknoloji", "Satın Almadan Önce Nelere Dikkat Edilmeli?")
        made += 1
    except Exception as e:
        print(f"HATA default: {e}", file=sys.stderr)
    print(f"toplam (kategori+default dahil): {made}")

    # manifest — metadata'da kullanmak icin
    manifest = {f"{g['cat']}/{g['slug']}": True for g in guides}
    with open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump({"count": made, "guides": manifest}, f, ensure_ascii=False)


if __name__ == "__main__":
    main()
