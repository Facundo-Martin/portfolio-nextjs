import { StaticImageData } from 'next/image';

export type Project = {
  name: string;
  preview: StaticImageData;
  description: string;
  description2: string;
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
  url: string;
};

export type Author = {
  avatar: {
    url: string;
  };
  bio: string;
  id: string;
  name: string;
};
export type Category = {
  name: string;
  slug: string;
};

export type Post = {
  node: {
    authors: Author[];
    categories: Category[];
    createdAt: string;
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
  };
};
