import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { allProducts } from '@/lib/mock-data';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = allProducts.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="py-16 text-zinc-100">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/80 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                        <img src={product.image} alt={product.name} className="aspect-[4/3] h-full w-full object-cover" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">{product.categoryName}</p>
                            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{product.name}</h1>
                            <p className="mt-5 text-lg leading-8 text-zinc-400">{product.description}</p>
                        </div>

                        <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/70 p-6">
                            <div className="flex flex-wrap items-end gap-3">
                                <p className="text-3xl font-semibold text-white">${product.price}</p>
                                <p className="text-sm text-zinc-500">Was ${product.compareAtPrice}</p>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button variant="primary">Add to cart</Button>
                                <Button href="/products" variant="secondary">
                                    Back to catalog
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-4 text-sm text-zinc-400 sm:grid-cols-2">
                            <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/70 p-4">Rating: {product.rating} / 5</div>
                            <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/70 p-4">Reviews: {product.reviewCount}</div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
