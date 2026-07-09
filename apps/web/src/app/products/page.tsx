import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/page-header';
import { allProducts, categories } from '@/lib/mock-data';

export default function ProductsPage() {
    return (
        <main className="py-16 text-zinc-100">
            <Container>
                <PageHeader
                    eyebrow="Catalog"
                    title="A measured collection of the unexplained."
                    description="Browse the archive with the same restraint and care you would expect from a private collection of rare objects."
                    actions={
                        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white">
                            Return home <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    }
                />

                <section className="mt-10 flex flex-wrap gap-3" aria-label="Product categories">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/products?category=${category.slug}`}
                            className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-white"
                        >
                            {category.name}
                        </Link>
                    ))}
                </section>

                <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {allProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </Container>
        </main>
    );
}
