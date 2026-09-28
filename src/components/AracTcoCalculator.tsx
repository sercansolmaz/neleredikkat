'use client';

import React, { useMemo, useState } from 'react';
import { Calculator, RotateCcw, AlertTriangle, Info, Car, Fuel, Wrench, ShieldCheck } from 'lucide-react';

/**
 * Araç sahip olma maliyeti hesaplama — TCO (toplam sahip olma maliyeti).
 * Satın alma fiyatının ötesindeki düzenli giderleri aylıklaştırır.
 * MTV/ÖTV-yoğun vergi yapısı, yakıt, sigorta/bakım ve amortisman bileşenleri ayrıştırılır.
 * Hesaplama yöntemi sadeleştirilmiştir; bireysel durum değişebilir.
 */

interface State {
  price: number;
  fuelType: 'benzin' | 'dizel' | 'lpg' | 'elektrik' | 'hibrit';
  consumption: number; // L/100km veya kWh/100km
  annualKm: number;
  fuelPrice: number;   // TL/L veya TL/kWh
  insurance: number;   // yıllık TL (kasko)
  age: 'new' | 'young' | 'old'; // bakım bandı
  city: 'buyuk' | 'kucuk'; // MTV bandı
  engineBand: 'low' | 'mid' | 'high'; // MTV motor hacmi
}

const DEFAULTS: State = {
  price: 900000,
  fuelType: 'benzin',
  consumption: 7,
  annualKm: 15000,
  fuelPrice: 52,
  insurance: 25000,
  age: 'young',
  city: 'buyuk',
  engineBand: 'mid'
};

const tl = (n: number) => `${Math.round(n).toLocaleString('tr-TR')} ₺`;

// MTV 2026 civarı ortalama bantlar (taşıt bağıplığı —yıllarca yenilenir; kullanıcı değiştirebilir kabul edilir)
function mtvEstimate(city: State['city'], band: State['engineBand'], age: State['age']): { value: number; label: string } {
  const base = city === 'buyuk'
    ? (band === 'low' ? 1900 : band === 'mid' ? 3600 : 9000)
    : (band === 'low' ? 750 : band === 'mid' ? 1300 : 4500);
  const ageFactor = age === 'new' ? 1 : age === 'young' ? 0.75 : 0.55;
  return { value: Math.round(base * ageFactor / 50) * 50, label: 'tahmini' };
}

// Bakım bandı — yaşı ve km'ye göre kaba aylıklaştırma
function maintenanceEstimate(price: number, age: State['age']): number {
  const perYear = age === 'new' ? price * 0.010 : age === 'young' ? price * 0.018 : price * 0.030;
  return perYear / 12;
}

// Amortisman — araçlar değer kaybeder; yıllık ~%12-15 bandı sadeleştirme
function depreciationMonthly(price: number, age: State['age']): number {
  const rate = age === 'new' ? 0.15 : age === 'young' ? 0.11 : 0.07;
  return (price * rate) / 12;
}

const FUEL_NOTES: Record<State['fuelType'], string> = {
  benzin: 'Benzin: şehir içi düşük verim, geniş servis ağı.',
  dizel: 'Dizel: uzun yol avantajı; şehir içi kısa mesafede DPF sorunu riski.',
  lpg: 'LPG: km başına en ucuz yakıt; tank ve dönüşüm maliyeti başta ödenir.',
  elektrik: 'Elektrik: enerji maliyeti düşük; şarj altyapısı ve evde şarj koşulu belirleyici.',
  hibrit: 'Hibrit: şehir içi verimli; uzun yolda benzin gibi tüketir.'
};

