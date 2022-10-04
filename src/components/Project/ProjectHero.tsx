import React from 'react';
import { Project } from '../../d';
import ProjectBreadcrumbs from './ProjectBreadcrumbs';

function ProjectHero({ title }: { title: string }) {
  return (
    <section className="section relative">
      <ProjectBreadcrumbs className="absolute top-6" title={title} />
      <h1 className="text-center text-4xl font-bold">{title}</h1>
    </section>
  );
}

export default ProjectHero;
