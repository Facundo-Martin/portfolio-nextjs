import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Divide } from 'hamburger-react';
import Link from 'next/link';
import React from 'react';
import { Project } from '../../d';
import Card from '../UI/Card';

function ReadMore({ slug }: { slug: string }) {
  return (
    <div className="pt-2">
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="flex items-center gap-x-2 hover:text-teal-500 group">
            <h4>Read More</h4>
            <ArrowRightIcon className="w-4 group-hover:translate-x-1 transition-all duration-700" />
          </div>
        </a>
      </Link>
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
};
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="space-y-2 pb-3">
      <div>Image</div>
      <div>{project.name}</div>
      <div>{project.description}</div>
      <div className="flex items-center gap-x-1">
        {project.techStack.map((tech, i) => (
          <div>
            {tech} {i < project.techStack.length - 1 ? '-' : ''}
          </div>
        ))}
      </div>
      <ReadMore slug={project.slug} />
    </Card>
  );
}

export default ProjectCard;
