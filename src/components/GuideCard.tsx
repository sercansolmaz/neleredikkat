import React from 'react';
import Link from 'next/link';
import { Guide } from '@/types/guide';
import { CheckSquare, Clock, ArrowUpRight, Flag } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  const criticalCount = guide.importanceItems.filter(i => i.importance === 'critical').length;

  return (
    <Link
      href={`/${guide.categorySlug}/${guide.slug}`}
      className="group bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-5 shadow-sm hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between"
    >
      <div className="space-y-3">
        {/* Category & Time Badge */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
            {guide.categorySlug.replace('-', ' ')}
          </span>
          <div className="flex items-center gap-1 text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{guide.estimatedReadTimeMinutes} dk</span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
            {guide.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
            {guide.description}
          </p>
        </div>
      </div>

      {/* Footer stats */}
      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
            {guide.checklistItems.length} kontrol
          </span>
          
          {criticalCount > 0 && (
            <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400 font-medium">
              <Flag className="w-3.5 h-3.5" />
              {criticalCount} kritik
            </span>
          )}
        </div>

        <span className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-0.5">
          İncele
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
