import type { Metadata } from 'next';
import Link from 'next/link';
import BtuCalculator from '@/components/BtuCalculator';
import { Calculator, ChevronRight, Thermometer, FileText, Wrench, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Klima BTU Hesaplama — Oda Alanına Göre Kaç BTU?',
  description: 'Odanın m²si, tavan yüksekliği, güneş durumu, izolasyon ve kat bilgisine göre gereken klima BTU değerini hesaplayın; uygun standart kapasiteyi görün.',
  alternates: { canonical: '/araclar/klima-btu-hesaplama/' },
  openGraph: {
    title: 'Klima BTU Hesaplama — Oda Alanına Göre Kaç BTU?',
    description: 'Odanın m²si ve koşullarına göre gereken klima kapasitesini hesaplayın.',
    url: 'https://neleredikkat.com/araclar/klima-btu-hesaplama/',
    images: [{ url: '/og/ev-yasam/_kategori.png', width: 1200, height: 630, alt: 'Klima BTU Hesaplama' }]
  }
};

export default function BtuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Klima BTU Hesaplama Aracı',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    url: 'https://neleredikkat.com/araclar/klima-btu-hesaplama/',
    description: 'Oda alanı ve koşullarına göre gereken klima BTU kapasitesini hesaplayan ücretsiz araç.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' }
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://neleredikkat.com/' },
      { '@type': 'ListItem', position: 2, name: 'Araçlar', item: 'https://neleredikkat.com/araclar/' },
      { '@type': 'ListItem', position: 3, name: 'Klima BTU Hesaplama', item: 'https://neleredikkat.com/araclar/klima-btu-hesaplama/' }
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
        <span className="text-slate-900 dark:text-white font-semibold">Klima BTU Hesaplama</span>
      </nav>

      <header className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <Calculator className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ücretsiz Karar Aracı</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Klima BTU Hesaplama — Odana Kaç BTU Gerekir?
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Yanlış kapasite, klimaların en pahalı hatasıdır: küçük cihaz sürekli çalışıp yüksek elektrik yakar, büyük cihaz sık devre-dışı kalıp mekânı nemli bırakır.
          Aşağıdaki araç oda koşullarına göre ihtiyacın kapasiteyi hesaplar ve en uygun standart bandı önerir.
        </p>
      </header>

      <BtuCalculator />

      {/* Nasıl çalışır */}
      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-emerald-600" />
          Hesaplama Nasıl Yapılır?
        </h2>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Türkiye pratiklerinde yaygın kabul, <strong>1 m² için yaklaşık 600 BTU/h</strong> taban değeridir. Bu taban; tavan yüksekliği, güneş yükü, izolasyon, kat konumu, kişi sayısı ve mutfak kullanımı gibi koşullarla düzeltilir.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Yüksek tavan (3 m+):</strong> Hacim arttığı için +%10</li>
            <li><strong>Güneş alan cephe / geniş cam:</strong> Isı yükü arttığı için +%10, gölgeli konumda −%10</li>
            <li><strong>Zayıf izolasyon:</strong> Isı kaybı-kazanımı arttığı için +%15</li>
            <li><strong>En üst kat:</strong> Çatıdan gelen ısı için +%10</li>
            <li><strong>2 kişiden fazlası:</strong> Her ek kişi için +600 BTU</li>
            <li><strong>Mutfak:</strong> Pişirme cihazlarının ısı yükü için +4.000 BTU</li>
          </ul>
        </div>
      </section>

      {/* Sonraki adımlar */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/ev-yasam/klima-alirken/"
          className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors"
        >
          <FileText className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Klima Alırken Rehberi</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Kapasite dışındaki tüm kriterler: inverter, enerji sınıfı, ses seviyesi, servis ağı.</div>
        </Link>
        <Link
          href="/ev-yasam/klima-alirken/#checklist"
          className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 transition-colors"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
          <div className="text-sm font-bold text-slate-900 dark:text-white">Kontrol Listesi</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Satın alma öncesi işaretleyeceğin kritik maddeler ve karar skoru.</div>
        </Link>
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-5">
          <Wrench className="w-5 h-5 text-slate-400 mb-2" />
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300">Montaj Kararı</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Cihaz kadar montaj önemlidir: keşif, iç-dış ünite mesafesi, izolasyon ve garanti şartları.</div>
        </div>
      </section>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">
        Bu araç ortalama koşullar için tavsiye üretir; bina özelinde ısı yükü hesabı (ısıl konfor/ASHRAE yöntemi) yerine geçmez. Kesin kapasite ve montaj kararı için yetkili servis keşfi isteyin.
      </p>
    </div>
  );
}
