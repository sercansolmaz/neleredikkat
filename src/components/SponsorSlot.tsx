import React from 'react';
import { Megaphone, Mail } from 'lucide-react';

interface SponsorSlotProps {
  categorySlug: string;
  categoryName: string;
}

/**
 * Kategori sponsorluk/reklam alanı.
 * Her kategori sayfasının başında, "Reklam Alanı" etiketiyle
 * sponsor olasılığı taşır; iletişim: info@neleredikkat.com
 */
export default function SponsorSlot({ categorySlug, categoryName }: SponsorSlotProps) {
  return (
    <aside
      data-sponsor-slot={categorySlug}
      aria-label={`${categoryName} kategorisi sponsorluk alanı`}
      className="relative overflow-hidden rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 bg-gradient-to-br from-slate-50 via-white to-emerald-50/50 dark:from-slate-800/60 dark:via-slate-800 dark:to-emerald-950/20"
    >

      <div className="flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6">
        {/* İkon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
          <Megaphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>

        {/* Metin */}
        <div className="flex-1 text-center sm:text-left space-y-1 min-w-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-900/50 px-2 py-0.5 rounded-md">
              Reklam Alanı
            </span>
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
              {categoryName} sponsorları için
            </span>
          </div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-snug">
            Markanız bu bölümde öne çıkabilir — {categoryName.toLowerCase()} karar anındaki
            okuyuculara doğrudan ulaşın.
          </p>
        </div>

        {/* İletişim */}
        <div className="flex-shrink-0">
          <a
            href="mailto:info@neleredikkat.com?subject=Sponsorluk%20Talebi%20-%20NelerDikkat"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@neleredikkat.com</span>
            <span className="sm:hidden">İletişim</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
