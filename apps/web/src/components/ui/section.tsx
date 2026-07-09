import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type SectionProps = {
    children: ReactNode;
    className?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
};

export function Section({ children, className, eyebrow, title, description }: SectionProps) {
    return (
        <section className={clsx('py-20 sm:py-24', className)}>
            {(eyebrow || title || description) && (
                <div className="mb-10 max-w-2xl">
                    {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">{eyebrow}</p> : null}
                    {title ? <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2> : null}
                    {description ? <p className="mt-4 text-lg leading-8 text-zinc-400">{description}</p> : null}
                </div>
            )}
            {children}
        </section>
    );
}
