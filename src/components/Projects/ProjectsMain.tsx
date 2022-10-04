import React from 'react';
import { projects } from '../../utils';
import ProjectCard from './ProjectCard';

function ProjectsMain() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold text-center mb-14">My Projects</h1>
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsMain;
