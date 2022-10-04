import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

function BreadLink({ href, icon: Icon, children }: { href?: string; icon: React.ElementType; children: React.ReactNode }) {
  const breadStyle = 'ml-1 text-sm font-medium text-gray-300 hover:text-teal-500';
  return (
    <div className="flex items-center">
      <Icon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
      {href && (
        <Link href={href}>
          <a className={breadStyle}>{children}</a>
        </Link>
      )}
      {!href && <span className={clsx(breadStyle, 'cursor-default')}>{children}</span>}
    </div>
  );
}
type ProjectBreadcrumbsProps = {
  className: string;
  title: string;
};
function ProjectBreadcrumbs({ className, title }: ProjectBreadcrumbsProps) {
  return (
    <nav className={clsx(className, 'flex items-center space-x-2')} aria-label="Breadcrumb">
      <Link href="/">
        <a>
          <HomeIcon className="h-5 w-5 flex-shrink-0 text-gray-400 hover:text-teal-500" />
        </a>
      </Link>
      <BreadLink href="/projects" icon={ChevronRightIcon}>
        Projects
      </BreadLink>
      <BreadLink icon={ChevronRightIcon}>{title}</BreadLink>
    </nav>
  );
}
export default ProjectBreadcrumbs;
