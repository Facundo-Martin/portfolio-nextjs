import clsx from 'clsx';
import React from 'react';

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx(className, 'rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/70 shadow-sm dark:shadow-neutral-700/60 hover:shadow-md')}>
      {children}
    </div>
  );
}

export default Card;
