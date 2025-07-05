import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'NotesBuddy',
    description:
      'A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools',
    image: '/project/notesbuddy.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://notesbuddy.in',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
      <NodeJs key="nodejs" />,
      <MongoDB key="mongodb" />,
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'Appwrite MCP Server',
    description:
      'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    image: '/project/appwrite.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://mcp.ramx.in/',
    technologies: [
      <TypeScript key="typescript" />,
      <NodeJs key="nodejs" />,
      <NextJs key="nextjs" />,
    ],
    github: 'https://github.com/ramxcodes/appwrite-mcp-server',
    live: 'https://mcp.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'Syncify',
    description:
      'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
    image: '/project/syncify.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: 'https://syncify.rocks',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
      <NodeJs key="nodejs" />,
    ],
    github: 'https://github.com/ramxcodes/syncify',
    live: 'https://syncify.rocks',
    details: true,
    projectDetailsPageSlug: '/projects/syncify',
    isWorking: true,
  },
  {
    title: 'Pasandida Aurat',
    description:
      'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    image: '/project/pasandida.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://www.pasandidaurat.com/',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
      <NodeJs key="nodejs" />,
    ],
    github: 'https://github.com/ramxcodes/pasandida-aurat',
    live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/pasandida-aurat',
    isWorking: false, // Currently in development
  },
  {
    title: 'The Quest',
    description:
      'Personal challenge tracker for completing 500 DSA problems, earning ₹300,000, and improving fitness within 6 months',
    image: '/project/quest.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
    link: 'https://quest.ramx.in/',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/the-quest',
    live: 'https://quest.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/the-quest',
    isWorking: true,
  },
  {
    title: 'FestX',
    description:
      "Comprehensive event management platform for college festivals and hackathons built for NMIMS'24 Hackathon",
    image: '/project/festx.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
    link: 'https://fest-x.ramx.in/',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/fest-x',
    live: 'https://fest-x.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/fest-x',
    isWorking: true,
  },
  {
    title: "I'm a chill guy",
    description:
      'AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features',
    image: '/project/chillguy.png',
    link: 'https://chillguy.ramx.in',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
      <NodeJs key="nodejs" />,
    ],
    github: 'https://github.com/ramxcodes/chill-guy',
    live: 'https://chillguy.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/chill-guy',
    isWorking: true,
  },
  {
    title: "Ram's Space",
    description:
      'Personal poetry and blog platform featuring emotional stories, poems, and creative writing with dark/light theme support',
    image: '/project/ramspace.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
    link: 'https://blog.ramx.in/',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/poems-blog',
    live: 'https://blog.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/poems-blog',
    isWorking: true,
  },
  {
    title: 'Intent JS',
    description:
      'Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation',
    image: '/project/intent.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
    link: 'https://intent-js.ramx.in',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/intent-js',
    live: 'https://intent-js.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/intent-js',
    isWorking: true,
  },
  {
    title: 'Moonstone 2K25',
    description:
      "Official website for Medicaps University's premier annual college festival with event management and registration",
    image: '/project/moonstone.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
    link: 'https://moonstone.ramx.in/',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/moonstone-fest',
    live: 'https://moonstone.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/moonstone-fest',
    isWorking: true,
  },
  {
    title: 'Valorant Remastered',
    description:
      'Gaming website with immersive 3D animations, agent showcases, and performance-optimized Valorant experience',
    image: '/project/valorant.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/valorant.mp4',
    link: 'https://valorant.ramx.in',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/valorant-remastered',
    live: 'https://valorant.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/valorant-remastered',
    isWorking: true,
  },
  {
    title: 'That Startup',
    description:
      'Startup listing and pitching platform where entrepreneurs can submit ideas, vote on concepts, and connect with founders',
    image: '/project/that-startup.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/that-startup.mp4',
    link: 'https://that-startup.ramx.in/',
    technologies: [
      <NextJs key="nextjs" />,
      <TypeScript key="typescript" />,
      <ReactIcon key="react" />,
    ],
    github: 'https://github.com/ramxcodes/that-startup',
    live: 'https://that-startup.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/that-startup',
    isWorking: true,
  },
];
