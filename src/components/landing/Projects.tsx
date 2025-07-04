'use client';

import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import { ProjectCard } from '../projects/ProjectCard';
import { Button } from '../ui/button';

export default function Projects() {
  return (
    <Container className="mt-20">
      <p>Featured</p>
      <h2 className="text-secondary text-2xl font-light">Work</h2>

      <div className="mt-8 flex flex-col gap-8">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
