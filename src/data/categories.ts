import { Category } from '@/types/guide';

export const CATEGORIES: Category[] = [
  {
    id: 'teknoloji',
    slug: 'teknoloji',
    name: 'Teknoloji',
    description: 'Bilgisayar, telefon, ev elektroniği ve dijital donanım kararları.',
    iconName: 'Laptop',
    color: 'emerald',
    popularTopics: ['Laptop alırken', 'Televizyon alırken', 'İkinci el iPhone alırken', 'Güvenlik kamerası alırken']
  },
  {
    id: 'ev-yasam',
    slug: 'ev-yasam',
    name: 'Ev & Yaşam',
    description: 'Ev kiralama, iklimlendirme, beyaz eşya ve mobilya seçimleri.',
    iconName: 'Home',
    color: 'amber',
    popularTopics: ['Ev kiralarken', 'Klima alırken', 'Robot süpürge alırken', 'Çalışma koltuğu alırken']
  },
  {
    id: 'otomobil-motosiklet',
    slug: 'otomobil-motosiklet',
    name: 'Otomobil & Motosiklet',
    description: 'İkinci el ve sıfır araç, motosiklet ekipmanları ve bakım kontrolleri.',
    iconName: 'Car',
    color: 'blue',
    popularTopics: ['İkinci el araba alırken', 'Motosiklet alırken', 'İkinci el motosiklet alırken', 'Kask alırken']
  },
  {
    id: 'anne-bebek',
    slug: 'anne-bebek',
    name: 'Anne & Bebek',
    description: 'Bebek arabası, oto koltuğu ve bebek bakım ürünleri kriterleri.',
    iconName: 'Baby',
    color: 'rose',
    popularTopics: ['Bebek arabası alırken', 'Oto koltuğu alırken', 'Bebek bezi seçerken']
  },
  {
    id: 'giyim-aksesuar',
    slug: 'giyim-aksesuar',
    name: 'Giyim & Aksesuar',
    description: 'Ayakkabı, kumaş kalitesi, saat ve teknik tekstil seçimleri.',
    iconName: 'Shirt',
    color: 'purple',
    popularTopics: ['Kışlık mont alırken', 'Koşu ayakkabısı alırken', 'Güneş gözlüğü alırken']
  },
  {
    id: 'spor-outdoor',
    slug: 'spor-outdoor',
    name: 'Spor & Outdoor',
    description: 'Kamp ekipmanları, kaykay, bisiklet ve doğa sporları kararları.',
    iconName: 'Tent',
    color: 'green',
    popularTopics: ['Kaykay alırken', 'Kamp çadırı alırken', 'Trekking botu alırken']
  },
  {
    id: 'hobi',
    slug: 'hobi',
    name: 'Hobi',
    description: 'Koleksiyon, kutu oyunları, el sanatları ve hobi gereçleri.',
    iconName: 'Gamepad2',
    color: 'indigo',
    popularTopics: ['Kutu oyunu alırken', 'Drone alırken', 'Fotoğraf makinesi alırken']
  },
  {
    id: 'seyahat',
    slug: 'seyahat',
    name: 'Seyahat',
    description: 'Valiz, uçak bileti, otel rezervasyonu ve rota planlama.',
    iconName: 'Plane',
    color: 'cyan',
    popularTopics: ['Valiz alırken', 'Otel rezerve ederken', 'Araç kiralarken']
  },
  {
    id: 'dijital-hizmetler',
    slug: 'dijital-hizmetler',
    name: 'Dijital Hizmetler',
    description: 'İnternet paketi, hosting, bulut depolama ve abonelik seçimleri.',
    iconName: 'Globe',
    color: 'teal',
    popularTopics: ['İnternet paketi seçerken', 'Hosting alırken', 'VPN seçerken']
  },
  {
    id: 'is-egitim',
    slug: 'is-egitim',
    name: 'İş & Eğitim',
    description: 'Online kurs, çalışma alanı, eğitim materyali ve yazılım seçimleri.',
    iconName: 'GraduationCap',
    color: 'violet',
    popularTopics: ['Online kurs seçerken', 'Dil okulu seçerken', 'Ergonomik masa alırken']
  },
  {
    id: 'ses-muzik-creator',
    slug: 'ses-muzik-creator',
    name: 'Ses, Müzik & Creator',
    description: 'Stüdyo ekipmanı, mikrofon, ses kartı ve yayıncı donanımları.',
    iconName: 'Mic',
    color: 'orange',
    popularTopics: ['Mikrofon alırken', 'Ses kartı alırken', 'Referans kulaklığı alırken']
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
