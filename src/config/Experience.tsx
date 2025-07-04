import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Google',
    position: 'Software Engineer',
    location: 'Mountain View, CA',
    image: '/com.avif',
    description: [
      'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software on time.',
      'Collaborated with cross-functional teams to deliver high-quality software on time.',
      'Implemented new features and improved the performance of the application.',
    ],
    startDate: 'Aug 2023',
    endDate: 'Present',
    website: 'https://www.google.com',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
    ],
    x: 'https://x.com/google',
    linkedin: 'https://www.linkedin.com/company/google',
    github: 'https://github.com/google',
  },
  {
    isCurrent: false,
    company: 'Microsoft',
    position: 'Frontend Developer',
    location: 'Seattle, WA',
    image: '/com.avif',
    description: [
      'Built responsive web applications using modern JavaScript frameworks and libraries.',
      'Worked closely with UX/UI designers to implement pixel-perfect designs.',
      'Optimized application performance and improved user experience metrics by 30%.',
    ],
    startDate: 'Jan 2022',
    endDate: 'Jul 2023',
    website: 'https://www.microsoft.com',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
    ],
    x: 'https://x.com/microsoft',
    linkedin: 'https://www.linkedin.com/company/microsoft',
    github: 'https://github.com/microsoft',
  },
];
