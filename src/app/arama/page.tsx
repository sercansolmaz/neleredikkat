'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import GuideCard from '@/components/GuideCard';
import { searchGuides, SearchResult } from '@/lib/search';
import { getPopularGuides } from '@/data/guides';
import { Search, ShieldAlert, Sparkles, Inbox } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const q = rawQuery.trim();
    if (q) {
      const res = searchGuides(q);
      setResults(res);
      setHasSearched(true);

      // Log search query anonymously to backend
      if (!logged) {
        fetch('/api/log-search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: q,
            resultFound: res.length > 0,
            resultCount: res.length
          })
        }).catch(err => console.warn('Search logging error:', err));
        setLogged(true);
      }
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [rawQuery, logged]);

  const popularGuides = getPopularGuides(6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Search Header */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-6 text-center max-w-4xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            NelerDikkat Arama Motoru
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Aradığınız ürün veya kararla ilgili tüm kıstasları ve kontrol maddelerini bulun.
          </p>
        </div>

        <SearchBar placeholder="Örn: laptop alırken, ev kiralarken..." size="large" />
      </div>

      {/* Results Display */}
      {hasSearched ? (
        results.length > 0 ? (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-600" />
                "{rawQuery}" için {results.length} Sonuç Bulundu
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map(({ guide }) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </section>
        ) : (
          /* Requirement #14: Bulunamayan Arama UI */
          <section className="space-y-10">
            <div className="bg-amber-50/70 dark:bg-amber-950/30 rounded-3xl border-2 border-amber-200 dark:border-amber-900/60 p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
                <Inbox className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Bu konuda henüz rehberimiz yok.
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                  <strong>"{rawQuery}"</strong> başlığı içerik ekibimizin sırasına otomatik olarak eklenmiştir. Talebe göre en kısa sürede yayınlanacaktır.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 text-xs font-semibold">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Anonim Arama Talebiniz Kaydedildi</span>
              </div>
            </div>

            {/* Yakın / Popüler Öneriler */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                İlginizi Çekebilecek Diğer Rehberler
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {popularGuides.map(guide => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            </div>
          </section>
        )
      ) : (
        /* Standby state when query is empty */
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Öne Çıkan Rehberler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Arama yükleniyor...</div>}>
      <SearchContent />
    </Suspense>
  );
}
