import Container from '@/components/common/Container';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { Separator } from '@/components/ui/separator';
import { experiences } from '@/config/Experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience',
  description:
    'My professional journey and work experiences across different companies and roles.',
};

export default function WorkExperiencePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Work Experience
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My work experiences across different companies and roles.
          </p>
        </div>

        <Separator />

        {/* Work Experiences */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Experiences
              {experiences.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({experiences.length}{' '}
                  {experiences.length === 1 ? 'experience' : 'experiences'})
                </span>
              )}
            </h2>
          </div>

          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </Container>
  );
}
