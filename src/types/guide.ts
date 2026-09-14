export type ImportanceLevel = 'critical' | 'important' | 'useful';

export interface ImportanceItem {
  id: string;
  title: string;
  description: string;
  importance: ImportanceLevel;
  scenarios?: string[]; // Scenario IDs this item is especially critical for
}

export interface ChecklistItem {
  id: string;
  text: string;
  importance: ImportanceLevel;
  category?: string;
}

export interface RedFlag {
  id: string;
  title: string;
  explanation: string;
}

export interface QuestionToAsk {
  id: string;
  question: string;
  whyItMatters: string;
  target: 'seller' | 'service' | 'self';
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  recommendedCriteriaIds: string[];
}

export interface Guide {
  id: string;
  slug: string; // e.g. "laptop-alirken"
  categorySlug: string; // e.g. "teknoloji"
  title: string; // e.g. "Laptop Alırken Nelere Dikkat Edilmeli?"
  shortTitle: string; // e.g. "Laptop Alırken"
  description: string;
  intro: string[]; // 2-4 concise paragraphs
  keywords: string[];
  aliases: string[]; // e.g. ["bilgisayar", "notebook", "dizüstü"]
  estimatedReadTimeMinutes: number;
  lastUpdated: string;
  status: 'published' | 'draft';

  importanceItems: ImportanceItem[];
  checklistItems: ChecklistItem[];
  redFlags: RedFlag[];
  questions?: QuestionToAsk[];
  scenarios?: Scenario[];
  relatedGuideIds: string[];
  journeyIds?: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  popularTopics: string[];
}

export interface DecisionJourneyStep {
  guideId: string;
  order: number;
  note?: string;
}

export interface DecisionJourney {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  steps: DecisionJourneyStep[];
}

export interface SearchLogItem {
  id: string;
  query: string;
  timestamp: string;
  resultFound: boolean;
  resultCount: number;
}
