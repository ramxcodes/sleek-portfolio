import { type Project } from '@/types/project';
import React from 'react';

import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
