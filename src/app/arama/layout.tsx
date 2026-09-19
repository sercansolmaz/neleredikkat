import type { Metadata } from "next";

/**
 * /arama/ — dahili arama sonuç sayfası.
 * Google arama sonuçlarına girmesi hedeflenmiş bağımsız içerik değildir;
 * crawl bütçesini gerçek guide sayfalarına bırakmak için noindex,follow.
 * Ref: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
 */
export const metadata: Metadata = {
  title: "Arama | NelerDikkat",
  robots: { index: false, follow: true },
};
