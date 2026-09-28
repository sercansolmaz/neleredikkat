#!/usr/bin/env python3
"""neleredikkat.com — marka seti üretici (favicon + apple-touch + logo).

Marka: yuvarlak köşeli yeşil kare + beyaz onay-destekli "kalkan çizgisi".
DejaVu ile "N" monogramı + altta nokta (kontrol edildi) metaforu.
Çıktılar: public/favicon.png (64), apple-touch-icon.png (180), public/logo.png (512x512),
favicon.ico (16/32/48 çoklu).
"""
import os
from PIL import Image, ImageDraw

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(REPO, "public")
FONT_BOLD = "/home/hermeswebui/.hermes/home/.local/lib/python3.12/site-packages/matplotlib/mpl-data/fonts/ttf/DejaVuSans-Bold.ttf"

EMERALD = (5, 150, 105)      # emerald-600
EMERALD_DARK = (4, 120, 87)  # emerald-700
WHITE = (255, 255, 255)


def make_icon(size: int, with_wordmark: bool = False) -> Image.Image:
    """Yuvarlak köşeli kare + N monogramı + sağ altta onay noktası."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    radius = int(size * 0.22)

    # Gövde: degrade yerine düz emerald + üstte hafif açık ton şeridi
    d.rounded_rectangle([0, 0, size, size], radius=radius, fill=EMERALD)
    # üst yarıda çok hafif açık overlay (derinlik hissi)
    overlay = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rounded_rectangle([0, 0, size, int(size * 0.5)], radius=radius, fill=(255, 255, 255, 26))
    img = Image.alpha_composite(img, overlay)
    d = ImageDraw.Draw(img)

    # N monogramı
    from PIL import ImageFont
    font = ImageFont.truetype(FONT_BOLD, int(size * 0.58))
    bbox = d.textbbox((0, 0), "N", font=font)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - w) / 2 - bbox[0]
    y = (size - h) / 2 - bbox[1] - size * 0.02
    d.text((x, y), "N", font=font, fill=WHITE)

    # Sağ altta onay noktası (beyaz daire + yeşil tik çizgisi)
    dot_r = int(size * 0.16)
    cx, cy = int(size * 0.80), int(size * 0.80)
    d.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r], fill=WHITE)
    # tik
    t = dot_r
    d.line([(cx - t * 0.45, cy), (cx - t * 0.08, cy + t * 0.38)], fill=EMERALD_DARK, width=max(2, int(size * 0.035)))
    d.line([(cx - t * 0.08, cy + t * 0.38), (cx + t * 0.5, cy - t * 0.3)], fill=EMERALD_DARK, width=max(2, int(size * 0.035)))

    return img


def main():
    os.makedirs(PUB, exist_ok=True)
    # favicon.png (64) — Next metadata ikonu
    make_icon(64).save(os.path.join(PUB, "favicon.png"))
    # apple-touch (180)
    make_icon(180).save(os.path.join(PUB, "apple-touch-icon.png"), sizes=(180, 180))
    # logo.png (512) — JSON-LD publisher referansı için de kullanılabilir
    make_icon(512).save(os.path.join(PUB, "logo.png"), sizes=(512, 512))
    # favicon.ico — 16/32/48 çoklu
    base = make_icon(48)
    base.save(os.path.join(PUB, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
    print("uretildi:", [f for f in os.listdir(PUB) if f.startswith(("favicon", "apple", "logo"))])


if __name__ == "__main__":
    main()
