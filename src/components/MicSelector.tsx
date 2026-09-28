'use client';

import React, { useMemo, useState } from 'react';
import { Mic, RotateCcw, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

/**
 * Mikrofon tipi seçici — oda koşulu, konuşmacı sayısı, kullanım amacı ve
 * arayüz tercihine göre USB/XLR + dinamik/kondenser yönlendirmesi.
 * Ürün önermez; "ne aramalısın" kriteri üretir. Model önerisi EkipmanTavsiyesi'nin işi.
 */

interface State {
  roomNoise: 'quiet' | 'normal' | 'noisy';
  speakers: '1' | '2' | '3+';
  purpose: 'podcast' | 'stream' | 'meeting' | 'music';
  acceptsInterface: boolean;
}

const DEFAULTS: State = {
  roomNoise: 'normal',
  speakers: '1',
  purpose: 'podcast',
  acceptsInterface: false
};

interface Recommendation {
  type: string;
  headline: string;
  reasons: string[];
  warnings: string[];
  avoid: string[];
}

function recommend(s: State): Recommendation {
  const reasons: string[] = [];
  const warnings: string[] = [];
  const avoid: string[] = [];

  // 1) Kondenser yalnızca kontrollü sessiz ortam + müzik/vokal işinde mantıklı
  const condenserOk = s.roomNoise === 'quiet' && s.purpose === 'music';
  const dynamic = !condenserOk;

  if (condenserOk) {
    reasons.push('Sessiz, kontrolsüz yankısı olmayan odada müzik/vokal kaydı — kondenserin detay toplama avantajı burada fayda sağlar.');
  } else {
    if (s.roomNoise === 'noisy') reasons.push('Gürültülü/çınlaklı oda: dinamik mikrofon odanın sesini daha az toplar, sesin ön plana çıkar.');
    if (s.roomNoise === 'normal' && s.purpose !== 'music') reasons.push('Standart ev odası + konuşma kaydı: dinamik mikrofon ev koşullarında daha öngörülebilir sonuç verir.');
    if (s.purpose !== 'music' && s.roomNoise === 'quiet') reasons.push('Konuşma odaklı kullanımda kondenserin detayı zorunlu değil; dinamik daha güvenli başlangıç.');
    if (!condenserOk && s.roomNoise === 'quiet') warnings.push('Sessiz olsan da hiç yumuşak eşya yoksa (halı, perde, kitaplık) kondenser oda yankısını yine toplar — önce akustik iyileştir, sonra tipe karar ver.');
  }

  // 2) USB / XLR
  const usb = !s.acceptsInterface;
  if (usb) {
    reasons.push('Ses kartı/alıcı eklemek istemiyorsun: USB mikrofon tek kabloyla çalışır, ilk kurulumda en düşük sürtünme.');
  } else {
    reasons.push('XLR yolunu kabul ediyorsun: mikrofon + ses kartı kombosu ileride ek mikrofon ve mikser için büyür; ses kalitesi aynı bütçeyle uzun vadede daha iyi.');
  }

  // 3) Çok konuşmacı
  const speakerCount = s.speakers === '1' ? 1 : s.speakers === '2' ? 2 : 3;
  if (speakerCount >= 2) {
    warnings.push(`${speakerCount} kişi aynı odada: tek mikrofonla masanın ortasına koymak herkesi eşit yakalamaz ve oda sesini artırır — kişi başı ayrı mikrofon planla.`);
    if (usb && speakerCount >= 3) {
      warnings.push('3+ kişi hep USB gitmek cihaz yönetimini zorlaştırır (sürücü/OS seviyesinde ses seviyesi eşitleme). Bu senaryoda XLR + çok girişli ses kartı daha temiz çözümdür.');
    }
    if (!usb) reasons.push('Çok konuşmacı + XLR: herkese kendi kanalı verilir; kayıt sonrası seviye eşitleme ve tek tek düzenleme mümkün olur.');
  }

  // 4) Kullanım amacına özel notlar
  if (s.purpose === 'stream') {
    reasons.push('Canlı yayında kulaklıkla anlık izleme (zero-latency monitoring) kritik: seçtiğin modelde kulaklık çıkışı ve doğrudan izleme özelliği olsun.');
  }
  if (s.purpose === 'meeting') {
    reasons.push('Toplantı kullanımında stüdyo kalitesi gereksiz: rahat ve yakında konuşabildiğin bir tip yeterli; USB bağlantı kararlılığı en önemli kriter.');
    avoid.push('Toplantı için büyük kondenser + boomsik dünyası kurmak — masada pratik olmaz.');
  }
  if (s.purpose === 'podcast') {
    reasons.push('Podcast kaydında en sık hata oda değil mikrofon seçimi: ağzına yakın (10–15 cm) konuşulabilen, pop filtresiyle kullanılabilen bir tip ara.');
  }

  // 5) Kaınılacaklar
  if (dynamic) avoid.push('Gürültülü/normal ev odasında büyük diyaframlı kondenser — komşunun TVsini kaydeder.');
  if (usb) avoid.push('USB mikrofonu "geçici olarak" uzatma kablosuyla sürmek — USB sinyal zayıflar; yeterince uzun USB-C kablo veya farklı konum planla.');
  if (!usb) avoid.push('XLR mikrofonu ses kartı olmadan almış olmak — kutudan çıkmazdan ses gelmez, bütçenin bir kısmını arayüze ayır.');

  const type = `${usb ? 'USB' : 'XLR'} ${condenserOk ? 'Kondenser' : 'Dinamik'}${!usb ? ' + Ses Kartı' : ''}`;
  const headline = usb
    ? (condenserOk ? 'USB Kondenser Mikrofon' : 'USB Dinamik Mikrofon')
    : `XLR ${condenserOk ? 'Kondenser' : 'Dinamik'} Mikrofon + Ses Kartı/Arayüz`;

  return { type, headline, reasons, warnings, avoid };
}

function ChipGroup<T extends string>({ label, value, onChange, options }: {
  label: string; value: T; onChange: (v: T) => void; options: { v: T; l: string; d?: string }[];
}) {
  return (
    <div className="space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {options.map(o => (
          <button key={o.v} type="button" onClick={() => onChange(o.v)}
            className={`text-left text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-colors ${
              value === o.v
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
            }`}
          >
            <div>{o.l}</div>
            {o.d && <div className={`text-[10px] font-normal mt-0.5 ${value === o.v ? 'text-emerald-50/80' : 'text-slate-400'}`}>{o.d}</div>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function MicSelector() {
  const [s, setS] = useState<State>(DEFAULTS);
  const r = useMemo(() => recommend(s), [s]);

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 space-y-7 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Mic className="w-5 h-5 text-emerald-600" />
            Mikrofon Tipini 4 Soruda Belirle
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Oda koşulunu, konuşmacı sayısını ve kullanımını seç — sistem sana aranacak mikrofon tipini ve kaçınman gerekenleri versin.
          </p>
        </div>
        <button onClick={() => setS(DEFAULTS)}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors flex-shrink-0"
          title="Sıfırla">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <ChipGroup label="Kayıt yapacağın oda" value={s.roomNoise} onChange={roomNoise => setS({ ...s, roomNoise })}
        options={[
          { v: 'quiet', l: 'Sessiz ve yumuşak', d: 'Halı/perde var, sokak sesi az' },
          { v: 'normal', l: 'Normal ev odası', d: 'Bazı sesler geliyor' },
          { v: 'noisy', l: 'Gürültülü / yankılı', d: 'Sert zemin, dış ses, çınlama' }
        ]} />

      <ChipGroup label="Aynı odada kaç kişi konuşacak?" value={s.speakers} onChange={speakers => setS({ ...s, speakers })}
        options={[
          { v: '1', l: '1 kişi' }, { v: '2', l: '2 kişi' }, { v: '3+', l: '3+ kişi' }
        ]} />

      <ChipGroup label="Ana kullanım amacın" value={s.purpose} onChange={purpose => setS({ ...s, purpose })}
        options={[
          { v: 'podcast', l: 'Podcast / ses kaydı' },
          { v: 'stream', l: 'Canlı yayın' },
          { v: 'meeting', l: 'Toplantı / online ders' },
          { v: 'music', l: 'Müzik / vokal' }
        ]} />

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Ses kartı / arayüz eklemeyi kabul eder misin?</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[{ v: false, l: 'Hayır — USB ile başlayayım', d: 'Tek kablo, tek cihaz, en basit kurulum' },
            { v: true, l: 'Evet — XLR yoluna açığım', d: 'Mikrofon + ses kartı; ileride büyür' }].map(o => (
            <button key={String(o.v)} type="button" onClick={() => setS({ ...s, acceptsInterface: o.v })}
              className={`text-left text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-colors ${
                s.acceptsInterface === o.v
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
              }`}>
              <div>{o.l}</div>
              <div className={`text-[10px] font-normal mt-0.5 ${s.acceptsInterface === o.v ? 'text-emerald-50/80' : 'text-slate-400'}`}>{o.d}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Sonuç */}
      <div className="rounded-2xl border-2 border-emerald-500/60 bg-emerald-50/70 dark:bg-emerald-950/30 p-5 sm:p-6 space-y-5">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Aradığın tip</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">{r.headline}</div>
        </div>

        {r.reasons.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">Neden bu yön?</div>
            <ul className="space-y-1.5">
              {r.reasons.map(t => (
                <li key={t} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />{t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {r.warnings.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Dikkat</div>
            <ul className="space-y-1.5">
              {r.warnings.map(t => (
                <li key={t} className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {r.avoid.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider">Kaçın</div>
            <ul className="space-y-1.5">
              {r.avoid.map(t => (
                <li key={t} className="flex items-start gap-2 text-sm text-rose-900 dark:text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />{t}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Bu yönlendirme mikrofon <strong>tipi</strong> kararındır; belirli model önerisi değildir. Kriterlere uyan modelleri karşılaştırmak için rehber bağlantılarını kullan.
        </p>
      </div>
    </div>
  );
}
