import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const journeyDirectory = path.join(process.cwd(), 'src/data/journey');

export function getJourneyContent() {
  try {
    const fullPath = path.join(journeyDirectory, `journey.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  } catch (error) {
    console.error('Error reading journey.mdx', error);
    return null;
  }
}

const journeyLib = { getJourneyContent };

export default journeyLib;