export default function AracTcoCalculator() {
  const [s, setS] = useState<State>(DEFAULTS);

  const r = useMemo(() => {
    const fuelMonthly = (s.consumption / 100) * s.annualKm * s.fuelPrice / 12;
    const mtv = mtvEstimate(s.city, s.engineBand, s.age);
    const mtvMonthly = mtv.value / 12;
    const insMonthly = s.insurance / 12;
    const maintMonthly = maintenanceEstimate(s.price, s.age);
    const depMonthly = depreciationMonthly(s.price, s.age);
    const cashMonthly = fuelMonthly + mtvMonthly + insMonthly + maintMonthly;
    const totalMonthly = cashMonthly + depMonthly;
    const yearly = totalMonthly * 12;
    return { fuelMonthly, mtv, mtvMonthly, insMonthly, maintMonthly, depMonthly, cashMonthly, totalMonthly, yearly };
  }, [s]);

  const rows = [
    { icon: <Fuel className="w-4 h-4" />, label: 'Yakıt / enerji', val: r.fuelMonthly, note: `${s.consumption} birim/100km × ${s.annualKm.toLocaleString('tr-TR')} km/yıl` },
    { icon: <ShieldCheck className="w-4 h-4" />, label: 'MTV (motorlu taşıtlar vergisi)', val: r.mtvMonthly, note: `${r.mtv.value.toLocaleString('tr-TR')} ₺/yıl (${r.mtv.label})` },
    { icon: <ShieldCheck className="w-4 h-4" />, label: 'Kasko / sigorta', val: r.insMonthly, note: `${s.insurance.toLocaleString('tr-TR')} ₺/yıl` },
    { icon: <Wrench className="w-4 h-4" />, label: 'Bakım-lastik-parça', val: r.maintMonthly, note: s.age === 'new' ? 'aracın %1\'i/yıl' : s.age === 'young' ? 'aracın %1,8\'i/yıl' : 'aracın %3\'ü/yıl' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 space-y-7 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-600" />
            Aracın Gerçek Aylık Maliyeti
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Fiyat etiketi kararın yarısıdır: yakıt, vergi, sigorta, bakım ve değer kaybını birlikte görün.
          </p>
        </div>
        <button onClick={() => setS(DEFAULTS)}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors flex-shrink-0"
          title="Sıfırla">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Fiyat */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Araç fiyatı</span>
          <span className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400 tabular-nums">{tl(s.price)}</span>
        </div>
        <input type="range" min={150000} max={4000000} step={50000} value={s.price}
          onChange={e => setS({ ...s, price: Number(e.target.value) })} className="w-full accent-emerald-600" aria-label="Araç fiyatı" />
      </div>

      {/* Yakıt tipi */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Yakıt türü</span>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(FUEL_NOTES) as State['fuelType'][]).map(f => (
            <button key={f} type="button" onClick={() => {
              const defaults: Partial<State> = { benzin: { consumption: 7, fuelPrice: 52 }, dizel: { consumption: 5.5, fuelPrice: 49 }, lpg: { consumption: 9, fuelPrice: 26 }, elektrik: { consumption: 17, fuelPrice: 2.6 }, hibrit: { consumption: 4.5, fuelPrice: 52 } }[f];
              setS({ ...s, fuelType: f, ...defaults });
            }}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors capitalize ${
                s.fuelType === f
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
              }`}>
              {f === 'elektrik' ? 'Elektrik' : f === 'hibrit' ? 'Hibrit' : f === 'benzin' ? 'Benzin' : f === 'dizel' ? 'Dizel' : 'LPG'}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-slate-500">{FUEL_NOTES[s.fuelType]}</p>
      </div>

      {/* Sayısal girdiler */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label className="space-y-1.5 block">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tüketim ({s.fuelType === 'elektrik' ? 'kWh' : 'L'}/100km)</span>
          <input type="number" min={1} max={40} step={0.5} value={s.consumption}
            onChange={e => setS({ ...s, consumption: Number(e.target.value) || 0 })}
            className="w-full text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 tabular-nums" />
        </label>
        <label className="space-y-1.5 block">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Yıllık km</span>
          <input type="number" min={1000} max={80000} step={1000} value={s.annualKm}
            onChange={e => setS({ ...s, annualKm: Number(e.target.value) || 0 })}
            className="w-full text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 tabular-nums" />
        </label>
        <label className="space-y-1.5 block">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Yakıt fiyatı (₺/{s.fuelType === 'elektrik' ? 'kWh' : 'L'})</span>
          <input type="number" min={0.5} max={200} step={0.5} value={s.fuelPrice}
            onChange={e => setS({ ...s, fuelPrice: Number(e.target.value) || 0 })}
            className="w-full text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 tabular-nums" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-1.5 block">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Yıllık kasko (₺)</span>
          <input type="number" min={0} max={300000} step={1000} value={s.insurance}
            onChange={e => setS({ ...s, insurance: Number(e.target.value) || 0 })}
            className="w-full text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 tabular-nums" />
        </label>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Araç yaşı bandı</span>
          <div className="flex flex-wrap gap-2">
            {[{ v: 'new', l: '0-2 yıl' }, { v: 'young', l: '3-7 yıl' }, { v: 'old', l: '8+ yıl' }].map(o => (
              <button key={o.v} type="button" onClick={() => setS({ ...s, age: o.v as State['age'] })}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                  s.age === o.v ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                }`}>{o.l}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">MTV: belediye sınırı</span>
          <div className="flex gap-2">
            {[{ v: 'buyuk', l: 'Büyükşehir' }, { v: 'kucuk', l: 'Diğer' }].map(o => (
              <button key={o.v} type="button" onClick={() => setS({ ...s, city: o.v as State['city'] })}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                  s.city === o.v ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                }`}>{o.l}</button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Motor hacmi bandı</span>
          <div className="flex gap-2">
            {[{ v: 'low', l: '<1.6' }, { v: 'mid', l: '1.6-2.0' }, { v: 'high', l: '>2.0' }].map(o => (
              <button key={o.v} type="button" onClick={() => setS({ ...s, engineBand: o.v as State['engineBand'] })}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                  s.engineBand === o.v ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                }`}>{o.l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Sonuç */}
      <div className="rounded-2xl border-2 border-emerald-500/60 bg-emerald-50/70 dark:bg-emerald-950/30 p-5 sm:p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Nakit çıkış (aylık)</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums mt-1">{tl(r.cashMonthly)}</div>
            <div className="text-[11px] text-slate-500">yakıt + vergi + sigorta + bakım</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Değer kaybı dahil</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums mt-1">{tl(r.totalMonthly)}</div>
            <div className="text-[11px] text-slate-500">gerçek sahip olma maliyeti</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Yıllık toplam</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums mt-1">{tl(r.yearly)}</div>
            <div className="text-[11px] text-slate-500">değer kaybı dahil</div>
          </div>
        </div>

        <div className="text-xs text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 space-y-2">
          <div className="font-bold">Aylık döküm:</div>
          {rows.map(row => (
            <div key={row.label} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <span className="text-emerald-600">{row.icon}</span>{row.label}
                <span className="text-[10px] text-slate-400 hidden sm:inline">({row.note})</span>
              </span>
              <span className="font-bold tabular-nums">{tl(row.val)}</span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-700 pt-2">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Car className="w-4 h-4 text-slate-400" />Değer kaybı (amortisman)
            </span>
            <span className="font-bold tabular-nums text-slate-500">{tl(r.depMonthly)}</span>
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>MTV ve bakım değerleri <strong>tahmini ortalamalardır</strong>; araç modeline, şehre ve güncel tarifelere göre değişir. Karar verirken ilanın yanına bu aylık maliyeti yaz — "alıp alamam" sorusunun cevabı buradan çıkar.</span>
        </div>

        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          Değer kaybı: 0-2 yaş %15/yıl, 3-7 yaş %11/yıl, 8+ yaş %7/yıl sadeleştirmesi. Muayene, otopark, lastik değişimi beklenmedik onarımlar ayrıca eklenebilir.
        </div>
      </div>
    </div>
  );
}
