import React from 'react';
import { projects } from '../../utils';
import ProjectCard from './ProjectCard';

function ProjectsMain() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold text-center">My Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsMain;
