import { DecisionJourney } from '@/types/guide';

export const DECISION_JOURNEYS: DecisionJourney[] = [
  {
    id: 'ilk-motosikletimi-aliyorum',
    slug: 'ilk-motosikletimi-aliyorum',
    title: 'İlk Motosikletimi Alıyorum',
    description: 'Sürüşe başlamadan önce doğru motosiklet ve koruyucu ekipmanları seçmek için eksiksiz adım adım rehber yolculuğu.',
    iconName: 'Bike',
    steps: [
      { guideId: 'motosiklet-alirken', order: 1, note: 'Önce tarzınıza ve kullanım amacınıza uygun motosiklet türünü belirleyin.' },
      { guideId: 'ikinci-el-motosiklet-alirken', order: 2, note: 'Bütçe kısıtlıysa ikinci el motosiklette mekanik ve eksper kontrollerini yapın.' },
      { guideId: 'motosiklet-kaski-alirken', order: 3, note: 'Hayati önem taşıyan kask seçimi: ECE 22.06 standardı ve kafa yapısına tam uyum.' }
    ]
  },
  {
    id: 'bebek-geliyor',
    slug: 'bebek-geliyor',
    title: 'Bebek Geliyor',
    description: 'Yeni anne babalar için bebeğin doğumundan ilk yıllarına kadar gereken kritik güvenlik ve konfor seçimleri.',
    iconName: 'Baby',
    steps: [
      { guideId: 'bebek-arabasi-alirken', order: 1, note: 'Günlük yaşam tarzınıza ve bagaj hacminize uygun bebek arabasını seçin.' },
      { guideId: 'oto-koltugu-alirken', order: 2, note: 'i-Size (R129) standartlı güvenli oto koltuğu tercihi yapın.' },
      { guideId: 'bebek-bezi-alirken', order: 3, note: 'Hassas bebek cildine uygun, emiciliği yüksek ve sızdırmaz bezi seçin.' }
    ]
  },
  {
    id: 'home-office-kuruyorum',
    slug: 'home-office-kuruyorum',
    title: 'Home Office Kuruyorum',
    description: 'Verimli, ergonomik ve uzun süreli çalışmaya uygun ev ofisi kurulumu kararları.',
    iconName: 'Building2',
    steps: [
      { guideId: 'laptop-alirken', order: 1, note: 'İş yükünüze uygun mobil performans sunan bir dizüstü bilgisayar seçin.' },
      { guideId: 'calisma-koltugu-alirken', order: 2, note: 'Omurga sağlığınız için tam bel destekli ergonomik çalışma koltuğu belirleyin.' },
      { guideId: 'klima-alirken', order: 3, note: 'İdeal çalışma ortamı sıcaklığı ve hava kalitesi için inverter klima tercihi yapın.' },
      { guideId: 'mikrofon-alirken', order: 4, note: 'Online toplantılarda net ses iletimi sağlayan USB veya XLR mikrofon seçin.' }
    ]
  },
  {
    id: 'yeni-evimi-kuruyorum',
    slug: 'yeni-evimi-kuruyorum',
    title: 'Yeni Evimi Kuruyorum',
    description: 'Yeni bir eve taşınırken kira, çalışma alanı, iklimlendirme ve temel yaşam kararlarını sırayla değerlendir.',
    iconName: 'Home',
    steps: [
      { guideId: 'ev-kiralarken', order: 1, note: 'Evi ve toplam aylık maliyeti sözleşme öncesinde kontrol et.' },
      { guideId: 'klima-alirken', order: 2, note: 'Odanın koşullarına ve enerji tüketimine uygun iklimlendirme seç.' },
      { guideId: 'calisma-masasi-alirken', order: 3, note: 'Çalışma alanının ölçüsünü ve kullanım biçimini belirle.' },
      { guideId: 'calisma-koltugu-alirken', order: 4, note: 'Uzun süreli kullanım için ergonomi ve ayar seçeneklerini kontrol et.' }
    ]
  },
  {
    id: 'ev-kiraliyorum',
    slug: 'ev-kiraliyorum',
    title: 'Ev Kiralıyorum',
    description: 'Kiralık ev ararken ilanı, evin fiziksel durumunu, toplam maliyeti ve sözleşme öncesi kontrolleri sırayla değerlendir.',
    iconName: 'Home',
    steps: [
      { guideId: 'ev-kiralarken', order: 1, note: 'İlanı ve konumu yalnızca fotoğraflara göre değil, günlük ihtiyaçlarına göre değerlendir.' },
      { guideId: 'klima-alirken', order: 2, note: 'Isıtma-soğutma altyapısını ve olası enerji giderlerini ayrıca kontrol et.' },
      { guideId: 'wifi-router-alirken', order: 3, note: 'Taşınmadan önce internet altyapısı ve bağlantı koşullarını doğrula.' }
    ]
  },
  {
    id: 'ilk-podcastimi-kuruyorum',
    slug: 'ilk-podcastimi-kuruyorum',
    title: 'İlk Podcast Setup’ımı Kuruyorum',
    description: 'Podcast üretimine başlarken mikrofon, ses kartı, kayıt akışı ve görüntü ekipmanını kullanım amacına göre seç.',
    iconName: 'Mic',
    steps: [
      { guideId: 'mikrofon-alirken', order: 1, note: 'Odanın gürültüsü ve konuşma biçimine göre mikrofon tipini belirle.' },
      { guideId: 'ses-karti-alirken', order: 2, note: 'Giriş sayısı, bağlantı tipi ve kulaklık izleme ihtiyacını kontrol et.' },
      { guideId: 'podcast-mikseri-alirken', order: 3, note: 'Birden fazla konuşmacı ve canlı yayın ihtiyacın varsa mikser özelliklerini karşılaştır.' },
      { guideId: 'kamera-alirken', order: 4, note: 'Video da üreteceksen kamera, ışık ve ses akışını birlikte planla.' }
    ]
  }
];

export function getJourneyBySlug(slug: string): DecisionJourney | undefined {
  return DECISION_JOURNEYS.find(j => j.slug === slug);
}
