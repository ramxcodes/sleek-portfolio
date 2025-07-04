import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const projects = [
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
    detailsLink: '/projects/notesbuddy',
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
    detailsLink: '/projects/notesmuddy',
  },
];
