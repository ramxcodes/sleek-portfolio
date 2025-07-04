import { type Experience, experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import { ExperienceCard } from '../experience/ExperienceCard';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container className="mt-20">
      <p>Featured</p>
      <h2 className="text-secondary text-2xl font-light">Experience</h2>
      <div className="mt-4 flex flex-col gap-8">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
