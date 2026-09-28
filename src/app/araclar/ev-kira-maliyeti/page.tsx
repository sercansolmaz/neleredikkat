import type { Metadata } from 'next';
import Link from 'next/link';
import KiraCalculator from '@/components/KiraCalculator';
import { Calculator, ChevronRight, Home, ShieldCheck, FileSearch } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ev Kira Maliyeti Hesaplama — Gerçek Aylık Maliyet Ne Kadar?',
  description: 'Kira + aidat + depozito + emlakçı komisyonunu birlikte hesaplayın; ilk ay toplam çıkışı ve gelirinize göre bütçe bandını görün.',
  alternates: { canonical: '/araclar/ev-kira-maliyeti/' },
  openGraph: {
    title: 'Ev Kira Maliyeti Hesaplama — Gerçek Aylık Maliyet Ne Kadar?',
    description: 'Kira, aidat, depozito ve komisyonu birlikte hesaplayın; ilk ay çıkışını görün.',
    url: 'https://neleredikkat.com/araclar/ev-kira-maliyeti/',
    images: [{ url: '/og/ev-yasam/ev-kira-maliyeti.png', width: 1200, height: 630, alt: 'Ev Kira Maliyeti Hesaplama' }]
  }
};

export default function KiraPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Ev Kira Maliyeti Hesaplama Aracı',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    url: 'https://neleredikkat.com/araclar/ev-kira-maliyeti/',
    description: 'Kira, aidat, depozito ve komisyon birleşiminden oluşan gerçek konut maliyetini hesaplayan ücretsiz araç.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' }
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Emlakçı komisyonu yasal olarak en fazla ne kadar olabilir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Konut kiralamasında emlakçı komisyonu yasal olarak yıllık kira bedelinin %8ini geçemez — pratikte yaklaşık 1 aylık kiraya denk gelir. Bundan fazlası isteniyorsa itiraz edebilirsiniz.'
        }
      },
      {
        '@type': 'Question',
        name: 'Depozito en fazla kaç aylık kira olabilir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Türk Borçlar Kanununa göre kiralanan taşınmaz için depozito en fazla 3 aylık kira bedeli olabilir. Sözleşme usulüne uygun sonlandığında depozito iade edilir.'
        }
      },
      {
        '@type': 'Question',
        name: 'Aylık kiranın gelire oranı ne olmalı?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yaygın bütçe kuralı, konut maliyetinin (kira + aidat) net gelirin %30unu aşmamasıdır. %30–45 arası sınırda kabul edilir; üzeri bütçe riski taşır. Bu bir yasal sınır değil, finansal esneklik göstergesidir.'
        }
      }
    ]
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://neleredikkat.com/' },
      { '@type': 'ListItem', position: 2, name: 'Araçlar', item: 'https://neleredikkat.com/araclar/' },
      { '@type': 'ListItem', position: 3, name: 'Ev Kira Maliyeti Hesaplama', item: 'https://neleredikkat.com/araclar/ev-kira-maliyeti/' }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/araclar/" className="hover:text-emerald-600 transition-colors">Araçlar</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">Ev Kira Maliyeti Hesaplama</span>
      </nav>

      <header className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <Calculator className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ücretsiz Karar Aracı</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Ev Kira Maliyeti Hesaplama — Gerçek Maliyetin Ne Kadar?
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          İlandaki kira rakamı kararın yalnızca bir parçasıdır. Aidat, depozito ve emlakçı komisyonu eklendiğinde ilk ay cebinden çıkan tutar iki katına yaklaşabilir.
          Aşağıdaki araç gerçek aylık maliyetini, ilk ay toplam çıkışını ve istersen gelirine göre bütçe bandını hesaplar.
        </p>
      </header>

      <KiraCalculator />

      {/* Sık yapılan hatalar */}
      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Home className="w-5 h-5 text-emerald-600" />
          Bu Hesabın Değiştirdiği Kararlar
        </h2>
        <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5">
          <li><strong>İki ilanı karşılaştırırken:</strong> 15.000 ₺ kira + 2.500 ₺ aidat olan daire, 17.000 ₺ kira + aidatsız daireden aylık 500 ₺ daha pahalıdır — ama ilan fotoğraflarında bu görünmez.</li>
          <li><strong>Depozito pazarlığında:</strong> 2 aylık yerine 1 aylık depozito kabul ettirmek, ilk ay çıkışını doğrudan bir kiralık kadar düşürür.</li>
          <li><strong>Komisyon müzakeresinde:</strong> %8 yasal üst sınırdır; üstü isteniyorsa gerekçe isteyin ve pazarlıkta kullanın.</li>
          <li><strong>Bütçe kararında:</strong> Aylık 500 ₺ aidat farkı, 3 yıllık kiralamada 18.000 ₺ demektir.</li>
        </ul>
      </section>

      {/* Sonraki adımlar */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/ev-yasam/ev-kiralarken/"
          className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors"
        >
          <FileSearch className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Ev Kiralarken Rehberi</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Malik kontrolü, sözleşme maddeleri, ev gezisi kontrol listesi ve kırmızı bayraklar.</div>
        </Link>
        <Link
          href="/yolculuklar/ev-kiraliyorum/"
          className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Ev Kiralıyorum Yolculuğu</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">İlandan sözleşmeye kadar sıralı karar adımları ve her adımın kontrol listesi.</div>
        </Link>
      </section>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">
        Bu araç genel geçerli oranlarla tavsiye üretir; hukuki danışmanlık değildir. Komisyon ve depozito üst sınırları ilgili mevzuata dayanır ve değişebilir — imza öncesi güncel durumu teyit edin.
      </p>
    </div>
  );
}
