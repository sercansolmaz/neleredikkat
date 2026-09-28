'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ChecklistItem } from '@/types/guide';
import {
  CheckCircle2,
  Circle,
  RotateCcw,
  Sparkles,
  Share2,
  Printer,
  AlertTriangle,
  ShieldCheck,
  ShieldAlert,
  Calendar
} from 'lucide-react';

interface InteractiveChecklistProps {
  guideSlug: string;
  guideTitle: string;
  categorySlug: string;
  items: ChecklistItem[];
}

/**
 * Karar skoru ağırlıkları: kritik maddeler eksikse skor tek başına yanıltıcı olur.
 * Bu yüzden bant mantığı skora + kritik eksik sayısına birlikte bakar.
 */
const WEIGHT: Record<ChecklistItem['importance'], number> = {
  critical: 3,
  important: 2,
  useful: 1
};

interface ReadinessBand {
  label: string;
  message: string;
  tone: 'good' | 'warn' | 'bad';
}

function readinessBand(score: number, criticalMissing: number, uncheckedCriticalTitles: string[]): ReadinessBand {
  if (criticalMissing > 0) {
    return {
      label: 'Kritik Eksikler Var',
      message: `Devam etmeden önce şu ${criticalMissing} kritik kontrolü tamamla: ${uncheckedCriticalTitles.slice(0, 3).join(' · ')}${criticalMissing > 3 ? ' …' : ''}`,
      tone: 'bad'
    };
  }
  if (score === 100) {
    return {
      label: 'Karar Vermeye Hazırsın',
      message: 'Tüm kontroller tamam. Kırmızı bayrakları ve satıcıya sorulacak soruları bir kez daha gözden geçirip kararını verebilirsin.',
      tone: 'good'
    };
  }
  if (score >= 85) {
    return {
      label: 'Güvenle İlerleyebilirsin',
      message: 'Kritik kontrollerin tamamı bitmiş. Kalan maddeler konfor artışı sağlar; kararı engellemez.',
      tone: 'good'
    };
  }
  if (score >= 50) {
    return {
      label: 'Eksikler Var — Tamamla',
      message: 'Kritik dışı maddelerin bir kısmı eksik. Fırsat kaçmıyorsa listeyi bitirerek gel.',
      tone: 'warn'
    };
  }
  return {
    label: 'Henüz Erken',
    message: 'Kontrollerin büyük kısmı eksik. Karar vermeden önce listeyi çalış.',
    tone: 'warn'
  };
}

/** Skor halkası (SVG) — stroke-dasharray ile doluluk. */
function ScoreRing({ score, tone }: { score: number; tone: 'good' | 'warn' | 'bad' }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const filled = (score / 100) * c;
  const color = tone === 'good' ? '#059669' : tone === 'warn' ? '#d97706' : '#e11d48';
  return (
    <svg viewBox="0 0 128 128" className="w-32 h-32 flex-shrink-0 print:w-24 print:h-24" role="img" aria-label={`Karar skoru ${score} üzerinden 100`}>
      <circle cx="64" cy="64" r={r} fill="none" stroke="currentColor" className="text-slate-100 dark:text-slate-700" strokeWidth="10" />
      <circle
        cx="64" cy="64" r={r} fill="none"
        stroke={color} strokeWidth="10" strokeLinecap="round"
        strokeDasharray={`${filled} ${c - filled}`}
        transform="rotate(-90 64 64)"
      />
      <text x="64" y="58" textAnchor="middle" className="fill-slate-900 dark:fill-white" style={{ fontSize: '30px', fontWeight: 800 }}>
        {score}
      </text>
      <text x="64" y="80" textAnchor="middle" className="fill-slate-400" style={{ fontSize: '13px', fontWeight: 600 }}>
        / 100
      </text>
    </svg>
  );
}

