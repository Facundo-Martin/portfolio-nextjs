import { Project, ResumeItem } from './d';
// Project images
import SpumePreview from './assets/SpumePreview.png';
import RundooPreview from './assets/RundooPreview.png';
// Resume images
import culturalcare from './assets/logos/culturalcare.png';
import spume from './assets/logos/spume.png';
import theodinproject from './assets/logos/theodinproject.png';
import logos from './assets/logos/index';

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
export const projects: Project[] = [
  {
    name: 'Spume App',
    preview: SpumePreview,
    url: 'https://app.spume.io/',
    description: 'Decentralized NFT marketplace where people can mint and trade NFTs by logging in with their MetaMask wallet.',
    techStack: ['Next.js', 'GraphQL', 'TailwindCSS'],
    website: 'https://app.spume.io',
    slug: 'spume-app',
    features: ['Built with blabla', 'Implemented aklsdhjklajs asdklfjsd klajslad kj', 'asjkdfhsjka sdkfjh sdfjkhasdjk'],
  },
  {
    name: 'Startup Landing Page',
    preview: RundooPreview,
    url: 'https://rundoo-facundo-martin.vercel.app/',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit doloribus illo ea, aut id repellat obcaecati? Omnis nesciunt sunt aut, numquam dolores ',
    techStack: ['Next.js', 'GraphQL', 'TailwindCSS'],
    slug: 'startup-landing-page',
    website: 'https://app.spume.io/',
    github: 'https://app.spume.io',
    features: ['Built with blabla', 'Implemented aklsdhjklajs asdklfjsd klajslad kj', 'asjkdfhsjka sdkfjh sdfjkhasdjk'],
  },
  {
    name: 'Spume App',
    preview: SpumePreview,
    url: 'https://app.spume.io/',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit doloribus illo ea, aut id repellat obcaecati? Omnis nesciunt sunt aut, numquam dolores ',

    techStack: ['Next.js', 'GraphQL', 'TailwindCSS'],
    slug: 'spume-app',
    website: 'https://app.spume.io',
    github: 'https://app.spume.io',
    features: ['Built with blabla', 'Implemented aklsdhjklajs asdklfjsd klajslad kj', 'asjkdfhsjka sdkfjh sdfjkhasdjk'],
  },
];

export const techStack = [
  { name: 'TypeScript', category: 'Language', logo: logos.typescript },
  { name: 'JavaScript', category: 'Language', logo: logos.javascript },
  { name: 'CSS3', category: 'Language', logo: logos.css },
  { name: 'HTML', category: 'Language', logo: logos.html },
  { name: 'React', category: 'Framework', logo: logos.reactjs },
  { name: 'Next', category: 'Framework', logo: logos.nextjs },
  { name: 'Tailwind CSS', category: 'Framework', logo: logos.tailwind },
  { name: 'GraphQL', category: 'Framework', logo: logos.graphql },
  { name: 'Apollo', category: 'Framework', logo: logos.apollographql },
  { name: 'Git', category: 'Tool', logo: logos.git },
  { name: 'Github', category: 'Tool', logo: logos.github },
  { name: 'Jira', category: 'Tool', logo: logos.jira },
  { name: 'VS Code', category: 'Tool', logo: logos.vscode },
];
