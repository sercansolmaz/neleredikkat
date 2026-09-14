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
  }
];

export function getJourneyBySlug(slug: string): DecisionJourney | undefined {
  return DECISION_JOURNEYS.find(j => j.slug === slug);
}
