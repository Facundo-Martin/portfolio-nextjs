import { Project, ResumeItem, TechData } from './d';
// Project images
import SpumePreview from './assets/SpumePreview.png';
import RundooPreview from './assets/RundooPreview.png';
import CovidTrackerPreview from './assets/CovidTrackerPreview.png';
// Resume images
import culturalcare from './assets/logos/culturalcare.png';
import spume from './assets/logos/spume.png';
import theodinproject from './assets/logos/theodinproject.png';
import logos from './assets/logos/index';

export const techStack: TechData[] = [
  { name: 'TypeScript', category: 'Language', logo: logos.typescript },
  { name: 'JavaScript', category: 'Language', logo: logos.javascript },
  { name: 'CSS3', category: 'Language', logo: logos.css },
  { name: 'HTML', category: 'Language', logo: logos.html },
  { name: 'React', category: 'Framework', logo: logos.reactjs },
  { name: 'Next.js', category: 'Framework', logo: logos.nextjs },
  { name: 'Tailwind', category: 'Framework', logo: logos.tailwind },
  { name: 'GraphQL', category: 'Framework', logo: logos.graphql },
  { name: 'Apollo', category: 'Framework', logo: logos.apollographql },
  { name: 'Git', category: 'Tool', logo: logos.git },
  { name: 'Github', category: 'Tool', logo: logos.github },
  { name: 'Jira', category: 'Tool', logo: logos.jira },
  { name: 'VS Code', category: 'Tool', logo: logos.vscode },
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
