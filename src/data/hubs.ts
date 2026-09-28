import { Guide } from '@/types/guide';

/**
 * Konu merkezleri (decision hubs) — bir dikeyin tüm kararlarını tek çatıda toplayan
 * küratif haritalar. Rehber slug listesi sabit; başlık/açıklama editoryal.
 * Yeni rehber eklendikçe ilgili merkezin listesi güncellenir.
 */

export interface DecisionHub {
  slug: string;              // /konu/<slug>/
  title: string;
  h1: string;
  description: string;
  intro: string[];           // 2-3 paragraf özgün giriş
  iconName: string;
  /** Karar aşamaları: satın alma yolculuğunun sıralı grupları */
  stages: {
    key: string;
    label: string;
    desc: string;
    guideIds: string[];
  }[];
  /** Bu merkeze bağlı karar araçları (araç sayfası path'i) */
  tools: { href: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export const DECISION_HUBS: DecisionHub[] = [
  {
    slug: 'ikinci-el-arac',
    title: 'İkinci El Araç Karar Merkezi',
    h1: 'İkinci El Araç Alırken Karar Merkezi — Tüm Kontroller Tek Çatı Altında',
    description: 'İkinci el araç alırken bütçeden ekspertize, hasar kaydından devreye kadar tüm karar adımları, kontrol listeleri ve maliyet araçları tek merkezde.',
    intro: [
      'İkinci el araç alımı, tüketici kararlarının en yüksek riskli olanlarından biridir: hata tek bir cümlelik ilanda gizli olabilir ve maliyeti yıllarca taşınır. Bu merkez, kararı ilandan devre aşamasına kadar sıralı adımlara böler.',
      'Her adımın kendi kontrol listesi, kırmızı bayrakları ve satıcıya sorulacak soruları vardır. En kritik kural: adımlardan herhangi biri tamamlanmadıysa karar ertelenir — pazarlık zorlaması bir kontrolü telafi etmez.'
    ],
    iconName: 'Car',
    stages: [
      {
        key: 'bütçe',
        label: '1. Bütçe ve Maliyet Kararı',
        desc: 'İlan fiyatı kararın yalnızca giriş kapısıdır; aylık gerçek sahip olma maliyeti belirleyicidir.',
        guideIds: []
      },
      {
        key: 'arac-secimi',
        label: '2. Araç ve Yakıt Türü Seçimi',
        desc: 'Kullanım amacına göre model segmenti, yakıt türü ve yaş bandı — sahiplik maliyetini baştan belirler.',
        guideIds: ['hibrit-otomobil-alirken', 'ikinci-el-elektrikli-otomobil-alirken', 'ev-sarj-istasyonu-alirken']
      },
      {
        key: 'inceleme',
        label: '3. İlan ve Aracı İnceleme',
        desc: 'Ana rehber: ekspertiz, hasar kaydı, kilometre doğrulama, şasi-podye ve test sürüşü kontrolleri.',
        guideIds: ['ikinci-el-araba-alirken']
      },
      {
        key: 'donanim',
        label: '4. Satın Alma Sonrası Donanım',
        desc: 'Aracı teslim aldıktan sonra gereken güvenlik ve kullanım ekipmanları.',
        guideIds: ['otomobil-lastigi-alirken', 'arac-akusu-alirken', 'arac-kamerasi-alirken', 'arac-brandasi-alirken', 'tavan-bagaji-alirken', 'aku-takviye-cihazi-alirken', 'arac-kompresoru-alirken']
      }
    ],
    tools: [
      {
        href: '/araclar/arac-sahip-olma-maliyeti/',
        title: 'Araç Sahip Olma Maliyeti',
        desc: 'Yakıt + MTV + kasko + bakım + değer kaybı: aylık gerçek maliyeti hesapla.'
      }
    ],
    faq: [
      {
        q: 'İkinci el araç alırken ilk önce ne yapılmalı?',
        a: 'Önce bütçe kararı: aracın aylık gerçek sahip olma maliyetini (yakıt, MTV, kasko, bakım ve değer kaybı) hesaplayın. İlan fiyatına göre verilen karar, altı ay sonra maliyet tablosuyla yüzleşen karardır.'
      },
      {
        q: 'Ekspertiz olmadan ikinci el araç alınır mı?',
        a: 'Alınmamalıdır. Bağımsız, TSE belgeli ekspertiz; hasar kaydı (Tramer), şasi-podye bütünlüğü ve kilometre doğrulaması için tek güvenilir yoldur. Satıcının "kendi ustasına gösterdim" teklifi bu kontrolün yerine geçmez.'
      },
      {
        q: 'Hangi yaş bandındaki ikinci el araç en dengelidir?',
        a: 'Genel kabul, 3-7 yaş bandıdır: ilk yılların yüksek değer kaybı geride kalmış, bakım maliyetleri henüz patlamamıştır. 8 yaş üstünde bakım-parça payı belirgin artar; her iki bantta da karar, araç bazlı kontrol listesiyle verilir.'
      }
    ]
  },
  {
    slug: 'ev-kiralama',
    title: 'Ev Kiralama Karar Merkezi',
    h1: 'Ev Kiralarken Karar Merkezi — İlandan Yerleşmeye Tüm Adımlar',
    description: 'Ev kiralarken bütçeden sözleşmeye, taşınmadan eve yerleşmeye kadar tüm karar adımları, kontrol listeleri ve maliyet hesaplama araçları tek merkezde.',
    intro: [
      'Ev kiralamak, çoğu insanın aylık bütçesinin en büyük kalemidir ve hata maliyeti bir yılla ölçülür: yanlış daire, yanlış sözleşme ya da hesaplanmamış aidat, yıl boyunca taşınır. Bu merkez kararı dört aşamaya böler.',
      'Kural basittir: sözleşme imzalanmadan önce her aşamanın kontrol listesi tamamlanır. "Sonra hallederiz" diyerek atlanan depozito, komisyon veya malik kontrolü, taşındıktan sonra pazarlık gücünü tamamen ortadan kaldırır.'
    ],
    iconName: 'Home',
    stages: [
      {
        key: 'bütçe',
        label: '1. Bütçe Kararı',
        desc: 'İlandaki kira sadece başlangıçtır; gerçek aylık maliyet aidat dahil hesaplanır.',
        guideIds: []
      },
      {
        key: 'ev-secimi',
        label: '2. Ev Seçimi ve İnceleme',
        desc: 'Ana rehber: ilan değerlendirme, malik kontrolü, ev gezisi kontrol listesi ve sözleşme maddeleri.',
        guideIds: ['ev-kiralarken']
      },
      {
        key: 'taşınma',
        label: '3. Taşınma',
        desc: 'Taşınma firması seçimi ve süreç kontrolü.',
        guideIds: ['nakliyat-firmasi-secerken']
      },
      {
        key: 'yerleşme',
        label: '4. Eve Yerleşme ve İyileştirme',
        desc: 'Konfor ve bakım kararları: iklimlendirme, tesisat, boya, temizlik ve tadilat hizmetleri.',
        guideIds: ['klima-alirken', 'tesisatci-secerken', 'boya-ustasi-secerken', 'temizlik-sirketi-secerken', 'tadilat-firmasi-secerken', 'isi-yalitimi-yaptirirken', 'pvc-pencere-alirken', 'banyo-yaptirirken', 'mutfak-yaptirirken']
      }
    ],
    tools: [
      {
        href: '/araclar/ev-kira-maliyeti/',
        title: 'Ev Kira Maliyeti Hesaplama',
        desc: 'Kira + aidat + depozito + komisyon: gerçek aylık maliyeti ve ilk ay çıkışını hesapla.'
      }
    ],
    faq: [
      {
        q: 'Ev kiralarken ilk önce ne kontrol edilmeli?',
        a: 'Önce bütçe: gerçek aylık maliyeti (kira + aidat) ve ilk ay toplam çıkışı (depozito + komisyon dahil) hesaplayın. Sonra evin kendisi değil, evin sahibi: tapu/malik kontrolü ve varsa ipotek-haciz durumu sözleşmeden önce doğrulanır.'
      },
      {
        q: 'Emlakçı komisyonu yasal olarak ne kadar olabilir?',
        a: 'Konut kiralamasında komisyon, yıllık kira bedelinin %8ini geçemez — pratikte yaklaşık bir aylık kiraya denk gelir. Fazlası isteniyorsa itiraz edilebilir.'
      },
      {
        q: 'Depozito en fazla kaç aylık kira olabilir?',
        a: 'Türk Borçlar Kanununa göre en fazla 3 aylık kira bedeli depozito istenebilir. Sözleşme usulüne uygun sonlandığında depozito iade edilir; iade edilmemesi halinde yazılı tutanak ve ödeme kanıtları belirleyici olur.'
      }
    ]
  },
  {
    slug: 'klima',
    title: 'Klima Karar Merkezi',
    h1: 'Klima Alırken Karar Merkezi — Kapasiteden Montaja Tüm Adımlar',
    description: 'Klima alırken BTU kapasitesinden inverter teknolojisine, montajdan bakıma kadar tüm karar adımları ve hesaplama araçları tek merkezde.',
    intro: [
      'Klima alımının iki pahalı hatası vardır: yanlış kapasite ve kötü montaj. Yanlış kapasite hem konforu hem elektrik faturasını bozar; kötü montaj ise verimli bir cihazı verimsiz çalıştırır. Bu merkez kararı bu iki riskin etrafında kurar.',
      'Önce odanın ihtiyacı olan kapasite hesaplanır, sonra cihaz kriterleri karşılaştırılır, en son montaj koşulları netleştirilir. Sırayı bozmak — önce model beğenip sonra odaya uydurmaya çalışmak — en sık yapılan hatadır.'
    ],
    iconName: 'Thermometer',
    stages: [
      {
        key: 'kapasite',
        label: '1. Kapasite Hesabı',
        desc: 'Odanın m²si ve koşulları gereken BTU değerini belirler; en kritik ilk adım.',
        guideIds: []
      },
      {
        key: 'cihaz',
        label: '2. Cihaz Seçimi',
        desc: 'Ana rehber: inverter teknolojisi, enerji sınıfı, ses seviyesi ve servis ağı kriterleri.',
        guideIds: ['klima-alirken']
      },
      {
        key: 'montaj',
        label: '3. Montaj ve Kurulum',
        desc: 'Cihaz kadar önemli olan montaj kararı: keşif, iç-dış ünite yerleşimi ve garanti koşulları.',
        guideIds: ['klima-montaji-yaptirirken']
      }
    ],
    tools: [
      {
        href: '/araclar/klima-btu-hesaplama/',
        title: 'Klima BTU Hesaplama',
        desc: 'Odanın m²si ve koşullarına göre gereken kapasiteyi 30 saniyede hesapla.'
      }
    ],
    faq: [
      {
        q: 'Klima alırken önce ne yapılmalı?',
        a: 'Önce kapasite hesabı: odanın m²si, tavan yüksekliği, güneş durumu, izolasyon ve kat konumuyla gereken BTU değeri bulunur. Kapasite belirlenmeden model karşılaştırmak, listeyi yanlış sıralamaktır.'
      },
      {
        q: 'İnverter klima her zaman daha mı mantıklı?',
        a: 'Uzun ve kesintili çalışma dönemlerinde (yaz boyunca yatak odası gibi) evet — inverter kompresör devri ihtiyaca göre ayarladığından tüketim düşer. Nadir ve kısa kullanımda fiyat farkı kendini amorti etmeyebilir; karar kullanım profiliyle verilir.'
      },
      {
        q: 'Klima montajı neden bu kadar önemli?',
        a: 'Montaj; iç-dış ünite mesafesi, boru izolasyonu ve eğim doğruluğu cihazın gerçek kapasitesini belirler. Yanlış montaj, verimli cihazı düşük verimle çalıştırır ve garanti kapsamını da riske atabilir. Ücretsiz keşif yapan yetkili servis tercih edilmelidir.'
      }
    ]
  },
  {
    slug: 'podcast-kurulumu',
    title: 'Podcast Kurulum Merkezi',
    h1: 'Podcast Setup Kurarken Karar Merkezi — Ses ve Görüntü Tüm Adımlar',
    description: 'Podcast kurarken mikrofon tipinden ses kartına, görüntü ekipmanına kadar tüm karar adımları, seçim araçları ve kontrol listeleri tek merkezde.',
    intro: [
      'Podcast kurulumunda en pahalı hata ekipmanı yanlış SIRADA almaktır: oda koşulu belirlenmeden alınan mikrofon, kayıt akışı kurulmadan alınan mikser, para kaybının en yaygın iki şekli. Bu merkez kurulumu dört aşamaya böler.',
      'Sıra önemlidir: önce oda ve mikrofon tipi kararı, sonra arayüz, sonra ancak görüntü. Her aşamanın kendi kontrol listesi ve kaçınma notları vardır — bir sonraki aşamaya geçmeden önceki aşamanın kararı netleşir.'
    ],
    iconName: 'Mic',
    stages: [
      { key: 'oda-mikrofon', label: '1. Oda ve Mikrofon Tipi Kararı', desc: 'Kayıt yapacağın odanın koşulu mikrofon tipini (dinamik/kondenser, USB/XLR) belirler.', guideIds: [] },
      { key: 'ses-zinciri', label: '2. Ses Zinciri', desc: 'Mikrofondan sonra: arayüz/ses kartı, kulaklık ve çok konuşmacı gereksinimleri.', guideIds: ['mikrofon-alirken', 'ses-karti-alirken', 'kulaklik-alirken', 'kablosuz-mikrofon-alirken', 'podcast-mikseri-alirken'] },
      { key: 'goruntu', label: '3. Görüntü ve Video', desc: 'Video podcast geçişi: kamera, lens, tripod, ışık ve teleprompter kararları.', guideIds: ['kamera-alirken', 'kamera-lensi-alirken', 'tripod-alirken', 'video-isigi-alirken', 'teleprompter-alirken'] },
      { key: 'monitors', label: '4. İzleme ve Üretim', desc: 'Kayıt sonrası düzenleme ve müzik üretimi uzantıları.', guideIds: ['studyo-monitoru-alirken', 'midi-klavye-alirken'] }
    ],
    tools: [
      { href: '/araclar/podcast-mikrofonu-secici/', title: 'Podcast Mikrofonu Seçici', desc: 'Odan ve kullanımına göre USB/XLR ve dinamik/kondenser yönünü 4 soruda belirle.' }
    ],
    faq: [
      { q: 'Podcaste başlarken önce ne alınmalı?', a: 'Önce oda kararı, sonra mikrofon. Oda koşulu (gürültü, yankı) mikrofon tipini belirler; mikrofon tipi de arayüz ihtiyacını. Sırayı bozarak alınan ekipman, odaya uymayan ekipmandır.' },
      { q: 'USB mikrofon yeterli mi yoksa XLR mi almalıyım?', a: 'Tek kişi + basit kurulum için USB yeterlidir. İleride ikinci mikrofon, mikser veya daha kaliteli ön amplifikatör planın varsa XLR + ses kartı baştan daha mantıklıdır; geçiş maliyeti daha yüksek olur.' },
      { q: 'Podcast için kamera şart mı?', a: 'Değildir — birçok başarılı podcast yalnızca seslidir. Video; dağıtım kanalını (YouTube vb.) genişletir ama ses kalitesini asla telafi etmez. Karar sırasında ses zinciri her zaman önceliklidir.' }
    ]
  }
];

export function getHubBySlug(slug: string): DecisionHub | undefined {
  return DECISION_HUBS.find(h => h.slug === slug);
}

/** Hub'un referans verdiği tüm rehberleri ( Guide[] ) sırayla döndürür. */
export function getHubGuides(hub: DecisionHub, allGuides: Guide[]): { stage: DecisionHub['stages'][number]; guides: Guide[] }[] {
  const byId = new Map(allGuides.map(g => [g.id, g]));
  return hub.stages.map(stage => ({
    stage,
    guides: stage.guideIds.map(id => byId.get(id)).filter((g): g is Guide => Boolean(g))
  }));
}
