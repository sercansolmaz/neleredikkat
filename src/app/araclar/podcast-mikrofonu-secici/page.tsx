import type { Metadata } from 'next';
import Link from 'next/link';
import MicSelector from '@/components/MicSelector';
import { Mic, ChevronRight, Settings2, Radio, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Podcast Mikrofonu Seçici — USB mi XLR mi, Dinamik mi Kondenser mi?',
  description: 'Oda koşulun, konuşmacı sayın ve kullanım amacına göre hangi mikrofon tipini araman gerektiğini 4 soruda öğren; sık yapılan pahalı hatalardan kaçın.',
  alternates: { canonical: '/araclar/podcast-mikrofonu-secici/' },
  openGraph: {
    title: 'Podcast Mikrofonu Seçici — USB mi XLR mi, Dinamik mi Kondenser mi?',
    description: 'Oda koşulun ve kullanımına göre mikrofon tipini 4 soruda belirle.',
    url: 'https://neleredikkat.com/araclar/podcast-mikrofonu-secici/',
    images: [{ url: '/og/ses-muzik-creator/_kategori.png', width: 1200, height: 630, alt: 'Podcast Mikrofonu Seçici' }]
  }
};

export default function MicPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Podcast Mikrofonu Seçici',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    url: 'https://neleredikkat.com/araclar/podcast-mikrofonu-secici/',
    description: 'Oda koşulu, konuşmacı sayısı ve kullanım amacına göre mikrofon tipi (USB/XLR, dinamik/kondenser) öneren ücretsiz karar aracı.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' }
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://neleredikkat.com/' },
      { '@type': 'ListItem', position: 2, name: 'Araçlar', item: 'https://neleredikkat.com/araclar/' },
      { '@type': 'ListItem', position: 3, name: 'Podcast Mikrofonu Seçici', item: 'https://neleredikkat.com/araclar/podcast-mikrofonu-secici/' }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/araclar/" className="hover:text-emerald-600 transition-colors">Araçlar</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">Podcast Mikrofonu Seçici</span>
      </nav>

      <header className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <Mic className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ücretsiz Karar Aracı</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Podcast Mikrofonu Seçici — Yanlış Tipe Para Vermeyi Önle
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          En pahalı mikrofon hatası ses kalitesi hatası değil, <strong>tip hatasıdır</strong>: gürültülü odada kondenser alan, XLR mikrofonu ses kartısız satın alan, üç kişilik masaya tek mikrofon koyan herkes parasının bir kısmını kaybeder.
          Bu araç dört soruyla araman gereken tipi belirler — model önerisi değil, karar kriteri üretir.
        </p>
      </header>

      <MicSelector />

      {/* Temel kavramlar */}
      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          Bu Kararın Arkasındaki Mantık
        </h2>
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="flex gap-3">
            <Settings2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>USB mi XLR mi?</strong> Bağlantı kararıdır. USB tek kabloyla çalışır ve ilk kurulumda en az sürtünmeyi verir; XLR bir ses kartı/arayüz gerektirir ama kişi başı ayrı kanal, mikser ve ileride büyüme imkânı sunar. Çok konuşmacılı masalarda XLR neredeyse zorunlu hale gelir.
            </div>
          </div>
          <div className="flex gap-3">
            <Radio className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Dinamik mi kondenser mi?</strong> Odanın kararıdır. Kondenser sessiz ve akustik olarak kontrolsüz olmayan ortamda detay toplar; normal/gürültülü ev odasında ise oda sesini de kaydeder. Dinamik mikrofon ağzına yakın konuşulmak koşuluyla ev koşullarında daha öngörülebilir sonuç verir.
            </div>
          </div>
          <p>
            Bu iki karar bağımsızdır: USB dinamik, USB kondenser, XLR dinamik ve XLR kondenser kombinasyonlarının hepsi mevcuttur — hangisinin sana uyduğu oda + kullanım + arayüz tercihinden çıkar.
          </p>
        </div>
      </section>

      {/* Sonraki adımlar */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/ses-muzik-creator/mikrofon-alirken/"
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors">
          <Mic className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Mikrofon Alırken Rehberi</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Polar pattern, empédans, izleme: tip kararından sonraki tüm kriterler.</div>
        </Link>
        <Link href="/ses-muzik-creator/ses-karti-alirken/"
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors">
          <Settings2 className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Ses Kartı Rehberi</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">XLR yolunu seçtiysen: giriş sayısı, fantom güç, kulaklık izleme.</div>
        </Link>
        <Link href="/yolculuklar/ilk-podcastimi-kuruyorum/"
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors">
          <Radio className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Podcast Kurulum Yolculuğu</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Mikrofondan görüntüye kadar sıralı karar adımları.</div>
        </Link>
      </section>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">
        Bu araç genel üretim prensiplerine göre yön gösterir; stüdyo kurulumlarında akustik koşullar baskındır. Belirli model karşılaştırmaları için kardeş siteleri kullan.
      </p>
    </div>
  );
}
