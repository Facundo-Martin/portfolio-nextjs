import Image, { ImageProps } from 'next/image';
import React from 'react';
// Programming Languages
import logos from '../../assets/logos/index';
// Tools

const programmingLanguages = [
  { name: 'TypeScript', logo: logos.typescript },
  { name: 'JavaScript', logo: logos.javascript },
  { name: 'CSS3', logo: logos.css },
  { name: 'HTML', logo: logos.html },
];
const frameworks = [
  { name: 'React', logo: logos.reactjs },
  { name: 'Next', logo: logos.nextjs },
  { name: 'Tailwind CSS', logo: logos.tailwind },
];
const tools = [
  { name: 'GraphQL', logo: logos.graphql },
  { name: 'Apollo Server', logo: logos.apollographql },
  { name: 'Git', logo: logos.git },
  { name: 'Github', logo: logos.github },
  { name: 'Jira', logo: logos.jira },
  { name: 'VS Code', logo: logos.vscode },
];

interface TechDataProps {
  tech: {
    name: string;
    logo: string;
  };
}
function TechData({ tech }: TechDataProps) {
  return (
    <div className="flex flex-col items-center gap-y-1 opacity-80 hover:opacity-100 cursor-pointer hover:-translate-y-[6px] transition duration-700 group">
      <div className="w-14">
        <Image src={tech.logo} alt={`${tech.name} logo`} height={50} width={50} layout="responsive" className="rounded-sm" />
      </div>
      <h4 className="text-base font-light dark:text-dark-text-secondary dark:group-hover:text-dark-text-primary dark:group-hover:opacity-85 mt-[2px]">
        {tech.name}
      </h4>
    </div>
  );
}
function TechStack() {
  return (
    <div className="flex-1 space-y-6  max-w-xl rounded-xl px-6 py-5 border  border-neutral-100 dark:border-neutral-700/40 shadow-sm">
      <div>
        <h1 className="mb-3 font-medium text-zinc-700 dark:text-zinc-200">Programming Languages</h1>
        <div className="flex gap-x-6 flex-wrap">
          {programmingLanguages.map((tech) => (
            <TechData tech={tech} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-3 font-medium text-zinc-700 dark:text-zinc-200">Frameworks</h1>
        <div className="flex gap-x-6 flex-wrap">
          {frameworks.map((tech) => (
            <TechData tech={tech} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-3 font-medium text-zinc-700 dark:text-zinc-200">Tools of the trade</h1>
        <div className="flex gap-x-6 flex-wrap">
          {tools.map((tech) => (
            <TechData tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
