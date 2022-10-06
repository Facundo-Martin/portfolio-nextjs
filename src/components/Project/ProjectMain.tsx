import Image from 'next/image';
import React from 'react';
import { Project } from '../../d';
import Card from '../UI/Card';
import ProjectLinks from './ProjectLinks';

function ProjectMain({ project }: { project: Project }) {
  return (
    <section className="section pt-0">
      <Card className="max-w-none flex flex-col gap-y-6 md:flex-row gap-x-6">
        <a href={project.url} target="_blank" rel="noreferrer" className="flex-1 relative group">
          <Image src={project.preview} width={600} height={500} className="rounded-lg group-hover:opacity-80" />
        </a>
        <div className="flex-1 space-y-6">
          <ProjectLinks website={project.website} github={project.github ? project.github : ''} />
          <div className="mt-4 space-y-1">
            <p>{project.description}</p>
            <p>{project.description}</p>
          </div>
          <div className="mt-4">
            <h4>Main features:</h4>
            <ul className="ml-32 ">
              {project.features.map((feature, i) => (
                <li key={i} className="list-disc">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Built with:</h4>
            <ul className="mt-4 ml-6 flex items-center gap-x-10 ">
              {project.features.map((feature, i) => (
                <li key={i}>tech</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default ProjectMain;
