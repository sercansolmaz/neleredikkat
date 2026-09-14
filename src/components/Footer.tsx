import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Info, Mail } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Neler<span className="text-emerald-400">Dikkat</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Her türlü tüketici kararı öncesinde kontrol etmeniz gereken kritik kriterleri, kırmızı bayrakları ve interaktif kontrol listelerini sunar.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-medium text-emerald-400 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Sıfır AI Yanılması & %100 Doğrulanmış Kriterler
              </span>
            </div>
            <div className="flex items-start gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
              <Info className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                NelerDikkat.com marka ve model tavsiyesi üretmez; karar vermeden önce sorulması gereken doğru soruları ve dikkat edilecek teknik kriterleri öğretir.
              </p>
            </div>
          </div>

          {/* Categories Column 1 */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Kategoriler
            </h3>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <Link href={`/${cat.slug}`} className="hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column 2 */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Diğer Konular
            </h3>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(6).map(cat => (
                <li key={cat.id}>
                  <Link href={`/${cat.slug}`} className="hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Principle Disclaimer */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <div className="space-y-2.5">
              <p className="text-xs leading-relaxed">
                Öneri, şikayet, soru veya sponsorluk için bize ulaşın.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                İletişim Formu
              </Link>
              <p className="text-[11px] text-slate-500">
                ya da{' '}
                <a href="mailto:info@neleredikkat.com" className="text-emerald-400 hover:underline">
                  info@neleredikkat.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NelerDikkat.com. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/admin/missing-searches" className="hover:text-slate-400 transition-colors">
              Talep Edilen Rehberler (Admin)
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
