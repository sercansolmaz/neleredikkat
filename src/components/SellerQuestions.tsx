import React from 'react';
import { QuestionToAsk } from '@/types/guide';
import { HelpCircle, MessageSquare } from 'lucide-react';

interface SellerQuestionsProps {
  questions?: QuestionToAsk[];
}

export default function SellerQuestions({ questions }: SellerQuestionsProps) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Satıcıya / Hizmet Sağlayıcıya Mutlaka Sorulacak Sorular
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Pazarlık yapmadan veya ödeme gerçekleştirmeden önce bu soruların yanıtını teyit edin.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {questions.map((q, idx) => (
          <div
            key={q.id || idx}
            className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 space-y-2"
          >
            <div className="flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                "{q.question}"
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 border-l-2 border-amber-400/40 ml-2">
              <strong className="text-slate-700 dark:text-slate-300">Neden Önemli:</strong> {q.whyItMatters}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
