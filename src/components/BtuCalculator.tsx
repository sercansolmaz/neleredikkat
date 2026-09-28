'use client';

import React, { useMemo, useState } from 'react';
import { Calculator, RotateCcw, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

/**
 * Klima BTU hesaplama — sektöre yaygın kabul görmüş yaklaşım:
 * taban = alan(m²) × 600 BTU/saat, sonra düzeltme çarpanları.
 * Bu araç TAVSİYE üretir; kesin kapasite için yetkili keşif şarttır.
 */

interface Params {
  area: number;
  ceiling: 'normal' | 'high';
  sun: 'shaded' | 'normal' | 'sunny';
  insulation: 'good' | 'normal' | 'poor';
  floor: 'middle' | 'top' | 'ground';
  occupants: number;
  isKitchen: boolean;
}

const DEFAULTS: Params = {
  area: 20,
  ceiling: 'normal',
  sun: 'normal',
  insulation: 'normal',
  floor: 'middle',
  occupants: 2,
  isKitchen: false
};

const STANDARD_CAPACITIES = [9000, 12000, 18000, 24000];

function calcBtu(p: Params): { base: number; adjusted: number; recommended: number; factors: string[] } {
  const factors: string[] = [];
  let btu = p.area * 600;

  if (p.ceiling === 'high') { btu *= 1.1; factors.push('Yüksek tavan +%10'); }
  if (p.sun === 'sunny') { btu *= 1.1; factors.push('Güneş alan cephe +%10'); }
  if (p.sun === 'shaded') { btu *= 0.9; factors.push('Gölgeli konum −%10'); }
  if (p.insulation === 'poor') { btu *= 1.15; factors.push('Zayıf izolasyon +%15'); }
  if (p.insulation === 'good') { btu *= 0.95; factors.push('İyi izolasyon −%5'); }
  if (p.floor === 'top') { btu *= 1.1; factors.push('En üst kat / çatı etkisi +%10'); }
  if (p.occupants > 2) {
    const extra = (p.occupants - 2) * 600;
    btu += extra;
    factors.push(`${p.occupants} kişi (+${extra.toLocaleString('tr-TR')} BTU)`);
  }
  if (p.isKitchen) { btu += 4000; factors.push('Mutfak +4.000 BTU'); }

  const adjusted = Math.round(btu / 500) * 500;
  // Bir üst standart kapasiteye yuvarla — düşük kapasite verimsiz çalıştırır.
  const recommended = STANDARD_CAPACITIES.find(c => c >= adjusted) ?? 24000;
  return { base: p.area * 600, adjusted, recommended, factors };
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{children}</span>;
}

function Choice<T extends string>({ value, onChange, options }: { value: T; onChange: (v: T) => void; options: { v: T; l: string }[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button
          key={o.v}
          type="button"
          onClick={() => onChange(o.v)}
          className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
            value === o.v
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
          }`}
        >
          {o.l}
        </button>
      ))}
    </div>
  );
}

export default function BtuCalculator() {
  const [p, setP] = useState<Params>(DEFAULTS);
  const r = useMemo(() => calcBtu(p), [p]);
  const undersized = r.recommended < r.adjusted;

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 space-y-7 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-600" />
            Odana Göre BTU Hesapla
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Alanı gir, oda koşullarını seç — sistem sana uygun standart kapasiteyi önersin.
          </p>
        </div>
        <button
          onClick={() => setP(DEFAULTS)}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors flex-shrink-0"
          title="Sıfırla"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Alan */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Oda alanı</Label>
          <span className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">{p.area} m²</span>
        </div>
        <input
          type="range" min={8} max={60} step={1} value={p.area}
          onChange={e => setP({ ...p, area: Number(e.target.value) })}
          className="w-full accent-emerald-600"
          aria-label="Oda alanı (metrekare)"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-medium">
          <span>8 m²</span><span>60 m²</span>
        </div>
      </div>

      {/* Tavan */}
      <div className="space-y-2">
        <Label>Tavan yüksekliği</Label>
        <Choice
          value={p.ceiling}
          onChange={ceiling => setP({ ...p, ceiling })}
          options={[{ v: 'normal', l: 'Standart (~2,6 m)' }, { v: 'high', l: 'Yüksek (3 m+)' }]}
        />
      </div>

      {/* Güneş */}
      <div className="space-y-2">
        <Label>Güneş durumu</Label>
        <Choice
          value={p.sun}
          onChange={sun => setP({ ...p, sun })}
          options={[{ v: 'shaded', l: 'Gölgeli / kuzey' }, { v: 'normal', l: 'Normal' }, { v: 'sunny', l: 'Güneş alan / geniş cam' }]}
        />
      </div>

      {/* İzolasyon */}
      <div className="space-y-2">
        <Label>İzolasyon</Label>
        <Choice
          value={p.insulation}
          onChange={insulation => setP({ ...p, insulation })}
          options={[{ v: 'good', l: 'İyi (yeni bina)' }, { v: 'normal', l: 'Normal' }, { v: 'poor', l: 'Zayıf (eski bina)' }]}
        />
      </div>

      {/* Kat */}
      <div className="space-y-2">
        <Label>Bulunduğun kat</Label>
        <Choice
          value={p.floor}
          onChange={floor => setP({ ...p, floor })}
          options={[{ v: 'ground', l: 'Zemin / bodrum üstü' }, { v: 'middle', l: 'Ara kat' }, { v: 'top', l: 'En üst kat (çatı üstü)' }]}
        />
      </div>

      {/* Kişi + mutfak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label>Uzun süre bulunan kişi sayısı</Label>
          <Choice
            value={String(p.occupants) as '1' | '2' | '3' | '4'}
            onChange={v => setP({ ...p, occupants: Number(v) })}
            options={[{ v: '1', l: '1' }, { v: '2', l: '2' }, { v: '3', l: '3' }, { v: '4', l: '4+' }]}
          />
        </div>
        <div className="space-y-2">
          <Label>Oda türü</Label>
          <Choice
            value={p.isKitchen ? 'kitchen' : 'room'}
            onChange={v => setP({ ...p, isKitchen: v === 'kitchen' })}
            options={[{ v: 'room', l: 'Oturma / yatak odası' }, { v: 'kitchen', l: 'Mutfak' }]}
          />
        </div>
      </div>

      {/* Sonuç */}
      <div className="rounded-2xl border-2 border-emerald-500/60 bg-emerald-50/70 dark:bg-emerald-950/30 p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Hesaplanan ihtiyaç</div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tabular-nums">
              {r.adjusted.toLocaleString('tr-TR')} <span className="text-base font-bold text-slate-500">BTU/h</span>
            </div>
          </div>
          <div className="sm:border-l-2 sm:border-emerald-200 dark:sm:border-emerald-800 sm:pl-8">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Önerilen standart kapasite</div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">
              {(r.recommended / 1000).toLocaleString('tr-TR')} <span className="text-base font-bold text-slate-500">k BTU</span>
            </div>
          </div>
        </div>

        {undersized ? (
          <div className="flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>Hesap {r.adjusted.toLocaleString('tr-TR')} BTU çıktı ve en yakın büyük standart kapasite 24.000 BTU. Çok geniş alanlarda tek cihaz yerine iki cihaz (ör. 2× 12.000) daha dengeli soğutur; keşif yaptırın.</span>
          </div>
        ) : (
          <div className="flex items-start gap-2 text-xs text-emerald-800 dark:text-emerald-300 bg-white/70 dark:bg-slate-800/70 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>Bu kapasite bandında inverter models tercih etmek enerji tüketimini belirgin düşürür. Kesin karar öncesi ücretsiz keşif ile doğrulatın.</span>
          </div>
        )}

        {r.factors.length > 0 && (
          <div className="text-xs text-slate-600 dark:text-slate-300">
            <span className="font-bold">Uygulanan düzeltmeler: </span>
            {r.factors.join(' · ')}
          </div>
        )}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          Taban formül: {p.area} m² × 600 BTU = {r.base.toLocaleString('tr-TR')} BTU. Bu hesaplama tavsiye niteliğindedir; cihaz seçimi ve montaj için yetkili servis keşfi esas alınmalıdır.
        </div>
      </div>
    </div>
  );
}
