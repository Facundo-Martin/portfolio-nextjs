import { StaticImageData } from 'next/image';

export type Project = {
  name: string;
};

export type ResumeItem = {
  company: string;
  url: string;
  title: string;
  logo: StaticImageData;
  start: number | string;
  end: number | string;
};
