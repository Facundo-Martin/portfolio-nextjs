import { Project, ResumeItem } from './d';
// Local files
import culturalcare from '../../assets/logos/culturalcare.png';
import spume from '../../assets/logos/spume.png';
import theodinproject from '../../assets/logos/theodinproject.png';

export const resume: ResumeItem[] = [
  {
    company: 'Spume',
    url: 'https://spume.io/',
    title: 'React Developer',
    logo: spume,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Frontend Development',
    title: 'The Odin Project | Self-taught',
    url: 'https://www.theodinproject.com/',
    logo: theodinproject,
    start: '2021',
    end: '2022',
  },
  {
    company: 'Cultural Care',
    url: 'https://culturalcare.com/',
    title: 'Au Pair',
    logo: culturalcare,
    start: '2020',
    end: '2022',
  },
];
export const projects: Project[] = [{ name: 'My Project' }, { name: 'Another Project' }];
