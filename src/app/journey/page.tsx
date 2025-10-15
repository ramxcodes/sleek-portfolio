import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';
import { getJourneyContent } from '@/lib/journey';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { BlogComponents } from '@/components/blog/BlogComponents';

export const metadata: Metadata = {
  ...getMetadata('/journey'),
  robots: { index: true, follow: true },
};

export default function JourneyPage() {
  const data = getJourneyContent();

  if (!data) {
    return (
      <Container className="py-8 md:py-16">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Journey
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground px-4">
              No journey content found. Add `src/data/journey/journey.mdx` to
              display content here.
            </p>
          </div>
          <Separator />
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8 md:py-16">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Journey
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground px-4">
            A timeline of my learning, projects, and milestones.
          </p>
        </div>
        <Separator />

        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <MDXRemote source={data.content} components={BlogComponents} />
        </div>
      </div>
    </Container>
  );
}