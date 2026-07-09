export function LoadingSkeleton() {
    return (
        <div className="space-y-4 rounded-[28px] border border-zinc-800 bg-zinc-950/70 p-6" aria-label="Loading content">
            <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-800" />
            <div className="h-10 w-3/4 animate-pulse rounded-full bg-zinc-800" />
            <div className="grid gap-4 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="space-y-3 rounded-[24px] border border-zinc-800 bg-zinc-900/60 p-4">
                        <div className="h-40 animate-pulse rounded-2xl bg-zinc-800" />
                        <div className="h-4 w-24 animate-pulse rounded-full bg-zinc-800" />
                        <div className="h-5 w-full animate-pulse rounded-full bg-zinc-800" />
                        <div className="h-5 w-2/3 animate-pulse rounded-full bg-zinc-800" />
                    </div>
                ))}
            </div>
        </div>
    );
}
