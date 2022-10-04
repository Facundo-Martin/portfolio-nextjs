import React from 'react';
import ProjectsHero from './ProjectsHero';
import ProjectsMain from './ProjectsMain';

function RenderProjects() {
  return (
    <div className="pt-10">
      <ProjectsHero />
      <ProjectsMain />
    </div>
  );
}

export default RenderProjects;
