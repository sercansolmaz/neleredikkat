'use client';

import React, { useState } from 'react';
import { ImportanceItem, Scenario } from '@/types/guide';
import ScenarioSelector from '@/components/ScenarioSelector';

interface ScenarioContainerProps {
  scenarios: Scenario[];
  importanceItems: ImportanceItem[];
}

export default function ScenarioContainer({
  scenarios,
  importanceItems
}: ScenarioContainerProps) {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);

  const selectedScenario = scenarios.find(s => s.id === selectedScenarioId);

  return (
    <div className="space-y-6">
      {scenarios.length > 0 && (
        <ScenarioSelector
          scenarios={scenarios}
          selectedScenarioId={selectedScenarioId}
          onSelectScenario={setSelectedScenarioId}
        />
      )}

      <div className="space-y-4">
        {importanceItems.map((item, index) => {
          const isHighlighted = selectedScenario
            ? item.scenarios?.includes(selectedScenario.id)
            : false;

          return (
            <div
              key={item.id || index}
              className={`bg-white dark:bg-slate-800 rounded-2xl border p-5 transition-all shadow-sm ${
                isHighlighted
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20'
                  : 'border-slate-200/80 dark:border-slate-700/80'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{item.title}</span>
                  {isHighlighted && (
                    <span className="text-[10px] uppercase font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                      Önemli
                    </span>
                  )}
                </h3>

                <div>
                  {item.importance === 'critical' && (
                    <span className="inline-block text-[11px] font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 px-2.5 py-0.5 rounded-full">
                      Kritik Önem
                    </span>
                  )}
                  {item.importance === 'important' && (
                    <span className="inline-block text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-0.5 rounded-full">
                      Önemli
                    </span>
                  )}
                  {item.importance === 'useful' && (
                    <span className="inline-block text-[11px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 rounded-full">
                      Faydalı
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
