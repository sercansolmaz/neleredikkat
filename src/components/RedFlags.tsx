import React from 'react';
import { RedFlag } from '@/types/guide';
import { AlertTriangle, Flag } from 'lucide-react';

interface RedFlagsProps {
  flags: RedFlag[];
}

export default function RedFlags({ flags }: RedFlagsProps) {
  if (!flags || flags.length === 0) return null;

  return (
    <div className="bg-rose-50/50 dark:bg-rose-950/20 rounded-2xl border border-rose-200 dark:border-rose-900/60 p-5 sm:p-7 space-y-5">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/20">
          <Flag className="w-5 h-5 fill-current text-rose-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            🚩 Kırmızı Bayraklar (Uzak Durmanız Gerekenler)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Aşağıdaki durumlar ciddi performans kaybı, güvenlik riski veya maddi zarar göstergesidir.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {flags.map((flag, idx) => (
          <div
            key={flag.id || idx}
            className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-rose-100 dark:border-rose-900/40 shadow-sm space-y-1.5"
          >
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{flag.title}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
              {flag.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
