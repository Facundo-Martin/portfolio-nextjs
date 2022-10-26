import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function SearchModal() {
  return (
    <button className="flex items-center space-x-2 border border-gray-900/10 shado-sm px-3 py-1.5 hover:border-gray-300 focus:outline-none rounded-lg">
      <MagnifyingGlassIcon className="w-5" />
      <span>Search...</span>
      <span>⌘K</span>
    </button>
  );
}
