# Google Search Policy — Uygulama Kuralları (son doğrulama: 2026-09-19)

> Kaynak önceliği: SADECE developers.google.com/search (Google Search Central).
> Aşağıdaki her kural SOURCE alanında resmi URL'yi taşır. SEO blogları/Twitter kural kaynağı değildir.

| # | Rule | Source | Last verified | Our implementation | Kategori |
|---|------|--------|---------------|--------------------|----------|
| 1 | Spam politikaları: scaled content abuse (çoğu sayfa değer üretmeden ölçeklenmiş içerik) yasak | https://developers.google.com/search/docs/essentials/spam-policies | 2026-09-19 | Content Value Gate: her indexlenebilir şablon için "var olma nedeni" kontrolü (PASS/REVIEW/BLOCK) | GOOGLE OFFICIAL REQUIREMENT |
| 2 | İçerik people-first olmalı, arama motoru için değil | https://developers.google.com/search/docs/fundamentals/creating-helpful-content | 2026-09-19 | AI judgment katmanı: intent çözümü, özgün veri/aracı/deneyim soruları | GOOGLE RECOMMENDATION |
| 3 | Affiliate sayfalar ürün açıklamasının kopyası/yeniden yazımı ise thin value | https://developers.google.com/search/docs/essentials/spam-policies | 2026-09-19 | ekipmantavsiyesi/audiogearprices: fiyat, karşılaştırma, deneyim, teknik veri zorunlu alan seti | GOOGLE OFFICIAL REQUIREMENT |
| 4 | Ücretli/affiliate linkler rel="sponsored" ile işaretlenmeli | https://developers.google.com/search/docs/crawling-indexing/links-crawlable | 2026-09-19 | Tüm amazon/amzn.to/tag= linklerinde rel="sponsored nofollow" — sqg.py WARNING kontrolü | GOOGLE RECOMMENDATION |
| 5 | Her indexlenebilir sayfa self-canonical taşımalı | https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls | 2026-09-19 | sqg.py BLOCKER: canonical yok / başka URL'ye işaret | OUR INTERNAL QUALITY RULE (Google önerir, zorunlu değil) |
| 6 | Sitemap'e yalnızca 200 + canonical + indexlenebilir URL'ler | https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap | 2026-09-19 | Sitemap QC: noindex/redirect/non-canonical URL sitemap'ten çıkarılır | GOOGLE RECOMMENDATION |
| 7 | lastmod yalnızca gerçek içerik değişikliğinde güncellenmeli | https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping | 2026-09-19 | lastmod = içerik hash değişimi (deploy'a bağlı değil) | GOOGLE RECOMMENDATION |
| 8 | hreflang çift yönlü (reciprocal) + x-default olmalı | https://developers.google.com/search/docs/specialty/international/managing-multi-site-sites | 2026-09-19 | AGP locale sayfaları: hreflang karşılıklılık testi sqg'de | GOOGLE RECOMMENDATION |
| 9 | Product schema'daki fiyat/availability görünür içerikle tutarlı olmalı; reviewRating uydurulamaz | https://developers.google.com/search/docs/appearance/structured-data/product | 2026-09-19 | sqg: JSON-LD parse + fiyat-vs-görünür-fiyat karşılaştırma (yolda) | GOOGLE OFFICIAL REQUIREMENT (rich result şartı) |
| 10 | Yapılandırılmış veri geçersizse rich result kaybı | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | 2026-09-19 | CI'da Rich Results Test mantığına yakın parse + alan zorunluluğu | GOOGLE OFFICIAL REQUIREMENT |
| 11 | robots.txt noindex için geçerli YÖNTEM DEĞİL (yalnızca crawl engeli; noindex meta kullan) | https://developers.google.com/search/docs/crawling-indexing/robots/intro | 2026-09-19 | URL'leri sitemapten çıkar + meta noindex, robots.txt değil | GOOGLE OFFICIAL REQUIREMENT |
| 12 | Indexing API YALNIZCA JobPosting ve VideoObject içinde BroadcastEvent için geçerlidir; genel sayfalar için KULLANILMAZ | https://developers.google.com/search/apis/indexing-api | 2026-09-19 | index-gsc projesinde genel sayfalara Indexing API çağrısı YOK (kota dalgalması + politika ihlali riski); URL Inspection API sampling kullan | GOOGLE OFFICIAL REQUIREMENT |
| 13 | Soft 404 (200 dönen boş sayfa) kalite sinyali olarak zararlı | https://developers.google.com/search/docs/monitoring/search-console-api | 2026-09-19 | sqg: <150 kelime + template metni → soft-404 şüphesi WARNING | YOUR INFERENCE (Google soft 404'ü tanımlar; eşik bizim kuralımız) |
| 14 | Core Web Vitals page experience sinyali | https://developers.google.com/search/docs/appearance/page-experience | 2026-09-19 | CF Pages + SSR/SSG; LCP/CLS izleme (CrUX API, yolda) | GOOGLE RECOMMENDATION |
| 15 | Googlebot JS'i render eder ama SSR/ön-render güvenli | https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics | 2026-09-19 | hesaportada: calculator UI client-side kalabilir, formül/açıklama/aşağıdaki içerik SSR'da | GOOGLE RECOMMENDATION |

## Changelog
- 2026-09-19: İlk sürüm. Indexing API kısıtı (madde 12) resmi sayfadan doğrulandı: "can only be used to crawl pages with either JobPosting or BroadcastEvent embedded in a VideoObject."
