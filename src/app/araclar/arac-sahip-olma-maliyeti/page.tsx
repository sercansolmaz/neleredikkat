import type { Metadata } from 'next';
import Link from 'next/link';
import AracTcoCalculator from '@/components/AracTcoCalculator';
import { Calculator, ChevronRight, Car, ShieldCheck, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Araç Sahip Olma Maliyeti Hesaplama — Arabanın Gerçek Aylık Maliyeti',
  description: 'Yakıt, MTV, kasko, bakım ve değer kaybını birlikte hesaplayın; aracın aylık gerçek sahip olma maliyetini ilan fiyatının yanında görün.',
  alternates: { canonical: '/araclar/arac-sahip-olma-maliyeti/' },
  openGraph: {
    title: 'Araç Sahip Olma Maliyeti Hesaplama',
    description: 'Yakıt + MTV + kasko + bakım + değer kaybı: arabanın aylık gerçek maliyeti.',
    url: 'https://neleredikkat.com/araclar/arac-sahip-olma-maliyeti/',
    images: [{ url: '/og/otomobil-motosiklet/arac-sahip-olma-maliyeti.png', width: 1200, height: 630, alt: 'Araç Sahip Olma Maliyeti Hesaplama' }]
  }
};

export default function AracTcoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Araç Sahip Olma Maliyeti Hesaplama Aracı',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    url: 'https://neleredikkat.com/araclar/arac-sahip-olma-maliyeti/',
    description: 'Yakıt, MTV, kasko, bakım ve amortisman bileşenlerinden aracın aylık toplam sahip olma maliyetini hesaplayan ücretsiz araç.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' }
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Aracın aylık gerçek maliyeti nasıl hesaplanır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aylık yakıt/enerji gideri, MTVnin on ikide biri, kasko/sigortanın on ikide biri ve bakım-lastik-parça tahmininin toplamı nakit çıkışı verir. Buna araç değer kaybı (yıllık değer kaybının on ikide biri) eklendiğinde gerçek sahip olma maliyeti ortaya çıkar.'
        }
      },
      {
        '@type': 'Question',
        name: 'Araç hangi yaşta en dengeli sahip olma maliyetine sahiptir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genel kabul, ilk 2-3 yıldaki değer kaybının en yüksek olduğudur; 3-7 yaş bandındaki araçlar amortisman düşerken bakım maliyetleri henüz patlamadığı için genelde en dengeli banttır. 8 yaş üzeri araçlarda bakım-parça payı belirgin artar.'
        }
      },
      {
        '@type': 'Question',
        name: 'Bu hesaplamaya neler dahil değil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Muayane ücreti, otopark, tünel-köprü geçişleri, beklenmedik onarımlar ve financing faizleri varsayılan olarak dahil değildir; kredi ile alımda faizi ayrıca bütçeye eklemek gerekir.'
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
      { '@type': 'ListItem', position: 3, name: 'Araç Sahip Olma Maliyeti', item: 'https://neleredikkat.com/araclar/arac-sahip-olma-maliyeti/' }
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
        <span className="text-slate-900 dark:text-white font-semibold">Araç Sahip Olma Maliyeti</span>
      </nav>

      <header className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <Calculator className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ücretsiz Karar Aracı</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Araç Sahip Olma Maliyeti — İlan Fiyatının Ötesini Gör
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          "Bu arabayı alabilir miyim?" sorusunun doğru hali şudur: <strong>"Ayda kaç lira sahip olacağım?"</strong> Yakıt, MTV, kasko, bakım ve sessiz ama en büyük kalem olan değer kaybı birleşince, 900 bin liralık bir aracın aylık gerçek maliyeti çoğu sürpriz yaratır.
        </p>
      </header>

      <AracTcoCalculator />

      {/* Karar bağlamı */}
      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Car className="w-5 h-5 text-emerald-600" />
          Bu Hesabın Değiştirdiği Kararlar
        </h2>
        <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5">
          <li><strong>Bütçe kararında:</strong> Aynı peşinatla alınabilen iki araçtan yıllık 20-30 bin ₺ farklı sahip olma maliyetli olanı olabilir — fark genelde yakıt türü ve yaş bandından gelir.</li>
          <li><strong>Yaş bandında:</strong> 0-2 yaş aracın değer kaybı, 8+ yaş aracın yıllık bakım farkından büyük olabilir; "yeni alayım başım ağrımasın" her zaman daha ucuz değildir ama her zaman da pahalı değildir — hesapla gör.</li>
          <li><strong>Elektrikli geçişte:</strong> Enerji maliyeti benzinin çeyreği olabilir; ama evde şarj imkânın yoksa karar değişir. Bu aracın elektriğini ev şarjı fiyatıyla hesapla.</li>
          <li><strong>Kira karşılaştırmasında:</strong> Aracın aylık gerçek maliyetini aylık kira/gider kalemlerinizle aynı masaya koyarak bütçenin gerçek kapasitesini gör.</li>
        </ul>
      </section>

      {/* Sonraki adımlar */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/otomobil-motosiklet/ikinci-el-araba-alirken/"
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors">
          <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">İkinci El Araba Rehberi</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Ekspertiz, tramer, kilometre, şasi kontrol listesi ve kırmızı bayraklar.</div>
        </Link>
        <Link href="/yolculuklar/ev-kiraliyorum/"
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors">
          <Compass className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Bütçe Kararlarını Karşılaştır</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Aracın aylık maliyetini kira ve diğer bütçe kalemleriyle aynı masaya koy.</div>
        </Link>
      </section>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">
        MTV bantları ve bakım oranları tahmini ortalamalardır; güncel tarifeler ve model bazlı tüketim değerleri sonucu değiştirir. Bu araç finansal danışmanlık değildir.
      </p>
    </div>
  );
}
