import Image from 'next/image';
import React from 'react';
import { Project } from '../../d';
import Card from '../UI/Card';

function ProjectMain({ project }: { project: Project }) {
  return (
    <section className="section pt-0">
      <Card className="max-w-none flex gap-x-10">
        <a href={project.url} target="_blank" rel="noreferrer" className="relative group">
          <Image src={project.preview} width={1200} height={1000} className="rounded-lg" />
        </a>
        <div>
          <div>{project.description}</div>
        </div>
      </Card>
    </section>
  );
}

export default ProjectMain;
