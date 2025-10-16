import React from 'react';
import CV from '@/components/svgs/CV';
import Calender from '@/components/svgs/Calender';

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: 'My Journey',
    description: 'Overview of my learning and career journey.',
    icon: Calender,
    href: '/journey',
  },
  {
    name: 'Certificates & Achievements',
    description: 'A curated list of certificates and achievements.',
    icon: CV,
    href: '/journey/certificates',
  },
];

export default {
  journeyItems,
};