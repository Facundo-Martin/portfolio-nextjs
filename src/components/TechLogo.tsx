import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { TechData } from '../d';

type TechLogoProps = {
  tech: TechData;
  size?: string;
};

function TechLogo({ tech, size = 'sm' }: TechLogoProps) {
  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center gap-y-1 opacity-80 hover:opacity-100 cursor-pointer hover:-translate-y-[6px] transition duration-700 group"
    >
      <div className={size == 'sm' ? 'w-12' : 'w-14'}>
        <Image src={tech.logo} alt={`${tech.name} logo`} height={50} width={50} layout="responsive" className="rounded-sm" />
      </div>
      <h4
        className={clsx(
          size == 'sm' ? 'text-sm' : 'text-base',
          'text-center font-light dark:text-dark-text-secondary dark:group-hover:text-dark-text-primary dark:group-hover:opacity-85 mt-[2px]'
        )}
      >
        {tech.name}
      </h4>
    </a>
  );
}

export default TechLogo;
