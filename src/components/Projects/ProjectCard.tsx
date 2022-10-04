import React from 'react';
import { Project } from '../../d';
import Card from '../UI/Card';

type ProjectCardProps = {
  project: Project;
};
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="space-y-2">
      <div>Image</div>
      <div>Title</div>
      <div>Description</div>
      <div>TechStack</div>
      <div>Read More</div>
    </Card>
  );
}

export default ProjectCard;
