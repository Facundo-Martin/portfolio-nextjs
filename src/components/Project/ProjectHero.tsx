import React from 'react';
import { Project } from '../../d';

function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="section">
      <h1 className="text-center text-4xl font-bold">{project.name}</h1>
    </section>
  );
}

export default ProjectHero;
