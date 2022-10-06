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
  return (
    <div className="flex items-center gap-x-3">
      <a href={website} target="_blank" rel="noreferrer" className="project-button">
        <GlobeAltIcon className="w-5" />
        <p className="font-medium">Website</p>
      </a>
      {github == 'private' || !github ? (
        <div className="project-button">
          <GitHubIcon className="w-5 dark:fill-white" />
          <p className="font-medium">Private</p>
        </div>
      ) : (
        <a href={github} target="_blank" rel="noreferrer" className="project-button">
          <GitHubIcon className="w-5 dark:fill-white" />
          <p className="font-medium">Github</p>
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
