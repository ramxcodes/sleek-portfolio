import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/journey/certificates'),
  robots: { index: true, follow: true },
};

export default function CertificatesPage() {
  return (
    <Container className="py-8 md:py-16">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Certificates & Achievements
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground px-4">
            A curated list of my certificates and notable achievements.
          </p>
        </div>
        <Separator />

        <div className="space-y-8 md:space-y-12">
          <p className="text-sm text-muted-foreground">
            Add certificates and achievements data via `src/config/Journey.tsx`.
          </p>
        </div>
      </div>
    </Container>
  );
}
