import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug, CATEGORIES } from '@/data/categories';
import { getGuidesByCategory } from '@/data/guides';
import GuideCard from '@/components/GuideCard';
import SearchBar from '@/components/SearchBar';
import SponsorSlot from '@/components/SponsorSlot';
import { ChevronRight, Layers } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static params for all 11 categories
export async function generateStaticParams() {
  return CATEGORIES.map(c => ({
    category: c.slug
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return {};

  return {
    title: `${cat.name} Rehberleri - Nelere Dikkat Edilmeli?`,
    description: `${cat.name} kategorisinde bir seçim yapmadan önce kontrol etmeniz gereken kriterler, kırmızı bayraklar ve kontrol listeleri.`
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const guides = getGuidesByCategory(category.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Ana Sayfa
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">
          {category.name}
        </span>
      </nav>

      {/* Sponsor / Reklam Alanı */}
      <SponsorSlot categorySlug={category.slug} categoryName={category.name} />

      {/* Category Header */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>{category.name} Kategorisi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {category.name} Rehberleri ve Kontrol Listeleri
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center flex-shrink-0">
            <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 block">
              {guides.length}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Yayınlanmış Rehber
            </span>
          </div>
        </div>

        {/* Quick Search within Category */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
          <SearchBar placeholder={`${category.name} kategorisinde ara...`} size="normal" />
        </div>
      </div>

      {/* Guides Grid */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Tüm {category.name} Rehberleri ({guides.length})
        </h2>

        {guides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-100 dark:bg-slate-800/40 p-8 rounded-2xl text-center space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Bu kategoride henüz yayınlanmış rehber bulunmamaktadır.
            </p>
            <Link href="/" className="text-xs font-semibold text-emerald-600 hover:underline">
              Ana Sayfaya Dön
            </Link>
          </div>
        )}
      </section>

    </div>
  );
}
