import Image from 'next/image';
import React from 'react';
import { Project } from '../../d';
import { techStack } from '../../utils';
import Card from '../UI/Card';
import TechLogo from '../TechLogo';
import ProjectLinks from './ProjectLinks';

function ProjectMain({ project }: { project: Project }) {
  return (
    <section className="section pt-0">
      <Card className=" w-fit mx-auto flex flex-col gap-y-6 xl:flex-row gap-x-6 hover:shadow-none">
        <a href={project.website} target="_blank" rel="noreferrer" className="flex-1 relative group">
          <Image src={project.preview} width={600} height={500} className="rounded-lg group-hover:opacity-80" />
        </a>
        <div className="flex-1 space-y-6">
          <ProjectLinks website={project.website} github={project.github ? project.github : ''} />
          <div className="mt-4 space-y-1 max-w-lg">
            <p>{project.description}</p>
            <p className="hidden xl:block">{project.description2}</p>
          </div>
          <div className="mt-4">
            <h4 className="hidden lg:block">Main features:</h4>
            <h4 className="lg:hidden">Features:</h4>
            <ul className="ml-20 mt-2 lg:ml-32 ">
              {project.features.map((feature, i) => (
                <li key={i} className="list-disc">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Built with:</h4>
            <ul className="mt-6 ml-20 flex items-center gap-x-6 flex-wrap gap-y-4">
              {project.techStack.map((name, i) => {
                let tech = techStack.find((x) => x.name === name);
                if (tech) {
                  return <TechLogo key={i} tech={tech} />;
                }
              })}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default ProjectMain;
