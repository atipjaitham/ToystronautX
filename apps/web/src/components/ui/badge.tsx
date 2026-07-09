import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type BadgeProps = {
    children: ReactNode;
    className?: string;
};

export function Badge({ children, className }: BadgeProps) {
    return <span className={clsx('inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-400', className)}>{children}</span>;
}
