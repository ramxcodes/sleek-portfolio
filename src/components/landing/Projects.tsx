'use client';

import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { Button } from '../ui/button';

export default function Projects() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Work" />

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
