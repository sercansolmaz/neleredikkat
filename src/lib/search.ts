import Fuse from 'fuse.js';
import { Guide } from '@/types/guide';
import { GUIDES } from '@/data/guides';

// Custom Turkish normalization helper
export function normalizeTurkish(text: string): string {
  return text
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .replace(/Ş/g, 'ş')
    .replace(/Ğ/g, 'ğ')
    .replace(/Ü/g, 'ü')
    .replace(/Ö/g, 'ö')
    .replace(/Ç/g, 'ç')
    .toLowerCase();
}

const fuseOptions = {
  includeScore: true,
  threshold: 0.4, // Good balance between exact match and fuzzy search
  location: 0,
  distance: 100,
  minMatchCharLength: 2,
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'shortTitle', weight: 0.25 },
    { name: 'aliases', weight: 0.2 },
    { name: 'keywords', weight: 0.1 },
    { name: 'description', weight: 0.05 }
  ]
};

const fuse = new Fuse(GUIDES, fuseOptions);

export interface SearchResult {
  guide: Guide;
  score?: number;
}

export function searchGuides(query: string): SearchResult[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const results = fuse.search(trimmed);
  
  return results.map(res => ({
    guide: res.item,
    score: res.score
  }));
}
