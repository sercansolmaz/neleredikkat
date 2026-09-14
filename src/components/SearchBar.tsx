'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { searchGuides, SearchResult } from '@/lib/search';

interface SearchBarProps {
  placeholder?: string;
  autoFocus?: boolean;
  size?: 'normal' | 'large';
}

const ROTATING_EXAMPLES = [
  'ikinci el araba alırken',
  'laptop alırken',
  'ev kiralarken',
  'bebek arabası alırken',
  'klima alırken',
  'motosiklet kaskı alırken',
  'ikinci el iPhone alırken'
];

export default function SearchBar({ placeholder, autoFocus = false, size = 'large' }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotating placeholder effect
  useEffect(() => {
    if (placeholder) return;
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % ROTATING_EXAMPLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [placeholder]);

  // Live search trigger
  useEffect(() => {
    if (query.trim().length >= 2) {
      const matched = searchGuides(query);
      setResults(matched.slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsOpen(false);
    router.push(`/arama?q=${encodeURIComponent(query.trim())}`);
  };

  const handleChipClick = (term: string) => {
    setQuery(term);
    router.push(`/arama?q=${encodeURIComponent(term)}`);
  };

  const isLarge = size === 'large';

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-slate-400">
          <Search className={isLarge ? 'w-6 h-6 text-emerald-600' : 'w-5 h-5 text-slate-400'} />
        </div>

        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          autoFocus={autoFocus}
          placeholder={
            placeholder ||
            `Örn: ${ROTATING_EXAMPLES[placeholderIndex]}...`
          }
          className={`w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl border-2 transition-all outline-none shadow-lg shadow-slate-200/50 dark:shadow-none ${
            isLarge
              ? 'pl-13 pr-32 py-4 text-base sm:text-lg border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500'
              : 'pl-11 pr-24 py-2.5 text-sm border-slate-200 dark:border-slate-700 focus:border-emerald-500'
          }`}
        />

        <button
          type="submit"
          className={`absolute right-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-600/20 ${
            isLarge ? 'px-5 py-2.5 text-sm' : 'px-3.5 py-1.5 text-xs'
          }`}
        >
          <span>Kontrol Et</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Rotating Sample Chips under hero bar */}
      {isLarge && !query && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5">
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Örnek aramalar:
          </span>
          {ROTATING_EXAMPLES.slice(0, 4).map((term, idx) => (
            <button
              key={idx}
              onClick={() => handleChipClick(term)}
              className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/60"
            >
              {term}
            </button>
          ))}
        </div>
      )}

      {/* Live Search Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50 animate-in fade-in duration-150">
          {results.length > 0 ? (
            <div className="p-2 space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Eşleşen Rehberler ({results.length})
              </div>
              {results.map(({ guide }) => (
                <button
                  key={guide.id}
                  onClick={() => {
                    setIsOpen(false);
                    router.push(`/${guide.categorySlug}/${guide.slug}`);
                  }}
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors group"
                >
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors block">
                      {guide.title}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="capitalize font-medium text-emerald-600 dark:text-emerald-400">
                        {guide.categorySlug.replace('-', ' ')}
                      </span>
                      <span>•</span>
                      <span>{guide.checklistItems.length} kontrol maddesi</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}

              <div className="pt-2 border-t border-slate-100 dark:border-slate-700 px-3 py-2">
                <button
                  onClick={handleSubmit}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Tüm sonuçları gör ("{query}")
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-5 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                "{query}" ile tam eşleşen rehber bulunamadı
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tüm kategorilerde ve benzer başlıklarda aramak için Enter'a basın.
              </p>
              <button
                onClick={handleSubmit}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-colors"
              >
                Arama Sonuçları Sayfasına Git
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
