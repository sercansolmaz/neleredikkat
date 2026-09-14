import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail, Clock, ShieldCheck, Megaphone, MessageSquareHeart } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Öneri, şikayet, soru, sponsorluk ve rehber talepleriniz için NelerDikkat iletişim formu ve e-posta adresi.',
  alternates: { canonical: 'https://neleredikkat.com/iletisim' },
  openGraph: {
    title: 'İletişim | NelerDikkat.com',
    description: 'Öneri, şikayet, soru, sponsorluk ve rehber talepleriniz için bize ulaşın.',
    url: 'https://neleredikkat.com/iletisim',
    type: 'website'
  }
};

const CONTACT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'İletişim',
  url: 'https://neleredikkat.com/iletisim',
  inLanguage: 'tr'
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSON_LD) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Konum">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">İletişim</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <MessageSquareHeart className="w-3.5 h-3.5" />
          <span>İletişim</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Fikrin mi var? Bize yaz.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Öneri, şikayet, soru, sponsorluk ya da yeni bir rehber talebi — hepsi bu formdan.
          Formu kullanmak istemezsen doğrudan{' '}
          <a href="mailto:info@neleredikkat.com" className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
            info@neleredikkat.com
          </a>{' '}
          adresine yazabilirsin.
        </p>
      </header>

      {/* Form */}
      <ContactForm />

      {/* Yanıt süreleri */}
      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-5">
        <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
          <Clock className="w-4 h-4 text-emerald-600" />
          Hangi konu ne kadar sürer?
        </h2>
        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li className="flex gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 dark:text-slate-200">Rehber talebi:</strong> en çok aranan konular öncelikli olarak yayınlanır; talebin sıraya eklenir.</span>
          </li>
          <li className="flex gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 dark:text-slate-200">Şikayet / düzeltme:</strong> ilgili içerik incelenir, gerekirse düzeltilir ve yanıtlanır.</span>
          </li>
          <li className="flex gap-2.5">
            <Megaphone className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 dark:text-slate-200">Sponsorluk / iş birliği:</strong> teklifinin kapsamını, hedef kitleni ve takvimi yaz; uygun görürsek dönüş yaparız.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-700/60 pt-4">
          NelerDikkat bir rehber ve kontrol listesi sitesidir; ürün satışı, sipariş veya ödeme işlemi yapmaz.
        </p>
      </section>
    </div>
  );
}
