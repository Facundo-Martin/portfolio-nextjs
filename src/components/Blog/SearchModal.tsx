import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
};
function Modal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 ">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-full max-w-3xl rounded bg-white h-[50vh]">
          <Dialog.Title>Complete your order</Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
type SearchModalProps = {
  className: string;
};

export default function SearchModal({ className }: SearchModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <button
      className={clsx(
        className,
        'flex items-center space-x-2 border border-gray-900/10 shado-sm px-3 py-1.5 hover:border-gray-300 focus:outline-none rounded-lg'
      )}
      onClick={() => setIsOpen(true)}
    >
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <MagnifyingGlassIcon className="w-5 text-gray-400 -ml-1 flex-none" />
      <span className="text-sm text-gray-400 flex-1 text-left">Search...</span>
      <span className="flex-none text-xs font-semibold text-gray-400">⌘K</span>
    </button>
  );
}
