'use client';

import React from 'react';
import { Scenario } from '@/types/guide';
import { SlidersHorizontal, Check } from 'lucide-react';

interface ScenarioSelectorProps {
  scenarios: Scenario[];
  selectedScenarioId: string | null;
  onSelectScenario: (id: string | null) => void;
}

export default function ScenarioSelector({
  scenarios,
  selectedScenarioId,
  onSelectScenario
}: ScenarioSelectorProps) {
  if (!scenarios || scenarios.length === 0) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/70 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Kullanım Senaryonuza Göre Filtreleyin
          </span>
        </div>
        {selectedScenarioId && (
          <button
            onClick={() => onSelectScenario(null)}
            className="text-xs text-slate-500 hover:text-emerald-600 underline"
          >
            Filtreyi Temizle
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectScenario(null)}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
            selectedScenarioId === null
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 border border-slate-200 dark:border-slate-600'
          }`}
        >
          Tüm Kriterler (Genel)
        </button>

        {scenarios.map(sc => {
          const isSelected = selectedScenarioId === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => onSelectScenario(sc.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
              }`}
            >
              {isSelected && <Check className="w-3.5 h-3.5" />}
              <span>{sc.title}</span>
            </button>
          );
        })}
      </div>

      {selectedScenarioId && (
        <p className="text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-200/60 dark:border-emerald-800/40">
          <strong>Seçilen Senaryo:</strong>{' '}
          {scenarios.find(s => s.id === selectedScenarioId)?.description}
        </p>
      )}
    </div>
  );
}
