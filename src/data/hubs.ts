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
