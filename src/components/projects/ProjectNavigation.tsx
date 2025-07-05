import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'next-view-transitions';

import ArrowLeft from '../svgs/ArrowLeft';
import ArrowUUpRight from '../svgs/ArrowUUpRight';

interface ProjectNavigationProps {
  previous: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Separator />

      <div className="grid gap-4 md:grid-cols-2">
        {/* Previous Project */}
        <div className={`${next ? '' : 'md:col-span-2'}`}>
          {previous ? (
            <Button
              variant="outline"
              asChild
              className="group h-auto w-full justify-start p-4 text-left"
            >
              <Link href={`/projects/${previous.slug}`}>
                <div className="flex items-center gap-3">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Previous Project
                    </div>
                    <div className="font-medium">{previous.title}</div>
                  </div>
                </div>
              </Link>
            </Button>
          ) : (
            <div className="h-16" />
          )}
        </div>

        {/* Next Project */}
        <div className={`${previous ? '' : 'md:col-span-2'}`}>
          {next ? (
            <Button
              variant="outline"
              asChild
              className="group h-auto w-full justify-end p-4 text-right"
            >
              <Link href={`/projects/${next.slug}`}>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Next Project
                    </div>
                    <div className="font-medium">{next.title}</div>
                  </div>
                  <ArrowUUpRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Button>
          ) : (
            <div className="h-16" />
          )}
        </div>
      </div>
    </div>
  );
}
