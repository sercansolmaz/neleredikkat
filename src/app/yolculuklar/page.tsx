import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { DECISION_JOURNEYS } from '@/data/journeys';
import JourneyCard from '@/components/JourneyCard';
import { Compass, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Karar Yolculukları - Adım Adım Rehber Rotaları',
  description: 'İlk motosikletinizi alırken, ev ofisinizi kurarken veya bebeğiniz doğarken yapmanız gereken tüm seçimleri adım adım tamamlayın.'
};

export default function JourneysIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Ana Sayfa
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">
          Karar Yolculukları
        </span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-100 to-emerald-500/10 dark:from-amber-950/40 dark:via-slate-800 dark:to-emerald-950/40 rounded-3xl border border-amber-200/60 dark:border-amber-900/40 p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>Sıralı Karar Rotaları</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Karar Yolculukları
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Büyük yaşam kararları veya dönüm noktalarında birden fazla ürün/hizmet seçimi yapmanız gerekir. Yolculuk rotaları ile hiçbir kritik adımı atlamadan sırayla ilerleyin.
        </p>
      </div>

      {/* Journeys List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DECISION_JOURNEYS.map(journey => (
          <JourneyCard key={journey.id} journey={journey} />
        ))}
      </div>

    </div>
  );
}
