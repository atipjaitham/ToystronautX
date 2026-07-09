import Link from 'next/link';

const categories = [
    { slug: 'ufo', label: 'UFO' },
    { slug: 'alien', label: 'Alien' },
    { slug: 'spacecraft', label: 'Spacecraft' },
    { slug: 'astronaut', label: 'Astronaut' },
    { slug: 'secret-project', label: 'Secret Project' },
    { slug: 'mystery-artifact', label: 'Mystery Artifact' },
];

async function getProducts() {
    const res = await fetch('http://localhost:4000/products', { cache: 'no-store' });
    return res.json();
}

export default async function ProductsPage() {
    const data = await getProducts();
    const products = data.products ?? [];

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_50%)] px-6 py-8 text-zinc-100">
            <div className="mx-auto flex max-w-7xl flex-col gap-8">
                <header className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">ToystronautX Catalog</p>
                        <h1 className="text-3xl font-semibold">Collect the unexplained.</h1>
                    </div>
                    <Link href="/" className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white">
                        Back to home
                    </Link>
                </header>

                <section className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/products?category=${category.slug}`}
                            className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-white"
                        >
                            {category.label}
                        </Link>
                    ))}
                </section>

                <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product: any) => (
                        <article key={product.id} className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 shadow-2xl shadow-black/30">
                            <div className="aspect-[4/3] bg-zinc-900">
                                <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="space-y-4 p-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">{product.categoryName}</span>
                                    <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">{product.rating} ★</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                                    <p className="mt-2 text-sm leading-6 text-zinc-400">{product.description}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-white">${product.price}</p>
                                        <p className="text-sm text-zinc-500">{product.stock} in stock</p>
                                    </div>
                                    <Link href={`/products/${product.slug}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">
                                        View item
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}
