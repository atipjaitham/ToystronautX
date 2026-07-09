import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type PageHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    actions?: ReactNode;
    className?: string;
};

export function PageHeader({ eyebrow, title, description, actions, className }: PageHeaderProps) {
    return (
        <div className={clsx('flex flex-col gap-4 border-b border-zinc-900/80 pb-8 sm:flex-row sm:items-end sm:justify-between', className)}>
            <div className="max-w-2xl">
                {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">{eyebrow}</p> : null}
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
                {description ? <p className="mt-3 text-lg leading-8 text-zinc-400">{description}</p> : null}
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
    );
}
