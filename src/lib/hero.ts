import { heroConfig } from '@/config/Hero';

export const parseTemplate = (
  template: string,
  skills: typeof heroConfig.skills,
) => {
  const parts = template.split(/(\{skills:\d+\})/);

  return parts
    .map((part, index) => {
      const skillMatch = part.match(/\{skills:(\d+)\}/);
      if (skillMatch) {
        const skillIndex = parseInt(skillMatch[1]);
        const skill = skills[skillIndex];
        if (skill) {
          return {
            type: 'skill',
            skill: skill,
            key: index,
          };
        }
      }

      const boldParts = part.split(/(<b>.*?<\/b>)/);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith('<b>') && boldPart.endsWith('</b>')) {
          return {
            type: 'bold',
            text: boldPart.slice(3, -4),
            key: `${index}-${boldIndex}`,
          };
        }
        return {
          type: 'text',
          text: boldPart,
          key: `${index}-${boldIndex}`,
        };
      });
    })
    .flat();
};

export const parseBoldText = (text: string) => {
  const parts = text.split(/(<b>.*?<\/b>)/);
  return parts.map((part, index) => {
    if (part.startsWith('<b>') && part.endsWith('</b>')) {
      return {
        text: part.slice(3, -4),
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
