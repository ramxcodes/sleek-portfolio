import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export default { getJourneyContent };