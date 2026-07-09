import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-20 text-zinc-100">
            <div className="max-w-xl rounded-[32px] border border-zinc-800 bg-zinc-900/80 p-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">404</p>
                <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">The signal was lost.</h1>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                    The page you requested is not part of the current archive. Return to the collection and continue exploring.
                </p>
                <div className="mt-8 flex justify-center gap-3">
                    <Button href="/" variant="primary">Return home</Button>
                    <Button href="/products" variant="secondary">Browse catalog</Button>
                </div>
            </div>
        </main>
    );
}
