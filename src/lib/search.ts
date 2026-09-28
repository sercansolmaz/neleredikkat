import { Guide } from '@/types/guide';
import { GUIDES } from '@/data/guides';
import { DECISION_HUBS } from '@/data/hubs';
import { DECISION_JOURNEYS } from '@/data/journeys';

export type DecisionSearchType = 'guide' | 'tool' | 'hub' | 'journey';

export interface DecisionSearchResult {
  type: DecisionSearchType;
  title: string;
  description: string;
  href: string;
  aliases: string[];
  category?: string;
  guide?: Guide;
  score: number;
}

export interface SearchResult {
  guide: Guide;
  score?: number;
}

const TOOLS: Omit<DecisionSearchResult, 'score'>[] = [
  { type: 'tool', title: 'Klima BTU Hesaplama Aracı', description: 'Odanın büyüklüğüne ve koşullarına göre klima kapasitesi hesapla.', href: '/araclar/klima-btu-hesaplama/', aliases: ['btu hesaplama', 'klima kapasitesi', 'oda klima hesabı'] },
  { type: 'tool', title: 'Ev Kira Maliyeti Hesaplama Aracı', description: 'Kira, aidat, depozito ve komisyonla gerçek maliyeti hesapla.', href: '/araclar/ev-kira-maliyeti/', aliases: ['kira maliyeti', 'ev kiralama bütçesi', 'depozito komisyon hesabı'] },
  { type: 'tool', title: 'Podcast Mikrofonu Seçici', description: 'Oda ve kullanım biçimine göre mikrofon tipini belirle.', href: '/araclar/podcast-mikrofonu-secici/', aliases: ['podcast mikrofonu', 'usb xlr', 'dinamik kondenser'] },
  { type: 'tool', title: 'Araç Sahip Olma Maliyeti Hesaplama', description: 'Yakıt, vergi, sigorta, bakım ve değer kaybıyla aylık maliyeti hesapla.', href: '/araclar/arac-sahip-olma-maliyeti/', aliases: ['araç maliyeti', 'araba aylık gider', 'otomobil sahip olma maliyeti'] }
];

const STOP_WORDS = new Set([
  'alirken', 'secerken', 'kiralarken', 'yaptirirken', 'yaparken', 'nelere', 'dikkat',
  'edilmeli', 'etmeliyim', 'rehberi', 'rehber', 'araci', 'hesaplama', 'karar'
]);

export function normalizeTurkish(text: string): string {
  return text
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const SYNONYM_GROUPS = [
  ['ev', 'konut', 'daire'], ['araba', 'otomobil', 'arac'], ['mikrofon', 'mic'],
  ['gunes', 'solar'], ['gozlugu', 'gozluk'], ['podcast', 'yayin'], ['kira', 'kiralama']
].map(group => group.map(normalizeTurkish));

function tokenize(text: string): string[] {
  return normalizeTurkish(text).split(/\s+/).filter(Boolean).filter(token => !STOP_WORDS.has(token));
}

function alternatives(token: string): string[] {
  return SYNONYM_GROUPS.find(items => items.includes(token)) || [token];
}

function entityHaystack(entity: Omit<DecisionSearchResult, 'score'>): string {
  return normalizeTurkish([entity.title, entity.description, entity.category || '', ...entity.aliases].join(' '));
}

function rank(entity: Omit<DecisionSearchResult, 'score'>, query: string): number | null {
  const normalizedQuery = normalizeTurkish(query);
  const tokens = tokenize(query);
  if (!normalizedQuery || tokens.length === 0) return null;

  const title = normalizeTurkish(entity.title);
  const titleTokens = title.split(' ');
  const aliases = entity.aliases.map(normalizeTurkish);
  const haystack = entityHaystack(entity);
  if (!tokens.every(token => alternatives(token).some(alt => haystack.includes(alt)))) return null;

  let score = tokens.reduce((total, token) => {
    const variants = alternatives(token);
    if (variants.some(alt => titleTokens.includes(alt))) return total + 12;
    if (variants.some(alt => title.includes(alt))) return total + 8;
    if (variants.some(alt => aliases.some(alias => alias.includes(alt)))) return total + 5;
    return total + 1;
  }, 0);

  if (title === normalizedQuery) score += 100;
  else if (title.includes(normalizedQuery)) score += 40;
  if (aliases.some(alias => alias === normalizedQuery)) score += 50;
  if (entity.type === 'hub') score += 4;
  if (entity.type === 'tool') score += 3;
  return score;
}

const SEARCH_ENTITIES: Omit<DecisionSearchResult, 'score'>[] = [
  ...GUIDES.map(guide => ({
    type: 'guide' as const,
    title: guide.shortTitle,
    description: guide.description,
    href: `/${guide.categorySlug}/${guide.slug}/`,
    aliases: [...guide.aliases, ...guide.keywords],
    category: guide.categorySlug,
    guide
  })),
  ...DECISION_HUBS.map(hub => ({
    type: 'hub' as const,
    title: hub.title,
    description: hub.description,
    href: `/konu/${hub.slug}/`,
    aliases: [hub.slug.replaceAll('-', ' '), hub.h1, ...hub.stages.map(stage => stage.label)]
  })),
  ...DECISION_JOURNEYS.map(journey => ({
    type: 'journey' as const,
    title: journey.title,
    description: journey.description,
    href: `/yolculuklar/${journey.slug}/`,
    aliases: [journey.slug.replaceAll('-', ' ')]
  })),
  ...TOOLS
];

export function searchDecisionContent(query: string, limit = 12): DecisionSearchResult[] {
  return SEARCH_ENTITIES
    .map(entity => ({ entity, score: rank(entity, query) }))
    .filter((item): item is { entity: Omit<DecisionSearchResult, 'score'>; score: number } => item.score !== null)
    .sort((a, b) => b.score - a.score || a.entity.title.localeCompare(b.entity.title, 'tr-TR'))
    .slice(0, limit)
    .map(({ entity, score }) => ({ ...entity, score }));
}

/** Geriye dönük rehber arama API'si. */
export function searchGuides(query: string): SearchResult[] {
  return searchDecisionContent(query)
    .filter((result): result is DecisionSearchResult & { guide: Guide } => result.type === 'guide' && Boolean(result.guide))
    .map(result => ({ guide: result.guide, score: result.score }));
}
