import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import GuideCard from '@/components/GuideCard';
import CategoryCard from '@/components/CategoryCard';
import JourneyCard from '@/components/JourneyCard';
import { getPopularGuides, getLatestGuides } from '@/data/guides';
import { CATEGORIES } from '@/data/categories';
import { DECISION_JOURNEYS } from '@/data/journeys';
import { ShieldCheck, Compass, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/' }
};

export default function HomePage() {
  const popularGuides = getPopularGuides(6);
  const latestGuides = getLatestGuides(6);

  return (
    <div className="space-y-16 pb-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-16 sm:py-24 border-b border-slate-200/60 dark:border-slate-800">
        
        {/* Background Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800 animate-in fade-in">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Karar vermeden önce kontrol et</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Neye dikkat etmelisin?
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal max-w-xl mx-auto">
              Bir ürün, hizmet veya karar yaz. Kontrol etmen gerekenleri kısa rehberler ve interaktif kontrol listeleriyle hemen gör.
            </p>
          </div>

          {/* Large Hero Search Bar */}
          <div className="pt-2">
            <SearchBar size="large" autoFocus />
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Popüler Rehberler */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Popüler Rehberler
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Kullanıcıların karar vermeden önce en çok kontrol ettiği konular.
              </p>
            </div>
            <Link
              href="/arama"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              Tümünü Gör
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

        {/* Section 2: Karar Yolculukları */}
        <section className="bg-gradient-to-r from-amber-500/10 via-slate-100/50 to-emerald-500/10 dark:from-amber-950/30 dark:via-slate-800/40 dark:to-emerald-950/30 rounded-3xl p-6 sm:p-8 border border-amber-200/50 dark:border-amber-900/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5" />
                Popüler Karar Yolculukları
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Karmaşık Kararları Adım Adım Tamamlayın
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Birden fazla ürün ve karar gerektiren durumlar için hazırlanmış sıralı rehber rotaları.
              </p>
            </div>

            <Link
              href="/yolculuklar"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-200/70 dark:bg-amber-900/60 hover:bg-amber-300 px-4 py-2.5 rounded-xl transition-colors self-start sm:self-auto"
            >
              Tüm Yolculukları İncele
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DECISION_JOURNEYS.map(journey => (
              <JourneyCard key={journey.id} journey={journey} />
            ))}
          </div>
        </section>

        {/* Section 3: Kategoriler */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              Kategoriler
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Teknolojiden ev kiralama ve çocuk bakımına kadar tüm tüketici karar alanları.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Section 4: Son Eklenen Rehberler */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Son Güncellenen Rehberler
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sisteme en son eklenen ve revize edilen güncel kontrol listeleri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
