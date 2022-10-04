import clsx from 'clsx';
import React from 'react';

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx(className, 'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40')}>{children}</div>;
}

export default Card;
