import { Project, ResumeItem, TechData } from './d';
// Project images
import SpumePreview from './assets/SpumePreview.webp';
import FreactPreview from './assets/FreactPreview.png';
import RundooPreview from './assets/RundooPreview.webp';
import CovidTrackerPreview from './assets/CovidTrackerPreview.webp';
// Resume images
import culturalcare from './assets/logos/culturalcare.png';
import spume from './assets/logos/spume.png';
import theodinproject from './assets/logos/theodinproject.png';
import logos from './assets/logos/index';

export const techStack: TechData[] = [
  { name: 'TypeScript', category: 'Language', logo: logos.typescript, url: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', category: 'Language', logo: logos.javascript, url: 'https://www.javascript.com/' },
  { name: 'CSS3', category: 'Language', logo: logos.css, url: 'https://www.w3.org/Style/CSS/' },
  { name: 'HTML', category: 'Language', logo: logos.html, url: 'https://html.com/' },
  { name: 'React', category: 'Framework', logo: logos.reactjs, url: 'https://reactjs.org/' },
  { name: 'Next.js', category: 'Framework', logo: logos.nextjs, url: 'https://nextjs.org/' },
  { name: 'Tailwind', category: 'Framework', logo: logos.tailwind, url: 'https://tailwindcss.com/' },
  { name: 'GraphQL', category: 'Framework', logo: logos.graphql, url: 'https://graphql.org/' },
  { name: 'Apollo', category: 'Framework', logo: logos.apollographql, url: 'https://www.apollographql.com/' },
  { name: 'Git', category: 'Tool', logo: logos.git, url: 'https://git-scm.com/' },
  { name: 'Github', category: 'Tool', logo: logos.github, url: 'https://github.com/' },
  { name: 'Jira', category: 'Tool', logo: logos.jira, url: 'https://www.atlassian.com/software/jira' },
  { name: 'Material UI', category: 'Others', logo: logos.mui, url: 'https://mui.com/' },
  { name: 'APIs', category: 'Others', logo: logos.api, url: 'https://aws.amazon.com/what-is/api/' },
  { name: 'Chart.js', category: 'Others', logo: logos.chartjs, url: 'https://www.chartjs.org/' },
];

export const projects: Project[] = [
  {
    name: 'Spume App',
    slug: 'spume-app',
    preview: SpumePreview,
    website: 'https://app.spume.io',
    description: 'Decentralized NFT marketplace where people can mint and trade NFTs by logging in with their MetaMask wallet.',
    description2: "Explore your favorite collections on Spume's supported chains and start trading your favorite NFTs. ",
    features: ['Smart wallet sign in and account creation', 'Endless scrolling for collection items', 'Recently added cross-chain support'],
    techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Tailwind'],
  },
  {
    name: 'Freact Docs',
    slug: 'freact-docs',
    preview: FreactPreview,
    website: 'https://freact-docs.vercel.app/category/production-react',
    description: 'A Fronte End + React documentation site designed to take React projects from zero to production.',
    description2: 'Detailed guides on topics ranging from git hooks and  CI/CD pipelines to SEO optimization and accesibility.',
    features: ['Linter, formatter, and Git Hooks configurations', 'CI/CD pipelines with Github Actions', 'SEO Optimization & Accessibility'],
    techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Tailwind'],
  },
  {
    name: 'Startup Landing Page',
    slug: 'startup-landing-page',
    preview: RundooPreview,
    website: 'https://rundoo-facundo-martin.vercel.app/',
    github: 'https://github.com/Facundo-Martin/Rundoo-Landing-Page',
    description: 'Simple and elegant landing page for any startup looking to showcase their app, team and the solutions they offer.',
    description2: 'Improve your online presence and let people know about the services you offer and what your company stands for.',
    features: ['Fully responsive and fast website', 'Integrated Google Maps API for directions', 'Implemented Headless UI and animations'],
    techStack: ['Next.js', 'React', 'Tailwind', 'Google Maps API'],
  },
  {
    name: 'COVID-19 Tracker',
    slug: 'covid-tracker',
    preview: CovidTrackerPreview,
    website: 'https://react-covid-tracker2-db6b3.web.app/',
    github: 'https://github.com/Facundo-Martin/react-covid-tracker2',
    description: 'React app with data visualization tools for users to stay up to date with the latest covid statistics and news.',
    description2: 'Filter and compare the latest covid statistics by country and browse the most up to date articles on the topic.',
    features: ['Data Visualization with Chart.js and Leaflet', 'API integration for statistics and articles', 'Responsive design with Material UI'],
    techStack: ['React', 'Chart.js', 'APIs', 'Material UI'],
  },
];

export const resume: ResumeItem[] = [
  {
    company: 'Spume',
    url: 'https://spume.io/',
    title: 'React Developer',
    logo: spume,
    start: 2022,
    end: 'Present',
  },
  {
    company: 'Frontend Development',
    title: 'The Odin Project | Self-taught',
    url: 'https://www.theodinproject.com/',
    logo: theodinproject,
    start: 2021,
    end: 2022,
  },
  {
    company: 'Cultural Care',
    url: 'https://culturalcare.com/',
    title: 'Au Pair',
    logo: culturalcare,
    start: 2020,
    end: 2022,
  },
];
