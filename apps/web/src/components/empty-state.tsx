import { Sparkles } from 'lucide-react';

type EmptyStateProps = {
    title: string;
    description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
    return (
        <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/70 p-10 text-center" role="status">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
        </div>
    );
}
