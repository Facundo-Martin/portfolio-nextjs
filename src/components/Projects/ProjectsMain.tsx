import React from 'react';
import { projects } from '../../utils';
import ProjectCard from './ProjectCard';

function ProjectsMain() {
  return (
    <section className="section md:px-4 lg:px-10 xl:px-14">
      <h1 className="text-4xl font-bold text-center mb-14 text-gray-700 dark:text-white">My Projects</h1>
      <div className="grid w-fit mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 xl:gap-x-10 gap-y-16 md:gap-y-10">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsMain;
