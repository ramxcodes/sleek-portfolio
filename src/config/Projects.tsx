import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'NotesBuddy',
    description: 'A simple note-taking app built with React and TypeScript',
    image: '/project/notesbuddy.png',
    video: '/project/notesbuddy.mp4',
    link: 'https://notesbuddy.in',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'NotesMuddy',
    description: 'A simple note-taking app built with React and TypeScript',
    image: '/project/notesbuddy.png',
    video: '/project/notesbuddy.mp4',
    link: 'https://notesbuddy.in',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesmuddy',
    isWorking: false,
  },
];
