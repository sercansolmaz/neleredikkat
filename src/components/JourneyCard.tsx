import React from 'react';
import Link from 'next/link';
import { DecisionJourney } from '@/types/guide';
import { Compass, ArrowRight } from 'lucide-react';

interface JourneyCardProps {
  journey: DecisionJourney;
}

export default function JourneyCard({ journey }: JourneyCardProps) {
  return (
    <Link
      href={`/yolculuklar/${journey.slug}`}
      className="group bg-gradient-to-br from-amber-500/5 via-slate-50 to-emerald-500/5 dark:from-amber-950/20 dark:via-slate-900 dark:to-emerald-950/20 rounded-2xl border border-amber-200/60 dark:border-amber-900/40 p-5 sm:p-6 hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Karar Yolculuğu
          </span>
          <span className="text-xs font-medium text-slate-400">
            {journey.steps.length} Adım
          </span>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {journey.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
            {journey.description}
          </p>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-amber-100 dark:border-amber-950/60 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
        <span>Yolculuğu Başlat</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
