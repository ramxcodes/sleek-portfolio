import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-10">
      <Hero />
      <Experience />
      <Work />
      <About />
    </Container>
  );
}
