import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import CV from '../svgs/CV';
import Calender from '../svgs/Calender';
import { Card } from '../ui/card';
import { journeyItems } from '@/config/Journey';

export default function Journey() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Journey" heading="Journey" />
      <div className="flex flex-col gap-4 mt-8">
        {journeyItems.map((item) => (
          <Link className="group" href={item.href} key={item.name}>
            <Card className="px-4 py-2 flex flex-row items-center gap-4 justify-between">
              <div className="p-2 bg-muted rounded-md flex items-center justify-center">
                {(() => {
                  const Icon = item.icon as React.ComponentType<{ className?: string }>;
                  return <Icon className="size-4" />;
                })()}
              </div>
              <div className="flex flex-col w-full">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ArrowRight className="size-4 hidden group-hover:block transition-all duration-300" />
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}