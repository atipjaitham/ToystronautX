import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant?: ButtonVariant;
    href?: string;
    className?: string;
};

export function Button({ variant = 'primary', href, className, children, ...props }: ButtonProps) {
    const baseClassName = 'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950';

    const variantClassName = {
        primary: 'border-cyan-400/30 bg-cyan-400 text-zinc-950 hover:bg-cyan-300',
        secondary: 'border-zinc-700 bg-zinc-900/70 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800',
        ghost: 'border-transparent bg-transparent text-zinc-300 hover:text-white',
    }[variant];

    const combinedClassName = clsx(baseClassName, variantClassName, className);

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