export default function InteractiveChecklist({ guideSlug, guideTitle, categorySlug, items }: InteractiveChecklistProps) {
  const storageKey = `neleredikkat_checklist_${guideSlug}`;
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [shareLabel, setShareLabel] = useState<string | null>(null);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        // Client-only persistence is intentionally hydrated after mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCheckedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    setIsLoaded(true);
  }, [storageKey]);

  // Toggle item
  const toggleItem = (id: string) => {
    const updated = { ...checkedIds, [id]: !checkedIds[id] };
    setCheckedIds(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage write error:', e);
    }
  };

  // Reset checklist
  const resetChecklist = () => {
    setCheckedIds({});
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {
      console.warn('localStorage clear error:', e);
    }
  };

  const completedCount = items.filter(item => checkedIds[item.id]).length;
  const totalCount = items.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isAllCompleted = totalCount > 0 && completedCount === totalCount;

  // --- Karar skoru: ağırlıklı doluluk + kritik eksik analizi ---
  const { score, criticalTotal, criticalMissing, criticalMissingTitles } = useMemo<{
    score: number;
    criticalTotal: number;
    criticalMissing: number;
    criticalMissingTitles: string[];
  }>(() => {
    let totalWeight = 0;
    let doneWeight = 0;
    let cTotal = 0;
    let cMissing = 0;
    const cMissingTitles: string[] = [];
    for (const item of items) {
      const w = WEIGHT[item.importance] ?? 1;
      totalWeight += w;
      const done = Boolean(checkedIds[item.id]);
      if (done) doneWeight += w;
      if (item.importance === 'critical') {
        cTotal++;
        if (!done) {
          cMissing++;
          cMissingTitles.push(item.text);
        }
      }
    }
    return {
      score: totalWeight > 0 ? Math.round((doneWeight / totalWeight) * 100) : 0,
      criticalTotal: cTotal,
      criticalMissing: cMissing,
      criticalMissingTitles: cMissingTitles
    };
  }, [items, checkedIds]);

  const band = readinessBand(score, criticalMissing, criticalMissingTitles);
  const hasAnyProgress = completedCount > 0;

  // --- Sonucu paylaş (Web Share API → clipboard fallback) ---
  const shareResult = async () => {
    const url = `https://neleredikkat.com/${categorySlug}/${guideSlug}/`;
    const text =
      `${guideTitle}\n` +
      `Karar hazırlık seviyem: ${score}/100 (${band.label})\n` +
      (criticalMissing > 0 ? `⚠️ ${criticalMissing} kritik kontrol kaldı\n` : `✅ Kritik kontroller tamam\n`) +
      `${completedCount}/${totalCount} kontrol yapıldı — kendi kontrolünü yap: ${url}`;
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title: guideTitle, text, url });
        setShareLabel('Paylaşıldı');
      } else {
        await navigator.clipboard.writeText(text);
        setShareLabel('Kopyalandı — yapıştırıp paylaş');
      }
    } catch {
      setShareLabel('Paylaşım iptal edildi');
    }
    setTimeout(() => setShareLabel(null), 2500);
  };

  // --- PDF: tarayıcı yazdırması ile karar dosyası ---
  const printDecisionFile = () => {
    const d = new Date();
    const el = document.getElementById('nd-print-date');
    if (el) el.textContent = d.toLocaleDateString('tr-TR');
    window.print();
  };

  const today = typeof document === 'undefined' ? '' : new Date().toLocaleDateString('tr-TR');

  return (
    <div id="checklist" className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 shadow-sm">

      {/* Header & Progress Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100 dark:border-slate-700">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Uygulanabilir Kontrol Listesi</span>
            {isAllCompleted && (
              <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 animate-bounce print:hidden">
                <Sparkles className="w-3.5 h-3.5" />
                Tamamlandı!
              </span>
            )}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Maddeleri kontrol ettikçe işaretleyin. Durumunuz cihazınızda saklanır.
          </p>
        </div>

        {/* Counter Badge & Reset Button */}
        <div className="flex items-center gap-3 print:hidden">
          <div className="bg-slate-100 dark:bg-slate-700/80 px-4 py-2 rounded-xl text-center">
            <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
              {completedCount}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {' '}/ {totalCount} tamamlandı
            </span>
          </div>

          {completedCount > 0 && (
            <button
              onClick={resetChecklist}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
              title="Listeyi Sıfırla"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="mb-6 print:hidden">
        <div className="w-full bg-slate-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-300 ease-out ${
              isAllCompleted
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                : 'bg-emerald-600'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items list */}
      <div className="space-y-2.5 print:hidden">
        {items.map((item, index) => {
          const isChecked = Boolean(checkedIds[item.id]);

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all border ${
                isChecked
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/50'
                  : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                )}
              </div>

              <div className="flex-1 space-y-1">
                <span
                  className={`text-sm font-medium transition-colors ${
                    isChecked
                      ? 'line-through text-slate-400 dark:text-slate-500'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {item.text}
                </span>

                {item.importance === 'critical' && (
                  <span className="inline-block text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded ml-2">
                    Kritik
                  </span>
                )}
              </div>

              <span className="text-xs font-semibold text-slate-300 dark:text-slate-600">
                #{index + 1}
              </span>
            </div>
          );
        })}
      </div>

      {/* ============ KARAR SONUCU ============ */}
      {isLoaded && hasAnyProgress && (
        <section
          aria-labelledby="karar-sonucu-baslik"
          className="mt-8 pt-7 border-t-2 border-dashed border-slate-200 dark:border-slate-700 space-y-5"
        >
          <h3 id="karar-sonucu-baslik" className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Karar Sonucu
          </h3>

          <div
            className={`rounded-2xl border p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6 ${
              band.tone === 'good'
                ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
                : band.tone === 'warn'
                  ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800'
                  : 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'
            }`}
          >
            <ScoreRing score={score} tone={band.tone} />

            <div className="flex-1 space-y-3 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                {band.tone === 'bad' ? (
                  <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                )}
                <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {band.label}
                </span>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {band.message}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-semibold">
                <span className="bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300">
                  {completedCount}/{totalCount} kontrol tamam
                </span>
                <span
                  className={`px-3 py-1.5 rounded-lg border ${
                    criticalMissing === 0
                      ? 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-300'
                      : 'bg-rose-100/80 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  {criticalTotal > 0 ? `${criticalMissing}/${criticalTotal} kritik kontrol eksik` : 'Kritik maddesi yok'}
                </span>
              </div>
            </div>
          </div>

          {/* Kritik eksik listesi */}
          {criticalMissing > 0 && (
            <div className="rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-white dark:bg-slate-800 p-5 space-y-2.5 print:hidden">
              <div className="flex items-center gap-2 text-sm font-bold text-rose-700 dark:text-rose-300">
                <AlertTriangle className="w-4 h-4" />
                Tamamlanması Gereken Kritik Kontroller
              </div>
              <ul className="space-y-1.5">
                {criticalMissingTitles.map((t: string) => (
                  <li key={t} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5 flex-shrink-0">●</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Aksiyon butonları */}
          <div className="flex flex-wrap items-center gap-3 print:hidden">
            <button
              onClick={shareResult}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Sonucu Paylaş
            </button>
            <button
              onClick={printDecisionFile}
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:border-emerald-500 text-slate-700 dark:text-slate-200 text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
            >
              <Printer className="w-4 h-4" />
              Karar Dosyasını PDF Yap
            </button>
            {shareLabel && (
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">{shareLabel}</span>
            )}
          </div>
        </section>
      )}

      {/* ============ Yazdırma / PDF görünümü: sadece print'te görünür ============ */}
      <div className="hidden print:block print:motion-safe:block" style={{ display: 'none' }}>
        {/* Bu blok window.print() ile PDF'e gider — normal görünümde gizli. */}
      </div>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #checklist, #checklist * { visibility: visible; }
          #checklist { position: absolute; left: 0; top: 0; width: 100%; }
          #nd-print-only { display: block !important; }
        }
        #nd-print-only { display: none; }
      `}</style>
      <div id="nd-print-only" className="space-y-4">
        <div className="border-b-2 border-slate-900 pb-3">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">NelerDikkat.com — Karar Dosyası</div>
          <div className="text-xl font-black text-slate-900 mt-1">{guideTitle}</div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
            <Calendar className="w-3.5 h-3.5" />
            Tarih: <span id="nd-print-date">{today}</span> · Karar skoru: <strong>{score}/100</strong> ({band.label})
          </div>
        </div>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="text-left py-1.5 w-8">✓</th>
              <th className="text-left py-1.5">Kontrol maddesi</th>
              <th className="text-left py-1.5 w-20">Önem</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} className="border-b border-slate-200">
                <td className="py-1.5">{checkedIds[item.id] ? '☑' : '☐'}</td>
                <td className="py-1.5">{item.text}</td>
                <td className="py-1.5 text-xs text-slate-600">
                  {item.importance === 'critical' ? 'Kritik' : item.importance === 'important' ? 'Önemli' : 'Faydalı'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 leading-relaxed">
          Bu karar dosyası neleredikkat.com kontrol listesinden oluşturulmuştur; satın alma danışmanlığı değildir.
          Kırmızı bayrakları ve satıcıya sorulacak soruları rehber sayfasından kontrol edin.
        </p>
      </div>
    </div>
  );
}
