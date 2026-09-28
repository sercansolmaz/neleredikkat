import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mic, Car, Baby, Home, ShieldQuestion } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editoryal Ekip ve Uzmanlık Alanları',
  description: 'NelerDikkat rehberlerini kim yazıyor, hangi alan hangi uzmanlık ve kaynakla destekleniyor — güven kaynakları şeffaf listesi.',
  alternates: { canonical: '/editorial-ekip/' },
  openGraph: {
    title: 'Editoryal Ekip ve Uzmanlık Alanları',
    description: 'Rehberleri kim yazıyor, hangi alan hangi uzmanlıkla.',
    url: 'https://neleredikkat.com/editorial-ekip/',
    images: [{ url: '/og/teknoloji/default.png', width: 1200, height: 630, alt: 'NelerDikkat Editoryal Ekip' }]
  }
};

export default function EkipPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'AboutPage', name: 'NelerDikkat Editoryal Ekip', url: 'https://neleredikkat.com/editorial-ekip/' },
      {
        '@type': 'Person',
        name: 'Sercan Solmaz',
        jobTitle: 'Kurucu Editör',
        url: 'https://neleredikkat.com/editorial-ekip/',
        knowsAbout: [
          'Ses mühendisliği', 'Müzik prodüksiyonu', 'Ses kayıt teknolojileri',
          'Podcast prodüksiyonu', 'Ekipman seçimi'
        ]
      }
    ]
  };

  const areas = [
    {
      icon: <Mic className="w-6 h-6 text-emerald-600" />,
      title: 'Ses, Müzik & Creator',
      source: 'Doğrudan uzmanlık',
      desc: '20 yıllık ses/müzik teknolojileri kariyeri: 15 yıl Zuhal Müzik profesyonel ses teknolojileri yönetimi, kendi prodüksiyon ve danışmanlık şirketi, ~25.000 aboneli ses kayıt odaklı YouTube kanalı. Bu kategorideki rehberler birinci elden saha deneyimiyle yazılır.',
      person: 'Sercan Solmaz'
    },
    {
      icon: <Car className="w-6 h-6 text-blue-600" />,
      title: 'Otomobil & Motosiklet',
      source: 'Mevzuat + sektör pratiği',
      desc: 'Ekspertiz süreçleri, hasar kaydı (Tramer) sorguları, MTV ve devre işlemleri mevzuat kaynaklıdır; kontrol listeleri bağımsız ekspertiz sektörünün standart uygulama adımlarından derlenir. Hukuki bağlamda nihai kaynak ilgili mevzuattır.',
      person: 'Editoryal ekip'
    },
    {
      icon: <Home className="w-6 h-6 text-amber-600" />,
      title: 'Ev & Yaşam / Kiralama',
      source: 'Mevzuat + tüketici pratiği',
      desc: 'Kira hukuku unsurları (depozito üst sınırı, komisyon sınırı) Türk Borçlar Kanunu ve ilgili mevzuata dayanır. Teknik konularda (klima kapasitesi, izolasyon) üretici dokümantasyonu ve sektör hesaplama standartları kullanılır.',
      person: 'Editoryal ekip'
    },
    {
      icon: <Baby className="w-6 h-6 text-rose-500" />,
      title: 'Anne & Bebek',
      source: 'Resmi güvenlik standartları',
      desc: 'Bu kategori rehberlerinin omurgası uluslararası güvenlik standartlarıdır: oto koltuğunda i-Size (R129), park yatakta EN 713/ASTM F406, bebek bezinde deri dostu sınıflandırmalar. Güvenlik önerileri hiçbir koşulda deneyimle esnetilmez.',
      person: 'Editoryal ekip'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">Editoryal Ekip</span>
      </nav>

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Rehberleri Kim Yazıyor?
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Her rehberin güveninin bir kaynağı vardır ve bu sayfa o kaynakları şeffaf listeler.
          Uzmanlıkla yazılmayan alanlarda asla uzmanmış gibi davranmıyoruz — o alanları
          mevzuat ve standartlarla yazıyoruz.
        </p>
      </header>

      {/* Kurucu editör kartı */}
      <section className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/60 p-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg">SS</div>
          <div>
            <div className="font-extrabold text-slate-900 dark:text-white">Sercan Solmaz</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-400 font-bold">Kurucu Editör</div>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Yaklaşık 20 yıldır ses, müzik teknolojileri ve prodüksiyon alanında çalışıyor; 15 yıl Zuhal Müzik'te
          profesyonel ses teknolojileri bölümlerini yönetti. Kendi eğitim, danışmanlık ve prodüksiyon şirketini
          yürütüyor; ses kayıt ve müzik teknolojileri odaklı YouTube kanalında ~25.000 aboneye eğitim içerikleri
          üretiyor. NelerDikkat'te ses/müzik/creator rehberlerinin yazarı, diğer kategorilerin editoryal süpervizörü.
        </p>
      </section>

      {/* Alan bazlı güven kaynakları */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Alan Bazlı Güven Kaynakları</h2>
        {areas.map(a => (
          <div key={a.title} className="flex gap-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-5">
            <div className="flex-shrink-0 mt-0.5">{a.icon}</div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white">{a.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded">{a.source}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{a.desc}</p>
              <div className="text-[11px] text-slate-400 font-semibold">Sorumlu: {a.person}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 flex gap-3">
        <ShieldQuestion className="w-5 h-5 text-slate-400 flex-shrink-0" />
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Bir rehberde tutarsızlık veya güncelliğini yitirmiş bilgi fark ederseniz{' '}
          <Link href="/iletisim/" className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">iletişim formunu</Link>{' '}
          kullanın. Düzeltmeler, ilgili rehberin gözden geçirme tarihini günceller.
        </p>
      </section>
    </div>
  );
}
