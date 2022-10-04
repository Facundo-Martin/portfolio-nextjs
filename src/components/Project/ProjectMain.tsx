import Image from 'next/image';
import React from 'react';
import { Project } from '../../d';
import Card from '../UI/Card';

function ProjectMain({ project }: { project: Project }) {
  return (
    <section className="section pt-0">
      <Card className="max-w-none flex gap-x-10">
        <a href={project.url} target="_blank" rel="noreferrer" className="relative group">
          <div className="hidden group-hover:grid absolute inset-0 place-items-center z-10">
            <div className="px-4 py-2 bg-white rounded-lg text-gray-600 font-semibold">Visit Website</div>
          </div>
          <Image src={project.preview} width={1200} height={1000} className="rounded-lg group-hover:opacity-60" />
        </a>
        <div>
          <div>{project.description}</div>
        </div>
      </Card>
    </section>
  );
}

export default ProjectMain;
