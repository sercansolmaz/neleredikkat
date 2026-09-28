import Link from 'next/link';
import { Calculator, Compass, Map, FileText, ChevronRight } from 'lucide-react';
import type { DecisionSearchResult } from '@/lib/search';

const TYPE_META = {
  guide: { label: 'Rehber', Icon: FileText, tone: 'text-emerald-700 dark:text-emerald-400' },
  tool: { label: 'Araç', Icon: Calculator, tone: 'text-teal-700 dark:text-teal-400' },
  hub: { label: 'Karar Merkezi', Icon: Compass, tone: 'text-blue-700 dark:text-blue-400' },
  journey: { label: 'Yolculuk', Icon: Map, tone: 'text-amber-700 dark:text-amber-400' }
};

export default function DecisionSearchCard({ result }: { result: DecisionSearchResult }) {
  const meta = TYPE_META[result.type];
  const Icon = meta.Icon;
  return (
    <Link
      href={result.href}
      className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="min-w-0 space-y-2">
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${meta.tone}`}>
          <Icon className="h-3.5 w-3.5" />
          {meta.label}
        </span>
        <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
          {result.title}
        </h3>
        <p className="line-clamp-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{result.description}</p>
      </div>
      <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-slate-300 transition-colors group-hover:text-emerald-600" />
    </Link>
  );
}
