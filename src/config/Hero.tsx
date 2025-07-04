/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */

import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";

// Technology Components
import TypeScript from "@/components/technologies/TypeScript";
import ReactIcon from "@/components/technologies/ReactIcon";
import NextJs from "@/components/technologies/NextJs";
import Bun from "@/components/technologies/Bun";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import NodeJs from "@/components/technologies/NodeJs";
import MongoDB from "@/components/technologies/MongoDB";
import Prisma from "@/components/technologies/Prisma";
import JavaScript from "@/components/technologies/JavaScript";

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: "Ram",
  title: "A Full Stack web developer.",
  avatar: "/assets/logo.png",

  // Skills Configuration
  skills: [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "Bun",
      href: "https://bun.sh/",
      component: "Bun",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  // Description Configuration
  description: {
    template:
      "I use {skills:0} to build interactive web apps using {skills:1}, {skills:2}, {skills:3} and {skills:4} With a focus on **UI/UX** design. Enthusiastic about **Three.js**, driven by a keen eye for design.",
  },

  // Buttons Configuration
  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume",
      icon: "CV",
    },
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/ramxcodes",
    icon: <X />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ramxcodes/",
    icon: <LinkedIn />,
  },
  {
    name: "Github",
    href: "https://github.com/ramxcodes",
    icon: <Github />,
  },
  {
    name: "Email",
    href: "mailto:ramxcodes@gmail.com",
    icon: <Mail />,
  },
];

// Utility function to parse template string with skills and bold text
export const parseTemplate = (
  template: string,
  skills: typeof heroConfig.skills
) => {
  // First, split by skill references {skills:X}
  const parts = template.split(/(\{skills:\d+\})/);

  return parts
    .map((part, index) => {
      // Check if this part is a skill reference
      const skillMatch = part.match(/\{skills:(\d+)\}/);
      if (skillMatch) {
        const skillIndex = parseInt(skillMatch[1]);
        const skill = skills[skillIndex];
        if (skill) {
          return {
            type: "skill",
            skill: skill,
            key: index,
          };
        }
      }

      // Parse bold text in this part
      const boldParts = part.split(/(\*\*.*?\*\*)/);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
          return {
            type: "bold",
            text: boldPart.slice(2, -2),
            key: `${index}-${boldIndex}`,
          };
        }
        return {
          type: "text",
          text: boldPart,
          key: `${index}-${boldIndex}`,
        };
      });
    })
    .flat();
};

// Legacy function - kept for backwards compatibility
export const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return {
        text: part.slice(2, -2),
        bold: true,
        key: index,
      };
    }
    return {
      text: part,
      bold: false,
      key: index,
    };
  });
};
