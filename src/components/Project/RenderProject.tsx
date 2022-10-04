import React from 'react';
import { Project } from '../../d';
import ProjectHero from './ProjectHero';
import ProjectMain from './ProjectMain';

function RenderProject({ project }: { project: Project }) {
  return (
    <>
      <ProjectHero project={project} />
      <ProjectMain project={project} />
    </>
  );
}

export default RenderProject;
