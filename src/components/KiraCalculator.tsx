'use client';

import React, { useState } from 'react';
import { Calculator, RotateCcw, AlertTriangle, CheckCircle2, Info, Wallet, Receipt } from 'lucide-react';

/**
 * Ev kira maliyeti hesaplama — kira + aidat + depozito + komisyon bileşimi.
 * "Aylık kira" ile "gerçek aylık maliyet" arasındaki farkı görünür kılar.
 * %30 oranı genel bir bütçe kuralıdır; kişiye göre değişebilir.
 */

interface State {
  rent: number;
  aidat: number;
  depositMonths: number;
  hasCommission: boolean;
  hasIncome: boolean;
  income: number;
}

const DEFAULTS: State = {
  rent: 15000,
  aidat: 1000,
  depositMonths: 1,
  hasCommission: true,
  hasIncome: false,
  income: 45000
};

const tl = (n: number) => `${Math.round(n).toLocaleString('tr-TR')} ₺`;

function Slider({ label, value, min, max, step, onChange, display, id }: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; display: string; id: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</label>
        <span className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400 tabular-nums">{display}</span>
      </div>
      <input
        id={id}
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-emerald-600"
      />
    </div>
  );
}

export default function KiraCalculator() {
  const [s, setS] = useState<State>(DEFAULTS);

  const monthly = s.rent + s.aidat;
  const deposit = s.rent * s.depositMonths;
  const commission = s.hasCommission ? s.rent : 0; // yasal üst sınır ≈ 1 aylık kira (yıllık kiranın %8'i)
  const firstMonth = monthly + deposit + commission;
  const yearly = monthly * 12;
  const ratio = s.hasIncome && s.income > 0 ? (monthly / s.income) * 100 : null;

  const band = ratio === null ? null
    : ratio <= 30 ? { tone: 'good' as const, label: 'Bütçe dostu', msg: 'Konut maliyetin gelirinin %30unun altında — genel bütçe kuralına göre sağlıklı bandasın.' }
    : ratio <= 45 ? { tone: 'warn' as const, label: 'Sınırda', msg: 'Konut maliyetin gelirinin %30–45 bandında. Beklenmedik giderlerde esnekliğin daralabilir; depozito ve taşınma rezervi ayır.' }
    : { tone: 'bad' as const, label: 'Riskli Bant', msg: 'Konut maliyetin gelirinin %45ini aşıyor. Bu bantta birikim yapmak zorlaşır; kira düşük alternatifleri veya gelir artışını değerlendirmek mantıklı olur.' };

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 space-y-7 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-600" />
            Gerçek Kira Maliyetini Hesapla
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            İlanda yazan kira, ödeyeceğin maliyetin sadece bir parçasıdır — aidat, depozito ve komisyonla birlikte görün.
          </p>
        </div>
        <button
          onClick={() => setS(DEFAULTS)}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors flex-shrink-0"
          title="Sıfırla"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <Slider id="kira" label="Aylık kira" value={s.rent} min={5000} max={80000} step={500}
        onChange={rent => setS({ ...s, rent })} display={tl(s.rent)} />

      <Slider id="aidat" label="Aidat (aylık)" value={s.aidat} min={0} max={10000} step={100}
        onChange={aidat => setS({ ...s, aidat })} display={s.aidat === 0 ? 'Aidat yok' : tl(s.aidat)} />

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Depozito</span>
        <div className="flex flex-wrap gap-2">
          {[0, 1, 2, 3].map(m => (
            <button key={m} type="button"
              onClick={() => setS({ ...s, depositMonths: m })}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                s.depositMonths === m
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              {m === 0 ? 'Yok' : `${m} aylık`}
            </button>
          ))}
        </div>
        {s.depositMonths > 0 && (
          <p className="text-[11px] text-slate-500">Depozito tutarı: <strong>{tl(deposit)}</strong> — sözleşme düzgün sonlanırsa iade edilir.</p>
        )}
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Emlakçı komisyonu</span>
        <div className="flex flex-wrap gap-2">
          {[true, false].map(v => (
            <button key={String(v)} type="button"
              onClick={() => setS({ ...s, hasCommission: v })}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                s.hasCommission === v
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              {v ? 'Var (1 aylık kira)' : 'Yok'}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-slate-500">Konut kiralamada komisyon yasal olarak yıllık kira bedelinin %8ini (≈ 1 aylık kira) geçemez; fazlası isteniyorsa itiraz edebilirsin.</p>
      </div>

      <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        <label className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          <input type="checkbox" checked={s.hasIncome} onChange={e => setS({ ...s, hasIncome: e.target.checked })} className="accent-emerald-600 w-4 h-4" />
          Gelirimi de karşılaştırmak istiyorum
        </label>
        {s.hasIncome && (
          <Slider id="gelir" label="Aylık net gelir" value={s.income} min={10000} max={400000} step={1000}
            onChange={income => setS({ ...s, income })} display={tl(s.income)} />
        )}
      </div>

      {/* Sonuç */}
      <div className="rounded-2xl border-2 border-emerald-500/60 bg-emerald-50/70 dark:bg-emerald-950/30 p-5 sm:p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><Wallet className="w-3.5 h-3.5" /> Gerçek aylık maliyet</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums mt-1">{tl(monthly)}</div>
            <div className="text-[11px] text-slate-500">kira + aidat</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><Receipt className="w-3.5 h-3.5" /> İlk ay toplam çıkış</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums mt-1">{tl(firstMonth)}</div>
            <div className="text-[11px] text-slate-500">kira + aidat + depozito + komisyon</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Yıllık toplam</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums mt-1">{tl(yearly)}</div>
            <div className="text-[11px] text-slate-500">12 ay · kira + aidat</div>
          </div>
        </div>

        {s.depositMonths > 0 || s.hasCommission ? (
          <div className="text-xs text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-3 space-y-1">
            <div className="font-bold">İlk ay ödeme dökümü:</div>
            <div className="flex justify-between"><span>İlk ay kira</span><span className="tabular-nums">{tl(s.rent)}</span></div>
            <div className="flex justify-between"><span>İlk ay aidat</span><span className="tabular-nums">{tl(s.aidat)}</span></div>
            <div className="flex justify-between"><span>Depozito ({s.depositMonths} aylık)</span><span className="tabular-nums">{tl(deposit)}</span></div>
            {s.hasCommission && <div className="flex justify-between"><span>Emlakçı komisyonu</span><span className="tabular-nums">{tl(commission)}</span></div>}
          </div>
        ) : null}

        {band && (
          <div className={`flex items-start gap-2 text-xs rounded-xl p-3 border ${
            band.tone === 'good' ? 'text-emerald-800 dark:text-emerald-300 bg-white/70 dark:bg-slate-800/70 border-emerald-200 dark:border-emerald-800'
            : band.tone === 'warn' ? 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800'
            : 'text-rose-800 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800'
          }`}>
            {band.tone === 'good' ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" /> : <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
            <span><strong>Gelirin %{Math.round(ratio!)}i konuta gidiyor — {band.label}.</strong> {band.msg}</span>
          </div>
        )}

        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          %30 oranı yaygın kullanılan bir bütçe kuralıdır, yasal bir sınır değildir. Taşınma günü ayrıca nakliye, abonelik açılışları ve DASK gibi ek maliyetler çıkabilir.
        </div>
      </div>
    </div>
  );
}
