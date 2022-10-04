import React from 'react';
import { Project } from '../../d';
import ProjectHero from './ProjectHero';
import ProjectMain from './ProjectMain';

function RenderProject({ project }: { project: Project }) {
  return (
    <>
      <ProjectHero />
      <ProjectMain />
    </>
  );
}

export default RenderProject;
