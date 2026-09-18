import React from 'react';
import Link from 'next/link';
import { Category } from '@/types/guide';
import { getGuidesByCategory } from '@/data/guides';
import {
  Laptop,
  Home,
  Car,
  Baby,
  Shirt,
  Tent,
  Gamepad2,
  Plane,
  Globe,
  GraduationCap,
  Mic,
  ChevronRight
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Laptop,
  Home,
  Car,
  Baby,
  Shirt,
  Tent,
  Gamepad2,
  Plane,
  Globe,
  GraduationCap,
  Mic
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = ICON_MAP[category.iconName] || Laptop;
  const guideCount = getGuidesByCategory(category.slug).length;

  return (
    <Link
      href={`/${category.slug}`}
      className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-5 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          <IconComponent className="w-5 h-5" />
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {category.name}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
            {category.description}
          </p>
        </div>
      </div>

      <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500">
        <span className="font-medium text-slate-400">{guideCount} Rehber</span>
        <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
