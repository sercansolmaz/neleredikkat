'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Compass, Layers, Menu, X, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import QuickSearchOverlay from '@/components/QuickSearchOverlay';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);

  // ⌘K / Ctrl+K ile aç/kapat
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setQuickSearchOpen(o => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Neler<span className="text-emerald-600 dark:text-emerald-400">Dikkat</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 block -mt-1">
                Karar vermeden önce kontrol et
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <div className="relative">
              <button
                onClick={() => setCatDropdownOpen(!catDropdownOpen)}
                onBlur={() => setTimeout(() => setCatDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-2 transition-colors"
              >
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Kategoriler</span>
              </button>

              {/* Categories Dropdown */}
              {catDropdownOpen && (
                <div className="absolute top-full left-0 w-72 mt-1 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2">
                  {CATEGORIES.map(cat => (
                    <Link
                      key={cat.id}
                      href={`/${cat.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-slate-400 font-normal">{cat.popularTopics.length} konu</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/yolculuklar"
              className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-2 transition-colors"
            >
              <Compass className="w-4 h-4 text-amber-500" />
              <span>Karar Yolculukları</span>
            </Link>

            <button
              onClick={() => setQuickSearchOpen(true)}
              className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 transition-all"
              aria-label="Hızlı Arama"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Hızlı Arama...</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 text-[10px] font-semibold text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5">
                ⌘K
              </kbd>
            </button>
          </nav>

          {/* Mobile Search & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setQuickSearchOpen(true)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Arama Yap"
            >
              <Search className="w-5 h-5 text-emerald-600" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => { setMobileMenuOpen(false); setQuickSearchOpen(true); }}
            className="w-full flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-800 dark:text-slate-200 font-medium"
          >
            <Search className="w-5 h-5 text-emerald-600" />
            <span>Neye dikkat etmelisin? Arama Yap</span>
          </button>

          <Link
            href="/yolculuklar"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 p-3 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium"
          >
            <Compass className="w-5 h-5 text-amber-500" />
            <span>Karar Yolculukları</span>
          </Link>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 px-3">
              Kategoriler
            </span>
            <div className="grid grid-cols-2 gap-1">
              {CATEGORIES.map(cat => (
                <Link
                  key={cat.id}
                  href={`/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hızlı Arama Overlay */}
      <QuickSearchOverlay open={quickSearchOpen} onClose={() => setQuickSearchOpen(false)} />
    </header>
  );
}
