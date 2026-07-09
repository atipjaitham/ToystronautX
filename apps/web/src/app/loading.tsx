import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function Loading() {
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
            <div className="mx-auto max-w-7xl">
                <LoadingSkeleton />
            </div>
        </main>
    );
}
