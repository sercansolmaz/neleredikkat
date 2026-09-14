'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MissingSearchSummary } from '@/lib/logs';
import { ShieldAlert, RefreshCw, Layers, TrendingUp, Search, Clock } from 'lucide-react';

export default function AdminMissingSearchesPage() {
  const [summaries, setSummaries] = useState<MissingSearchSummary[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSummaries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/log-search');
      if (res.ok) {
        const data = await res.json();
        setSummaries(data.summaries || []);
      }
    } catch (err) {
      console.error('Fetch summaries error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummaries();
  }, []);

  const totalMissingVolume = summaries.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Admin Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>İçerik Talepleri Paneli</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              En Çok Aranıp Bulunamayan Rehberler
            </h1>
            <p className="text-xs text-slate-400">
              Kullanıcıların site üzerinde aratıp 0 sonuç aldığı anonim sorgular. Yeni içerik önceliklendirmesi için kullanılır.
            </p>
          </div>

          <button
            onClick={fetchSummaries}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors self-start sm:self-auto"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Yenile</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <span className="text-xs text-slate-400 font-medium block">Farklı Sorgu Sayısı</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">
              {summaries.length}
            </span>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <span className="text-xs text-slate-400 font-medium block">Toplam Aranma Hacmi</span>
            <span className="text-2xl font-black text-amber-400 mt-1 block">
              {totalMissingVolume}
            </span>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 col-span-2 sm:col-span-1">
            <span className="text-xs text-slate-400 font-medium block">Sıfır AI Maliyeti</span>
            <span className="text-2xl font-black text-white mt-1 block">
              0 TL
            </span>
          </div>
        </div>
      </div>

      {/* Table & List */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            Talebe Göre Sıralı Liste
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            Son Güncelleme: Anlık
          </span>
        </div>

        {loading ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            Veriler yükleniyor...
          </div>
        ) : summaries.length > 0 ? (
          <div className="divide-y divide-slate-100 dark:divide-slate-700">
            {summaries.map((item, idx) => (
              <div
                key={item.query}
                className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                    #{idx + 1}
                  </span>

                  <div>
                    <span className="text-base font-extrabold text-slate-900 dark:text-white capitalize block">
                      {item.query}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      Son arama: {new Date(item.lastSearched).toLocaleString('tr-TR')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-black px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800 text-sm">
                    {item.count} arama
                  </div>

                  <Link
                    href={`/arama?q=${encodeURIComponent(item.query)}`}
                    className="p-2 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors"
                    title="Aramayı Test Et"
                  >
                    <Search className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center text-slate-400 text-sm">
            Henüz aranıp bulunamayan sorgu kaydı yok.
          </div>
        )}
      </div>

    </div>
  );
}
