# Site-Specific Quality Rules (Search Quality Gate)

## audiogearprices.com (repo: sercansolmaz/audiogearprices, TS, CF Pages)
- Sitemap ~2454 URL: /compare 1051, /product 884, /glossary 157, /brand 147, /best* 150.
- Ürün sayfası min. veri seti (yoksa REVIEW/BLOCK): marka, model, kategori, ≥1 gerçek merchant fiyatı, currency, region, fiyat timestamp, availability; price history / historical low-high / merchant comparison güçlü artı.
- Locale (EN/DE/FR/ES/IT): html lang + karşılıklı hreflang + self-canonical locale bazlı; aynı içeriğin saf makine çevirisi çoğaltımı REVIEW; dil ile alışveriş bölgesi bağımsız (DE dili ≠ sadece DE pazarı).
- Canonical bugını düzelt: /product/shure-sm7b/ canonical'i slug'lı başka URL'ye işaret ediyor — sitemap URL'si ile canonical birebir olmalı.
- Cloudflare challenge, bot dışı UA'lı isteklere sitemap'te açılıyor; Googlebot'a açık kalmasını izle.

## hesaportada.net (repo tespit edilemedi — GitHub'da yok)
- 205 calculator URL. Değer = çalışan araç + formül + örnek + kaynak + güncelleme tarihi; mevzuat/oran verisi resmi kaynaktan doğrulanmalı.
- OBP duplicate title: /araclar/obp/ vs /araclar/obp-hesaplama/ → canonical/merge kararı gerekli.
- Calculator SSR içerikli (4.6KB, metin mevcut) — JS SEO riski düşük; tool interaction'ı client-side OK.
- Parametre varyantı URL üretimi (/1000-tl, /1100-tl...) başlarsa: bağımsız intent kanıtı aranır, aksi halde üretme.

## ekipmantavsiyesi.com (repo: sercansolmaz/ekipmantavsiyesi, TS, CF Pages)
- 956 URL; /ekipman/* 495. Thin-affiliate en yüksek risk burada.
- Amazon affiliate linkler (tag=solmazsercan-21) rel="sponsored" taşımıyor → düzeltilecek (spot kontrolde yok).
- /kategori/* eski URL'ler sitemap'te redirect'e gidiyor → sitemap'ten çıkar.
- Min. değer seti: gerçek kullanım deneyimi, teknik farkların pratik sonucu, kime uygun/değil, karşılaştırma, alternatif. Alan uzmanlığı (20 yıl ses/müzik teknolojisi) burada kullanılabilir en güçlü differentiator.

## neleredikkat.com (repo: sercansolmaz/neleredikkat, TS, CF Pages)
- 158 URL, "-alirken" guide formatı. Sert filtre hedefi: generic "X alırken 10 madde" listicle'ı BLOCK.
- Mevcut sayfalar medyan ~644 kelime; en zayıf 118 kelime → REVIEW.
- /teknoloji/monitor-alirken/ vs /teknoloji/laptop-alirken/ gibi kategori içi benzerlikler sha bazlı dupes'ta temiz; shingle-level kontrol CI'da sürsün.
- Topic cluster: rastgele keyword sayfası yerine kategori bazlı topical authority kümeleri.
