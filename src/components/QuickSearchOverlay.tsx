'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, ShieldAlert, ChevronRight, X } from 'lucide-react';
import { searchGuides, SearchResult } from '@/lib/search';

interface QuickSearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Ekran ortasında açılan canlı arama overlay'i (command palette).
 * Navbar'daki Hızlı Arama butonu ve ⌘K / Ctrl+K ile açılır.
 */
export default function QuickSearchOverlay({ open, onClose }: QuickSearchOverlayProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Açılınca focus + body scroll kilidi
  useEffect(() => {
    if (open) {
      setQuery('');
      setResults([]);
      setActiveIndex(-1);
      document.body.style.overflow = 'hidden';
      // Overlay mount sonrası focus
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = '';
      };
    }
    document.body.style.overflow = '';
  }, [open]);

  // Live search
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length >= 2) {
      const matched = searchGuides(trimmed);
      setResults(matched.slice(0, 7));
      setActiveIndex(matched.length > 0 ? 0 : -1);
    } else {
      setResults([]);
      setActiveIndex(-1);
    }
  }, [query]);

  const go = useCallback((path: string) => {
    onClose();
    router.push(path);
  }, [onClose, router]);

  const goToAllResults = useCallback(() => {
    const q = query.trim();
    if (!q) return;
    go(`/arama?q=${encodeURIComponent(q)}`);
  }, [go, query]);

  if (!open) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const total = results.length + (results.length > 0 ? 1 : 0); // +1: "tüm sonuçlar"
      if (total > 0) setActiveIndex(i => (i + 1) % total);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const total = results.length + (results.length > 0 ? 1 : 0);
      if (total > 0) setActiveIndex(i => (i - 1 + total) % total);
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length === 0) {
        goToAllResults();
        return;
      }
      if (activeIndex >= 0 && activeIndex < results.length) {
        const { guide } = results[activeIndex];
        go(`/${guide.categorySlug}/${guide.slug}`);
      } else {
        goToAllResults();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] sm:pt-[16vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Hızlı Arama"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-150">

        {/* Input satırı */}
        <div className="flex items-center gap-3 px-4 border-b border-slate-100 dark:border-slate-700">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Neye dikkat etmelisin? Örn: laptop alırken..."
            className="w-full py-4 text-sm sm:text-base bg-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white"
            aria-label="Arama sorgusu"
            autoComplete="off"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sonuçlar */}
        <div className="max-h-[55vh] overflow-y-auto">
          {query.trim().length >= 2 ? (
            results.length > 0 ? (
              <div className="p-2">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Eşleşen Rehberler ({results.length})
                </div>
                {results.map(({ guide }, idx) => (
                  <button
                    key={guide.id}
                    onClick={() => go(`/${guide.categorySlug}/${guide.slug}`)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`w-full text-left flex items-center justify-between gap-3 p-3 rounded-xl transition-colors ${
                      activeIndex === idx
                        ? 'bg-emerald-50 dark:bg-slate-700/70'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="min-w-0 space-y-0.5">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white block truncate">
                        {guide.title}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="capitalize font-medium text-emerald-600 dark:text-emerald-400">
                          {guide.categorySlug.replace('-', ' ')}
                        </span>
                        <span>•</span>
                        <span className="whitespace-nowrap">{guide.checklistItems.length} kontrol</span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-colors ${
                      activeIndex === idx ? 'text-emerald-600' : 'text-slate-300 dark:text-slate-600'
                    }`} />
                  </button>
                ))}

                {/* Tüm sonuçlar */}
                <button
                  onClick={goToAllResults}
                  onMouseEnter={() => setActiveIndex(results.length)}
                  className={`w-full text-left px-3 py-2.5 mt-1 rounded-xl border-t border-slate-100 dark:border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1 ${
                    activeIndex === results.length
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  <span className="truncate">
                    &quot;{query.trim()}&quot; için tüm sonuçları gör — arama sayfasına git
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                </button>
              </div>
            ) : (
              <div className="p-8 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  &quot;{query.trim()}&quot; ile eşleşen rehber bulunamadı
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Aramayı arama sayfasında sürdürmek için Enter&apos;a bas.
                </p>
                <button
                  onClick={goToAllResults}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-colors"
                >
                  Arama Sayfasına Git
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          ) : (
            <div className="p-6 text-center space-y-1.5">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                En az 2 karakter yaz — sonuçlar anında burada listelenir
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                ↑ ↓ ile gezin, Enter ile aç, Esc ile kapat
              </p>
            </div>
          )}
        </div>

        {/* Alt bilgi çubuğu */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/40 text-[10px] text-slate-400 dark:text-slate-500">
          <span>NelerDikkat canlı rehber araması</span>
          <span className="hidden sm:inline">Esc kapat • ⌘K aç/kapat</span>
        </div>
      </div>
    </div>
  );
}
