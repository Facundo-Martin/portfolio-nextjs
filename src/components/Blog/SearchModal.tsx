import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

type SearchModalProps = {
  className: string;
};
export default function SearchModal({ className }: SearchModalProps) {
  return (
    <button
      className={clsx(
        className,
        'flex items-center space-x-2 border border-gray-900/10 shado-sm px-3 py-1.5 hover:border-gray-300 focus:outline-none rounded-lg'
      )}
    >
      <MagnifyingGlassIcon className="w-5 text-gray-400 -ml-1 flex-none" />
      <span className="text-sm text-gray-400 flex-1 text-left">Search...</span>
      <span className="flex-none text-xs font-semibold text-gray-400">⌘K</span>
    </button>
  );
}
