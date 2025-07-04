import { projects } from '@/config/Projects';
import {
  ProjectCaseStudy,
  ProjectCaseStudyFrontmatter,
  ProjectCaseStudyPreview,
} from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'src/data/projects');

/**
 * Get all project case study files from the projects directory
 */
export function getProjectCaseStudySlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get project case study by slug with full content
 */
export function getProjectCaseStudyBySlug(
  slug: string,
): ProjectCaseStudy | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate frontmatter
    const frontmatter = data as ProjectCaseStudyFrontmatter;
    if (!frontmatter.title || !frontmatter.description) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading project case study ${slug}:`, error);
    return null;
  }
}

/**
 * Get all project case studies with frontmatter only (for listing)
 */
export function getAllProjectCaseStudies(): ProjectCaseStudyPreview[] {
  const slugs = getProjectCaseStudySlugs();

  const caseStudies = slugs
    .map((slug) => {
      const caseStudy = getProjectCaseStudyBySlug(slug);
      if (!caseStudy) return null;

      return {
        slug: caseStudy.slug,
        frontmatter: caseStudy.frontmatter,
      };
    })
    .filter(
      (caseStudy): caseStudy is ProjectCaseStudyPreview => caseStudy !== null,
    )
    .sort((a, b) => {
      // Sort by featured first, then by title
      if (a.frontmatter.featured && !b.frontmatter.featured) return -1;
      if (!a.frontmatter.featured && b.frontmatter.featured) return 1;
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });

  return caseStudies;
}

/**
 * Get all published project case studies
 */
export function getPublishedProjectCaseStudies(): ProjectCaseStudyPreview[] {
  const allCaseStudies = getAllProjectCaseStudies();
  return allCaseStudies.filter(
    (caseStudy) => caseStudy.frontmatter.isPublished,
  );
}

/**
 * Get project case studies by technology
 */
export function getProjectCaseStudiesByTechnology(
  technology: string,
): ProjectCaseStudyPreview[] {
  const publishedCaseStudies = getPublishedProjectCaseStudies();
  return publishedCaseStudies.filter((caseStudy) =>
    caseStudy.frontmatter.technologies.some(
      (tech) => tech.toLowerCase() === technology.toLowerCase(),
    ),
  );
}

/**
 * Get all unique technologies from published case studies
 */
export function getAllTechnologies(): string[] {
  const publishedCaseStudies = getPublishedProjectCaseStudies();
  const technologiesSet = new Set<string>();

  publishedCaseStudies.forEach((caseStudy) => {
    caseStudy.frontmatter.technologies.forEach((tech) => {
      technologiesSet.add(tech.toLowerCase());
    });
  });

  return Array.from(technologiesSet).sort();
}

/**
 * Get project navigation (next/previous) based on config Projects order
 */
export function getProjectNavigation(currentSlug: string): {
  previous: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
} {
  // Find current project in config
  const currentProjectIndex = projects.findIndex(
    (project) => project.projectDetailsPageSlug === `/projects/${currentSlug}`,
  );

  if (currentProjectIndex === -1) {
    return { previous: null, next: null };
  }

  const previousProject =
    currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null;
  const nextProject =
    currentProjectIndex < projects.length - 1
      ? projects[currentProjectIndex + 1]
      : null;

  return {
    previous: previousProject
      ? {
          title: previousProject.title,
          slug: previousProject.projectDetailsPageSlug.replace(
            '/projects/',
            '',
          ),
        }
      : null,
    next: nextProject
      ? {
          title: nextProject.title,
          slug: nextProject.projectDetailsPageSlug.replace('/projects/', ''),
        }
      : null,
  };
}

/**
 * Get related project case studies based on technologies (excluding the current one)
 */
export function getRelatedProjectCaseStudies(
  currentSlug: string,
  maxProjects = 2,
): ProjectCaseStudyPreview[] {
  const currentCaseStudy = getProjectCaseStudyBySlug(currentSlug);
  if (!currentCaseStudy || !currentCaseStudy.frontmatter.isPublished) {
    return [];
  }

  const allCaseStudies = getPublishedProjectCaseStudies();
  const currentTechnologies = currentCaseStudy.frontmatter.technologies.map(
    (tech) => tech.toLowerCase(),
  );

  // Calculate relevance score based on shared technologies
  const caseStudiesWithScore = allCaseStudies
    .filter((caseStudy) => caseStudy.slug !== currentSlug)
    .map((caseStudy) => {
      const sharedTechnologies = caseStudy.frontmatter.technologies.filter(
        (tech) => currentTechnologies.includes(tech.toLowerCase()),
      );
      return {
        caseStudy,
        score: sharedTechnologies.length,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return caseStudiesWithScore
    .slice(0, maxProjects)
    .map((item) => item.caseStudy);
}
