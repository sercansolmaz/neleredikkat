import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES, getGuideById } from '@/data/guides';
import { getHubBySlug, getHubGuides, DECISION_HUBS } from '@/data/hubs';
import { Calculator, ChevronRight, ClipboardCheck, Compass, HelpCircle } from 'lucide-react';

interface HubPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DECISION_HUBS.map(h => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: HubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHubBySlug(slug);
  if (!hub) return {};
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: `/konu/${hub.slug}/` },
    openGraph: {
      title: hub.title,
      description: hub.description,
      url: `https://neleredikkat.com/konu/${hub.slug}/`,
      images: [{ url: `/og/otomobil-motosiklet/_kategori.png`, width: 1200, height: 630, alt: hub.title }]
    }
  };
}

export default async function HubPage({ params }: HubPageProps) {
  const { slug } = await params;
  const hub = getHubBySlug(slug);
  if (!hub) notFound();

  const stages = getHubGuides(hub, GUIDES);
  const totalGuides = stages.reduce((n, s) => n + s.guides.length, 0);
  const baseUrl = 'https://neleredikkat.com';
  const hubUrl = `${baseUrl}/konu/${hub.slug}/`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: hub.title, item: hubUrl }
    ]
  };
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: hub.title,
    description: hub.description,
    url: hubUrl,
    isPartOf: { '@type': 'WebSite', name: 'NelerDikkat.com', url: `${baseUrl}/` }
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hub.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const guideHref = (id: string) => {
    const g = getGuideById(id);
    return g ? `/${g.categorySlug}/${g.slug}/` : '#';
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">{hub.title}</span>
      </nav>

      <header className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-5">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            Karar Merkezi
          </span>
          <span className="font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">
            {stages.length} karar aşaması
          </span>
          <span className="font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">
            {totalGuides} rehber
          </span>
          {hub.tools.length > 0 && (
            <span className="font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-lg">
              {hub.tools.length} hesaplama aracı
            </span>
          )}
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          {hub.h1}
        </h1>
        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {hub.intro.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </header>

      {/* Karar araçları — en üstte, harekete geçiren blok */}
      {hub.tools.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hub.tools.map(t => (
            <Link key={t.href} href={t.href}
              className="flex items-center justify-between gap-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl px-5 py-4 hover:from-emerald-700 hover:to-teal-700 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <Calculator className="w-6 h-6 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">{t.title}</div>
                  <div className="text-xs text-emerald-50/90">{t.desc}</div>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/20 rounded-lg px-3 py-1.5 flex-shrink-0">Hesapla →</span>
            </Link>
          ))}
        </section>
      )}

      {/* Karar aşamaları */}
      <div className="space-y-8">
        {stages.map(({ stage, guides }) => (
          <section key={stage.key} className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-emerald-600" />
                {stage.label}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{stage.desc}</p>
            </div>

            {guides.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {guides.map(g => (
                  <Link key={g.id} href={guideHref(g.id)}
                    className="group border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 hover:border-emerald-400 transition-colors">
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {g.shortTitle}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{g.description}</div>
                  </Link>
                ))}
              </div>
            ) : stage.key === 'bütçe' ? (
              <div className="border border-dashed border-emerald-300 dark:border-emerald-800 rounded-xl px-4 py-3.5 text-xs text-slate-600 dark:text-slate-300 bg-emerald-50/40 dark:bg-emerald-950/20">
                Bu aşamanın aracı yukarıda: <strong>Sahip Olma Maliyeti</strong> hesaplayıcısı ile aylık gerçek maliyeti çıkar; sonrasında araç aramaya geç.
              </div>
            ) : null}
          </section>
        ))}
      </div>

      {/* SSS */}
      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          Sık Sorulan Sorular
        </h2>
        <div className="space-y-5">
          {hub.faq.map(f => (
            <div key={f.q} className="space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{f.q}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bağlı kategori */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4">
        <span className="text-slate-600 dark:text-slate-300">
          Bu merkez, tüm otomobil ve motosiklet kararlarını kapsayan kategori sayfasının paralelinde çalışır.
        </span>
        <Link href="/otomobil-motosiklet/" className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex-shrink-0">
          Otomobil & Motosiklet kategorisi →
        </Link>
      </div>
    </div>
  );
}
