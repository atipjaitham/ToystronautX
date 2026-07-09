import Link from 'next/link';

async function getFeaturedProducts() {
  const res = await fetch('http://localhost:4000/products/featured', { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const data = await getFeaturedProducts();
  const products = data.products ?? [];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(135deg,_#040404_0%,_#0f172a_100%)] px-6 py-6 text-zinc-100">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 rounded-[32px] border border-zinc-800/80 bg-zinc-950/70 p-6 shadow-2xl shadow-black/40 lg:p-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">ToystronautX</p>
            <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">Premium collectibles for the unexplained.</h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-zinc-300">
            <Link href="/products" className="rounded-full border border-zinc-700 px-4 py-2 transition hover:border-zinc-500 hover:text-white">Shop</Link>
            <Link href="/about" className="rounded-full border border-zinc-700 px-4 py-2 transition hover:border-zinc-500 hover:text-white">About</Link>
            <Link href="/contact" className="rounded-full border border-zinc-700 px-4 py-2 transition hover:border-zinc-500 hover:text-white">Contact</Link>
          </nav>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-8">
            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              Discover limited-edition pieces inspired by UFO sightings, alien encounters, secret projects, and unknown artifacts curated for collectors and QA engineers alike.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">Browse collection</Link>
              <Link href="/about" className="rounded-full border border-zinc-700 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white">Read the concept</Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900/80">
            <div className="aspect-[4/3] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80" alt="ToystronautX featured collectible" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured relics</h2>
            <Link href="/products" className="text-sm text-zinc-400 transition hover:text-white">View all</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product: any) => (
              <article key={product.id} className="rounded-[24px] border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg shadow-black/20">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-800">
                  <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{product.categoryName}</p>
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="text-sm leading-6 text-zinc-400">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-white">${product.price}</span>
                    <Link href={`/products/${product.slug}`} className="text-sm text-zinc-300 transition hover:text-white">Details</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
