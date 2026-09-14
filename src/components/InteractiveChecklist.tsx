'use client';

import React, { useState, useEffect } from 'react';
import { ChecklistItem } from '@/types/guide';
import { CheckCircle2, Circle, RotateCcw, Sparkles } from 'lucide-react';

interface InteractiveChecklistProps {
  guideSlug: string;
  items: ChecklistItem[];
}

export default function InteractiveChecklist({ guideSlug, items }: InteractiveChecklistProps) {
  const storageKey = `neleredikkat_checklist_${guideSlug}`;
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCheckedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    setIsLoaded(true);
  }, [storageKey]);

  // Toggle item
  const toggleItem = (id: string) => {
    const updated = { ...checkedIds, [id]: !checkedIds[id] };
    setCheckedIds(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage write error:', e);
    }
  };

  // Reset checklist
  const resetChecklist = () => {
    setCheckedIds({});
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {
      console.warn('localStorage clear error:', e);
    }
  };

  const completedCount = items.filter(item => checkedIds[item.id]).length;
  const totalCount = items.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isAllCompleted = totalCount > 0 && completedCount === totalCount;

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 shadow-sm">
      
      {/* Header & Progress Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100 dark:border-slate-700">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Uygulanabilir Kontrol Listesi</span>
            {isAllCompleted && (
              <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 animate-bounce">
                <Sparkles className="w-3.5 h-3.5" />
                Tamamlandı!
              </span>
            )}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Maddeleri kontrol ettikçe işaretleyin. Durumunuz cihazınızda saklanır.
          </p>
        </div>

        {/* Counter Badge & Reset Button */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 dark:bg-slate-700/80 px-4 py-2 rounded-xl text-center">
            <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
              {completedCount}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {' '}/ {totalCount} tamamlandı
            </span>
          </div>

          {completedCount > 0 && (
            <button
              onClick={resetChecklist}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
              title="Listeyi Sıfırla"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-slate-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-300 ease-out ${
              isAllCompleted
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                : 'bg-emerald-600'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items list */}
      <div className="space-y-2.5">
        {items.map((item, index) => {
          const isChecked = Boolean(checkedIds[item.id]);

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all border ${
                isChecked
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/50'
                  : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                )}
              </div>

              <div className="flex-1 space-y-1">
                <span
                  className={`text-sm font-medium transition-colors ${
                    isChecked
                      ? 'line-through text-slate-400 dark:text-slate-500'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {item.text}
                </span>

                {item.importance === 'critical' && (
                  <span className="inline-block text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded ml-2">
                    Kritik
                  </span>
                )}
              </div>

              <span className="text-xs font-semibold text-slate-300 dark:text-slate-600">
                #{index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
