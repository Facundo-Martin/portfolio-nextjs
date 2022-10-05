import { GlobeAltIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Card from '../UI/Card';
import { GitHubIcon } from '../UI/SocialIcons';

type ProjectLinksProps = {
  website: string;
  github: string;
};
function ProjectLinks({ website, github }: ProjectLinksProps) {
  return (
    <div className="flex items-center gap-x-3">
      <a href={website} target="_blank" rel="noreferrer">
        <Card className="rounded-lg px-3 py-1 flex items-center gap-x-1 dark:shadow-none">
          <GlobeAltIcon className="w-5" />
          <p className="font-medium">Website</p>
        </Card>
      </a>
      {github == 'private' || !github ? (
        <Card className="rounded-lg px-3 py-1 flex items-center gap-x-1 dark:shadow-none cursor-default">
          <GitHubIcon className="w-5 dark:fill-white" />
          <p className="font-medium">Private</p>
        </Card>
      ) : (
        <a href={github} target="_blank" rel="noreferrer">
          <Card className="rounded-lg px-3 py-1 flex items-center gap-x-1 dark:shadow-none">
            <GitHubIcon className="w-5 dark:fill-white" />
            <p className="font-medium">Github</p>
          </Card>
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
