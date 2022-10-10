import React from 'react';
import { Project } from '../../d';
import ProjectHero from './ProjectHero';
import ProjectMain from './ProjectMain';

function RenderProject({ project }: { project: Project }) {
  console.log('STUPIDPROJECT:', project);
  return (
    <>
      <ProjectHero title={project.name} />
      <ProjectMain project={project} />
    </>
  );
}

export default RenderProject;
