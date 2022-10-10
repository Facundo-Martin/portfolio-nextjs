import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
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
    <Card className="space-y-1 pb-3 w-[22rem]">
      <Link href={'/projects/' + project.slug}>
        <a>
          <Image src={project.preview} alt={`${project.name} website preview`} width={300} height={250} className="rounded-lg" />
        </a>
      </Link>

      <h5 className="font-semibold">{project.name}</h5>
      <p className="py-2">{project.description}</p>
      <div className="flex items-center gap-x-1">
        {project.techStack.map((name, i) => {
          if (name == 'React' && project.techStack.includes('Next.js')) return;
          return (
            <div key={name} className="text-sky-500">
              {name} {i < project.techStack.length - 1 && '-'}
            </div>
          );
        })}
      </div>
      <ReadMore slug={project.slug} />
    </Card>
  );
}

export default ProjectCard;
