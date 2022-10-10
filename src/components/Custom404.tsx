import { ArrowLeftIcon, ArrowRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link, { LinkProps } from 'next/link';
import React from 'react';

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
}
function LinkButton({ children, ...props }: LinkButtonProps) {
  return (
    <Link {...props}>
      <a className="py-2 px-4 rounded-lg border-[0.5px] border-neutral-300 dark:border-neutral-500 flex items-center gap-2 group hover:text-teal-500 dark:hover:text-teal-400">
        {children}
      </a>
    </Link>
  );
}

export default function Custom404() {
  return (
    <div className="grid place-items-center min-h-[80vh]">
      <div>
        <div className="flex flex-col justify-center lg:flex-row items-center lg:items-start gap-5 px-4">
          <span className="text-8xl font-semibold gradient-text">404</span>
          <div className="hidden lg:inline-flex h-24 w-[1px] bg-gray dark:bg-dark-text-secondary"></div>
          <div>
            <div className="text-5xl font-semibold text-center lg:text-start">Page Not Found</div>
            <p className="mt-2 text-xl text-center lg:text-start">Check URL or try again</p>
            <div className="flex flex-col items-center md:flex-row justify-center lg:justify-start gap-4 mt-8 lg:mt-8">
              {/* <LinkButton url="/" text={<h2 className="text-lg">Go Back Home</h2>} /> */}
              <LinkButton href="/">
                <HomeIcon className="w-5" />
                <h4>Home</h4>
              </LinkButton>

              <LinkButton href="/">
                <h4>Projects</h4>
                <ArrowRightIcon className="w-5 group-hover:translate-x-1 duration-700" />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
