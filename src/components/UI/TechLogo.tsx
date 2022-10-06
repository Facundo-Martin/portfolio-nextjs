import Image from 'next/image';
import React from 'react';
import { techStack } from '../../utils';

type TechLogoProps = {
  name: string;
};

function TechLogo({ name }: TechLogoProps) {
  let tech = techStack.find((x) => x.name === name);

  if (!tech) return;

  return (
    <div className="flex flex-col items-center gap-y-1 opacity-80 hover:opacity-100 cursor-pointer hover:-translate-y-[6px] transition duration-700 group">
      <div className="w-14">
        <Image src={tech.logo} alt={`${tech.name} logo`} height={50} width={50} layout="responsive" className="rounded-sm" />
      </div>
      <h4 className="text-base text-center font-light dark:text-dark-text-secondary dark:group-hover:text-dark-text-primary dark:group-hover:opacity-85 mt-[2px]">
        {tech.name}
      </h4>
    </div>
  );
}

export default TechLogo;
