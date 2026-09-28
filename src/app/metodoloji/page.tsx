import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Search, Filter, CalendarClock, Ban, PencilRuler } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Metodoloji — Rehberler Nasıl Yazılır ve Güncellenir?',
  description: 'NelerDikkat rehberlerinin yazım süreci: kriter seçim mantığı, kontrol listesi tasarımı, kaynak hiyerarşisi ve güncelleme politikası.',
  alternates: { canonical: '/metodoloji/' },
  openGraph: {
    title: 'Metodoloji — Rehberler Nasıl Yazılır?',
    description: 'Kriter seçim mantığı, kaynak hiyerarşisi ve güncelleme politikası.',
    url: 'https://neleredikkat.com/metodoloji/',
    images: [{ url: '/og/teknoloji/default.png', width: 1200, height: 630, alt: 'NelerDikkat Metodoloji' }]
  }
};

export default function MetodolojiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'NelerDikkat Metodoloji',
    url: 'https://neleredikkat.com/metodoloji/'
  };

  const steps = [
    {
      icon: <Search className="w-5 h-5 text-emerald-600" />,
      title: '1. Karar sorusunu tanımla',
      desc: 'Her rehber tek bir karar sorusuna cevap verir: "X alırken nelere dikkat edilmeli?" Soru netleşmeden kriter listesi yazılmaz.'
    },
    {
      icon: <Filter className="w-5 h-5 text-emerald-600" />,
      title: '2. Kriterleri eleme mantığıyla seç',
      desc: 'Kriterler "iyi özellik listesi" değil, "yanlış seçimi eleme" mantığıyla seçilir. Her kritere önem derecesi atanır: kritik (atılmazsa karar verilmez), önemli, faydalı.'
    },
    {
      icon: <PencilRuler className="w-5 h-5 text-emerald-600" />,
      title: '3. Kontrol listesini eyleme çevir',
      desc: 'Her madde bir eylem cümlesidir ("Ekspertiz yaptırdım", "RAM yükseltilebilir mi baktım"). Kullanıcı maddeleri işaretledikçe hazırlık skoru oluşur; kritik madde eksikse skor uyarıyla düşer.'
    },
    {
      icon: <CalendarClock className="w-5 h-5 text-emerald-600" />,
      title: '4. Gözden geçir ve tarih yaz',
      desc: 'Rehberler düzenli gözden geçirilir. Gözden geçirme tarihi ve güven kaynağı her sayfada görünür; mevzuat bağımlı içeriklerde (kira, araç) değişiklik anında yansıtılır.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">Metodoloji</span>
      </nav>

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Bir NelerDikkat Rehberi Nasıl Yazılır?
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Şeffaflık, güvenin ön koşuludur. Bu sayfa rehberlerimizin nasıl üretildiğini, kriterlerin
          nereden geldiğini ve ne zaman güncellendiğini açıklar.
        </p>
      </header>

      <section className="space-y-5">
        {steps.map(s => (
          <div key={s.title} className="flex gap-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-5">
            <div className="flex-shrink-0 mt-0.5">{s.icon}</div>
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white">{s.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Kaynak Hiyerarşisi</h2>
        <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-5">
          <li><strong>1. Mevzuat ve resmi standartlar:</strong> yasal sınırlar (depozito, komisyon), güvenlik standartları (ECE 22.06, i-Size, EN 713). Bunlar değişirse sayfa değişir.</li>
          <li><strong>2. Üretici dokümantasyonu ve sektörel teknik veri:</strong> kapasite hesapları, tüketim değerleri, teknik sınıflandırmalar.</li>
          <li><strong>3. Saha deneyimi:</strong> ses/müzik teknolojisi rehberlerinde 20 yıllık üretim ve perakende deneyimi; pratik kullanım kalıpları.</li>
          <li><strong>4. Editoryal değerlendirme:</strong> yukarıdaki kaynakların karar mantığına çevrilmesi. Bu katman özneldir ve "neden"iyle birlikte yazılır.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Ban className="w-5 h-5 text-rose-500" />
          Yapmadıklarımız
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-5">
          <li>Ürün/model sıralaması ve "en iyi" listeleri üretmeyiz — bunun için veri tabanımız veya test laboratuvarımız yok ve olmayan şeyi sıralamak güveni bozar.</li>
          <li>Ücretli yerleştirme veya link satışı yapmayız.</li>
          <li>Kaynağı belirsiz "uzmanlar öneriyor" cümleleri kullanmayız — her genelleme ya kaynağıyla ya deneyim etiketiyle gelir.</li>
          <li>Rehberleri sorgu hacmine göre değil, karar riskine göre önceliklendiririz.</li>
        </ul>
      </section>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        Metodolojiye dair öneri veya bir rehberde hata fark ettiğinizde{' '}
        <Link href="/iletisim/" className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">iletişim formundan</Link>{' '}
        bize yazabilirsiniz. Düzeltmeler kayıt altına alınır ve ilgili sayfanın gözden geçirme tarihi güncellenir.
      </p>
    </div>
  );
}
