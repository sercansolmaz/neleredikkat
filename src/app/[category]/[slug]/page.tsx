import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getGuideBySlug, GUIDES, getGuideById } from '@/data/guides';
import { getCategoryBySlug } from '@/data/categories';
import { getJourneyBySlug } from '@/data/journeys';
import { getNeedChain } from '@/data/needChains';
import InteractiveChecklist from '@/components/InteractiveChecklist';
import RedFlags from '@/components/RedFlags';
import SellerQuestions from '@/components/SellerQuestions';
import GuideCard from '@/components/GuideCard';
import ScenarioContainer from './ScenarioContainer';
import { ChevronRight, Clock, CheckSquare, Calendar, ShieldCheck, Compass } from 'lucide-react';

interface GuidePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static params for SSG compilation of all seed guides
export async function generateStaticParams() {
  return GUIDES.map(g => ({
    category: g.categorySlug,
    slug: g.slug
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const guide = getGuideBySlug(categorySlug, slug);
  if (!guide) return {};

  const url = `https://neleredikkat.com/${guide.categorySlug}/${guide.slug}`;

  return {
    title: `${guide.title}`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${guide.title}`,
      description: guide.description,
      url,
      type: 'article',
      publishedTime: guide.lastUpdated
    }
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { category: categorySlug, slug } = await params;
  const guide = getGuideBySlug(categorySlug, slug);

  if (!guide) {
    notFound();
  }

  const category = getCategoryBySlug(guide.categorySlug);

  // İhtiyaç zinciri: önce → birlikte → ikinci el → sonraki adım
  const needChain = getNeedChain(guide, GUIDES);
  const chainGroups = [
    { key: 'before', label: 'Öncesinde Seçilir', ids: needChain.before },
    { key: 'together', label: 'Birlikte Gerekebilir', ids: needChain.together },
    { key: 'secondHand', label: 'İkinci El Seçeneği', ids: needChain.secondHand },
    { key: 'next', label: 'Sonraki Adım', ids: needChain.next }
  ]
    .map(group => ({
      ...group,
      guides: group.ids.map(id => getGuideById(id)).filter((g): g is NonNullable<typeof g> => g !== undefined)
    }))
    .filter(group => group.guides.length > 0);

  // Fetch related decision journey if any
  const journey = guide.journeyIds && guide.journeyIds.length > 0
    ? getJourneyBySlug(guide.journeyIds[0])
    : undefined;

  // Build JSON-LD Structured Data
  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://neleredikkat.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category?.name || guide.categorySlug,
        item: `https://neleredikkat.com/${guide.categorySlug}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.shortTitle,
        item: `https://neleredikkat.com/${guide.categorySlug}/${guide.slug}`
      }
    ]
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    dateModified: guide.lastUpdated,
    author: {
      '@type': 'Organization',
      name: 'NelerDikkat'
    },
    publisher: {
      '@type': 'Organization',
      name: 'NelerDikkat.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://neleredikkat.com/logo.png'
      }
    }
  };

  const faqJsonLd = guide.questions && guide.questions.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.whyItMatters
      }
    }))
  } : null;

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Schema.org Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Ana Sayfa
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href={`/${guide.categorySlug}`} className="hover:text-emerald-600 transition-colors">
          {category?.name || guide.categorySlug}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold truncate">
          {guide.shortTitle}
        </span>
      </nav>

      {/* Guide Header Banner */}
      <header className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-5">
        
        {/* Top Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <Link
            href={`/${guide.categorySlug}`}
            className="font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800"
          >
            {category?.name || guide.categorySlug}
          </Link>

          <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
            {guide.checklistItems.length} kritik kontrol
          </span>

          <span className="flex items-center gap-1 font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 px-3 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5" />
            {guide.estimatedReadTimeMinutes} dakika okuma
          </span>

          <span className="flex items-center gap-1 font-medium text-slate-400 ml-auto hidden sm:flex">
            <Calendar className="w-3.5 h-3.5" />
            Güncelleme: {guide.lastUpdated}
          </span>
        </div>

        {/* H1 Main Query Title */}
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          {guide.title}
        </h1>

        {/* Decision Journey Context Alert if present */}
        {journey && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 p-3.5 rounded-2xl flex items-center justify-between text-xs gap-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-200">
                Bu rehber <strong>"{journey.title}"</strong> Karar Yolculuğu'nun parçasıdır.
              </span>
            </div>
            <Link
              href={`/yolculuklar/${journey.slug}`}
              className="font-bold text-amber-700 dark:text-amber-400 hover:underline flex-shrink-0"
            >
              Tüm Rotayı Gör →
            </Link>
          </div>
        )}
      </header>

      {/* Bölüm 1: Kısa Cevap / Giriş Özet */}
      <section className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          Kısa Özet & Dikkat Edilecekler
        </h2>
        <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
          {guide.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Bölüm 2 & 3: Senaryolar ve En Önemli Kriterler */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            En Önemli {guide.importanceItems.length} Kriter
          </h2>
        </div>

        {/* Scenario container & Criteria items list */}
        <ScenarioContainer
          scenarios={guide.scenarios || []}
          importanceItems={guide.importanceItems}
        />
      </section>

      {/* Bölüm 4: İnteraktif Checklist */}
      <section className="scroll-mt-20" id="checklist">
        <InteractiveChecklist
          guideSlug={guide.slug}
          items={guide.checklistItems}
        />
      </section>

      {/* Bölüm 5: Kırmızı Bayraklar 🚩 */}
      <section>
        <RedFlags flags={guide.redFlags} />
      </section>

      {/* Bölüm 6: Satıcıya Sorulacak Sorular */}
      {guide.questions && guide.questions.length > 0 && (
        <section>
          <SellerQuestions questions={guide.questions} />
        </section>
      )}

      {/* Bölüm 7: İhtiyaç Zinciri */}
      {chainGroups.length > 0 && (
        <section className="space-y-7 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              İhtiyaç Zinciri
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bu karardan önce, beraberinde veya sonrasında değerlendirmen gerekebilecek adımlar.
            </p>
          </div>

          {chainGroups.map(group => (
            <div key={group.key} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {group.label}
                </h3>
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.guides.map(rel => (
                  <GuideCard key={`${group.key}-${rel.id}`} guide={rel} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

    </article>
  );
}
