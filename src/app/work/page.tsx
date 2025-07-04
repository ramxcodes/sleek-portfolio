import Container from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/config/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'My projects and work across different technologies and domains.',
};

export default function WorkPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My projects and work across different technologies and domains.
          </p>
        </div>

        <Separator />

        {/* Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Projects
              {projects.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({projects.length}{' '}
                  {projects.length === 1 ? 'project' : 'projects'})
                </span>
              )}
            </h2>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}
