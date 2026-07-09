import Link from 'next/link';

async function getProduct(slug: string) {
    const res = await fetch(`http://localhost:4000/products/${slug}`, { cache: 'no-store' });
    return res.json();
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getProduct(slug);
    const product = data.product;

    if (!product) {
        return <div className="px-6 py-20 text-zinc-100">Product not found.</div>;
    }

    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-8 text-zinc-100">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                    <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{product.categoryName}</p>
                        <h1 className="mt-3 text-4xl font-semibold text-white">{product.name}</h1>
                        <p className="mt-4 text-lg leading-8 text-zinc-400">{product.description}</p>
                    </div>
                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">
                        <div className="flex items-end gap-4">
                            <p className="text-3xl font-semibold text-white">${product.price}</p>
                            <p className="text-sm text-zinc-500">was ${product.compareAtPrice}</p>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">Add to cart</button>
                            <Link href="/products" className="rounded-full border border-zinc-700 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white">Back to catalog</Link>
                        </div>
                    </div>
                    <div className="grid gap-4 text-sm text-zinc-400 sm:grid-cols-2">
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">Rating: {product.rating} / 5</div>
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">Reviews: {product.reviewCount}</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
