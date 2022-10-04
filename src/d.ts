import { StaticImageData } from 'next/image';

export type Project = {
  name: string;
};

export type ResumeItem = {
  company: string;
  url: string;
  title: string;
  logo: StaticImageData;
  start: string;
  end: string | { label: string; dateTime: number };
};
