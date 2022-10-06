import { StaticImageData } from 'next/image';

export type Project = {
  name: string;
  preview: StaticImageData;
  description: string;
  techStack: string[];
  slug: string;
  website: string;
  github?: string;
  features: string[];
};

export type ResumeItem = {
  company: string;
  url: string;
  title: string;
  logo: StaticImageData;
  start: number | string;
  end: number | string;
};

export type TechData = {
  name: string;
  category: string;
  logo: StaticImageData;
};
