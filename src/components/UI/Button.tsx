import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const variantStyles = {
  primary:
    'bg-zinc-100 font-medium text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200/75 active:bg-zinc-200 active:text-zinc-900/60 dark:text-zinc-300 dark:hover:text-zinc-100 dark:bg-zinc-700/75 dark:hover:bg-zinc-700/100 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
};

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
