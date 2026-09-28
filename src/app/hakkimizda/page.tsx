import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, FileSearch, ClipboardList, RefreshCw, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda — NelerDikkat Neden Var?',
  description: 'NelerDikkat.com bir ürün tavsiye sitesi değildir: satın almadan önce neyi kontrol etmen gerektiğini söyleyen bağımsız bir karar platformudur.',
  alternates: { canonical: '/hakkimizda/' },
  openGraph: {
    title: 'Hakkımızda — NelerDikkat Neden Var?',
    description: 'Ürün tavsiye etmiyoruz; yanlış kararı önleyen kontrol listeleri üretiyoruz.',
    url: 'https://neleredikkat.com/hakkimizda/',
    images: [{ url: '/og/teknoloji/default.png', width: 1200, height: 630, alt: 'NelerDikkat Hakkımızda' }]
  }
};

export default function HakkimizdaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'NelerDikkat.com Hakkında',
    url: 'https://neleredikkat.com/hakkimizda/',
    mainEntity: {
      '@type': 'Organization',
      name: 'NelerDikkat.com',
      url: 'https://neleredikkat.com/',
      logo: { '@type': 'ImageObject', url: 'https://neleredikkat.com/logo.png' }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">Hakkımızda</span>
      </nav>

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          NelerDikkat Neden Var?
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Çünkü internet "en iyi 10 X" listeleriyle dolu; oysa bir karar verirken ihtiyacın olan şey
          "en iyisi" değil, <strong>yanlış olanı eleme mantığı</strong>.
        </p>
      </header>

      <section className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="flex gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white mb-1">Ne yapıyoruz</h2>
            <p>
              Bir ürünü, hizmeti veya kararı seçmeden önce hangi kriterlere bakılacağını, hangi risklerin
              kontrol edileceğini ve satıcıya hangi soruların sorulacağını söylüyoruz. Her rehber;
              kriterler, kontrol listesi, kırmızı bayraklar ve karar skoruyla birlikte gelir.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <FileSearch className="w-6 h-6 text-emerald-600 flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white mb-1">Ne yapmıyoruz</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ürün veya model önermiyoruz — "hangi tipi ara" diyoruz, "hangi markayı al" demiyoruz.</li>
              <li>Satış veya yönlendirme komisyonuyla çalışan bir vitrin değiliz.</li>
              <li>Sponsorlu içerikte cevaplar para ile değişmez; iş birlikleri açıkça etiketlenir.</li>
              <li>Hukuki, tıbbi veya finansal danışmanlık vermiyoruz — karar destekçisiyiz.</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3">
          <ClipboardList className="w-6 h-6 text-emerald-600 flex-shrink-0" />
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white mb-1">Farkımız ne</h2>
            <p>
              Kontrol listelerimiz "bilgi özeti" değil, <strong>eylem aracıdır</strong>: maddeyi kontrol
              ettikçe işaretler, sonunda hazırlık skorunu görür ve kararını PDF olarak çıkarırsın.
              Kritik bir kontrol eksikse skor ne kadar yüksek olursa olsun sistem seni uyarır.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-600" />
          Editoryal Yaklaşım
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Rehberlerimizi nasıl yazdığımızı ve güncellediğimizi{' '}
          <Link href="/metodoloji/" className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">Metodoloji sayfasında</Link>{' '}
          şeffaf biçimde paylaşıyoruz. Ses ve müzik teknolojisi alanındaki rehberler 20 yıllık saha
          deneyimiyle, diğer alanlar mevzuat ve sektör pratiği kaynaklarıyla yazılır — her rehberin
          güven kaynağı sayfasında görünür.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <RefreshCw className="w-3.5 h-3.5" />
          Rehberler düzenli olarak gözden geçirilir; gözden geçirme tarihi her sayfada yazılıdır.
        </div>
      </section>
    </div>
  );
}
