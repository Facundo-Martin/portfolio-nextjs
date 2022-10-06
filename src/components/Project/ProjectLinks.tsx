import { GlobeAltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';
import Card from '../UI/Card';
import { GitHubIcon } from '../UI/SocialIcons';

type ProjectLinksProps = {
  website: string;
  github: string;
};
function ProjectLinks({ website, github }: ProjectLinksProps) {
  const cardStyle =
    'rounded-lg px-3 py-1 flex items-center gap-x-1 border-neutral-400/80 hover:bg-neutral-50/60 dark:shadow-none dark:border-neutral-400/70 dark:hover:bg-neutral-700';
  return (
    <div className="flex items-center gap-x-3">
      <a href={website} target="_blank" rel="noreferrer">
        <Card className={cardStyle}>
          <GlobeAltIcon className="w-5" />
          <p className="font-medium">Website</p>
        </Card>
      </a>
      {github == 'private' || !github ? (
        <Card className={clsx(cardStyle, 'cursor-default')}>
          <GitHubIcon className="w-5 dark:fill-white" />
          <p className="font-medium">Private</p>
        </Card>
      ) : (
        <a href={github} target="_blank" rel="noreferrer">
          <Card className={cardStyle}>
            <GitHubIcon className="w-5 dark:fill-white" />
            <p className="font-medium">Github</p>
          </Card>
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
