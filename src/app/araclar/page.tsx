import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Karar Araçları — Hesaplayıcılar ve Seçiciler',
  description: 'Satın alma kararı öncesi kullanabileceğiniz ücretsiz hesaplama araçları: klima BTU hesaplama ve daha fazlası.',
  alternates: { canonical: '/araclar/' },
  openGraph: {
    title: 'Karar Araçları — Hesaplayıcılar ve Seçiciler',
    description: 'Satın alma kararı öncesi kullanabileceğiniz ücretsiz hesaplama araçları.',
    url: 'https://neleredikkat.com/araclar/',
    images: [{ url: '/og/teknoloji/default.png', width: 1200, height: 630, alt: 'Karar Araçları' }]
  }
};

const TOOLS = [
  {
    href: '/araclar/klima-btu-hesaplama/',
    title: 'Klima BTU Hesaplama',
    description: 'Odanın m²si, tavan yüksekliği, güneş durumu, izolasyon ve katına göre gereken klima kapasitesini hesapla; uygun standart bandı gör.'
  },
  {
    href: '/araclar/ev-kira-maliyeti/',
    title: 'Ev Kira Maliyeti Hesaplama',
    description: 'Kira + aidat + depozito + emlakçı komisyonunu birlikte hesapla; ilk ay toplam çıkışı ve gelirine göre bütçe bandını gör.'
  }
];

export default function AraclarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Karar Araçları',
    url: 'https://neleredikkat.com/araclar/',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: TOOLS.length,
      itemListElement: TOOLS.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.title,
        url: `https://neleredikkat.com${t.href}`
      }))
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">Araçlar</span>
      </nav>

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <Calculator className="w-3.5 h-3.5 text-emerald-600" />
          <span>Karar Araçları</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Hesaplayıcılar ve Seçiciler
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Bir rehberi okumakla karar vermek arasındaki fark ölçümektir. Bu araçlar, kontrol listelerinin ölçüm gerektiren adımlarını hesaplar — sonuçlar tavsiye niteliğindedir, keşif ve uzman doğrulamasının yerini almaz.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5">
        {TOOLS.map(t => (
          <Link
            key={t.href}
            href={t.href}
            className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 hover:border-emerald-400 transition-colors"
          >
            <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              {t.title}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{t.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
