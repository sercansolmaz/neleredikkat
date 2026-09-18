import { Guide } from '@/types/guide';

export interface NeedChain {
  before: string[];
  together: string[];
  secondHand: string[];
  next: string[];
}

const EMPTY: NeedChain = { before: [], together: [], secondHand: [], next: [] };

/**
 * Ana karar sayfaları için editoryal ihtiyaç zincirleri.
 * İlişki mantığı: önce ne seçilir → birlikte ne gerekir → ikinci el alternatifi → sonraki ihtiyaç.
 * Yeni kümeler geldikçe yalnız bu harita genişletilir; Guide veri modeli değişmez.
 */
const CURATED_CHAINS: Record<string, Partial<NeedChain>> = {
  'motosiklet-alirken': {
    together: [
      'motosiklet-kaski-alirken',
      'motosiklet-montu-alirken',
      'motosiklet-eldiveni-alirken',
      'motosiklet-botu-alirken',
      'motosiklet-interkomu-alirken',
      'motosiklet-kilidi-alirken',
      'motosiklet-lastigi-alirken',
      'motosiklet-topcase-alirken'
    ],
    secondHand: ['ikinci-el-motosiklet-alirken']
  },
  'mikrofon-alirken': {
    together: ['ses-karti-alirken', 'kulaklik-alirken', 'podcast-mikseri-alirken', 'studyo-monitoru-alirken'],
    next: ['kamera-alirken', 'video-isigi-alirken', 'teleprompter-alirken']
  },
  'kamera-alirken': {
    before: ['kamera-lensi-alirken'],
    together: ['tripod-alirken', 'video-isigi-alirken', 'kablosuz-mikrofon-alirken', 'harici-ssd-alirken'],
    next: ['teleprompter-alirken']
  },
  'laptop-alirken': {
    together: ['monitor-alirken', 'usb-c-hub-alirken', 'harici-ssd-alirken', 'kulaklik-alirken'],
    next: ['wifi-router-alirken', 'mesh-wifi-alirken']
  },
  'ikinci-el-araba-alirken': {
    together: ['otomobil-lastigi-alirken', 'arac-akusu-alirken', 'arac-kamerasi-alirken', 'arac-brandasi-alirken'],
    next: ['tavan-bagaji-alirken', 'aku-takviye-cihazi-alirken', 'arac-kompresoru-alirken']
  },
  'ikinci-el-elektrikli-otomobil-alirken': {
    before: ['ev-sarj-istasyonu-alirken'],
    together: ['otomobil-lastigi-alirken', 'arac-kamerasi-alirken'],
    secondHand: ['ikinci-el-araba-alirken']
  },
  'elektrikli-scooter-alirken': {
    together: ['motosiklet-kaski-alirken', 'motosiklet-kilidi-alirken'],
    next: ['bisiklet-alirken', 'elektrikli-bisiklet-alirken']
  },
  'wifi-router-alirken': {
    next: ['mesh-wifi-alirken'],
    together: ['guvenlik-kamerasi-alirken', 'usb-c-hub-alirken']
  },
  'kamp-cadiri-alirken': {
    together: ['kafa-lambasi-alirken', 'kamp-ocagi-alirken'],
    next: ['trekking-ayakkabisi-alirken']
  }
};

export function getNeedChain(guide: Guide, allGuides: Guide[]): NeedChain {
  const curated = CURATED_CHAINS[guide.id];
  if (curated) {
    const valid = new Set(allGuides.map(g => g.id));
    return {
      before: (curated.before || []).filter(id => valid.has(id)),
      together: (curated.together || []).filter(id => valid.has(id)),
      secondHand: (curated.secondHand || []).filter(id => valid.has(id)),
      next: (curated.next || []).filter(id => valid.has(id))
    };
  }

  // Genel fallback: ikinci el bağlantıları ayrı; diğer mevcut ilişkiler birlikte-gerekebilir.
  const secondHand = guide.relatedGuideIds.filter(id => id.startsWith('ikinci-el-'));
  return {
    ...EMPTY,
    together: guide.relatedGuideIds.filter(id => !secondHand.includes(id)),
    secondHand
  };
}
