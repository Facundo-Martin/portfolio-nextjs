import React from 'react';
import { Project } from '../../d';

function RenderProject({ project }: { project: Project }) {
  return <div>{project.name}</div>;
}

export default RenderProject;
