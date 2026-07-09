"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/mock-data';

type ProductCardProps = {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.article
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="group overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/80 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                    <Badge className="border-cyan-400/20 bg-cyan-400/10 text-cyan-300">Featured</Badge>
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-zinc-300">
                        {product.categoryName}
                    </span>
                </div>
            </div>

            <div className="space-y-4 p-6">
                <div>
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{product.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-zinc-400">
                    <span>${product.price}</span>
                    <span>{product.rating} ★</span>
                </div>

                <Link href={`/products/${product.slug}`} className="inline-flex items-center text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                    View piece →
                </Link>
            </div>
        </motion.article>
    );
}
