import { BlogComponents } from '@/components/blog/BlogComponents';
import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { getJourneyContent } from '@/lib/journey';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/journey'),
  robots: { index: true, follow: true },
};

export default function JourneyPage() {
  const data = getJourneyContent();

  if (!data) {
    return (
      <Container className="py-16">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Journey
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
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
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Journey
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A timeline of my learning, projects, and milestones.
          </p>
        </div>
        <Separator />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={data.content} components={BlogComponents} />
        </div>
      </div>
    </Container>
  );
}
