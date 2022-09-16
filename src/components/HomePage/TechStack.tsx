import Image, { ImageProps } from 'next/image';
import React from 'react';
// Programming Languages
import logos from '../../assets/logos/index';
// Tools
import apollographql from '../..assets/logos/apollographql.svg';

const programmingLanguages = [
  { name: 'TypeScript', logo: logos.typescript },
  { name: 'JavaScript', logo: logos.javascript },
  { name: 'CSS3', logo: logos.css },
  { name: 'HTML', logo: logos.html },
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
      <h4 className="text-base font-light dark:text-dark-text-secondary dark:group-hover:text-dark-text-primary dark:group-hover:opacity-85">{tech.name}</h4>
    </div>
  );
}
function TechStack() {
  return (
    <div className="flex-1 max-w-xl bg-pink-200">
      <h1>Programming Languages</h1>
      <div className="flex gap-x-6 ">
        {programmingLanguages.map((tech) => (
          <TechData tech={tech} />
        ))}
      </div>
      <Image src={logos.apollographql} width={50} height={50} />
    </div>
  );
}

export default TechStack;
