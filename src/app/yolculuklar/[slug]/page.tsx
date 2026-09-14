import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getJourneyBySlug, DECISION_JOURNEYS } from '@/data/journeys';
import { getGuideById } from '@/data/guides';
import GuideCard from '@/components/GuideCard';
import { Compass, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

interface JourneyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DECISION_JOURNEYS.map(j => ({
    slug: j.slug
  }));
}

export async function generateMetadata({ params }: JourneyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);
  if (!journey) return {};

  return {
    title: `${journey.title} - Karar Yolculuğu`,
    description: journey.description
  };
}

export default async function JourneyDetailPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);

  if (!journey) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Ana Sayfa
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/yolculuklar" className="hover:text-emerald-600 transition-colors">
          Karar Yolculukları
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold truncate">
          {journey.title}
        </span>
      </nav>

      {/* Header Banner */}
      <header className="bg-gradient-to-r from-amber-500/10 via-slate-50 to-emerald-500/10 dark:from-amber-950/40 dark:via-slate-800 dark:to-emerald-950/40 rounded-3xl border border-amber-200/80 dark:border-amber-900/60 p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>{journey.steps.length} Adımlı Yolculuk</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          {journey.title}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {journey.description}
        </p>
      </header>

      {/* Steps List */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-amber-200 dark:before:bg-amber-900/60 before:z-0">
        {journey.steps.map((step, idx) => {
          const guide = getGuideById(step.guideId);

          return (
            <div key={step.guideId} className="relative z-10 flex items-start gap-4 sm:gap-6">
              
              {/* Step Number Circle */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-500 text-white font-black text-lg sm:text-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30 border-4 border-slate-50 dark:border-slate-900">
                #{step.order}
              </div>

              {/* Step Card */}
              <div className="flex-1 space-y-3 bg-white dark:bg-slate-800/90 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
                
                {step.note && (
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
                    💡 <strong>Adım İpucu:</strong> {step.note}
                  </p>
                )}

                {guide ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {guide.categorySlug.replace('-', ' ')}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {guide.checklistItems.length} kontrol maddesi
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {guide.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      {guide.description}
                    </p>

                    <Link
                      href={`/${guide.categorySlug}/${guide.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-colors shadow-md shadow-emerald-600/20"
                    >
                      <span>{step.order}. Adım Rehberini & Kontrol Listesini Aç</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">Rehber hazırlanıyor...</p>
                )}

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
