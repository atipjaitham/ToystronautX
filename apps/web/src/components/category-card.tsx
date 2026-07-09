import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/lib/mock-data';

type CategoryCardProps = {
    category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link href={`/products?category=${category.slug}`} className="group rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-6 transition hover:-translate-y-1 hover:border-zinc-600">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{category.description}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                    <ArrowRight className="h-4 w-4" />
                </span>
            </div>
        </Link>
    );
}
