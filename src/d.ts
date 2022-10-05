import { StaticImageData } from 'next/image';

export type Project = {
  name: string;
  preview: StaticImageData;
  url: string;
  description: string;
  techStack: string[];
  slug: string;
  website: string;
  github?: string;
};

export type ResumeItem = {
  company: string;
  url: string;
  title: string;
  logo: StaticImageData;
  start: number | string;
  end: number | string;
};
