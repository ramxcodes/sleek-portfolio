import React from 'react';
import CV from '@/components/svgs/CV';
import Calender from '@/components/svgs/Calender';

export const journeyItems = [
  {
    name: 'My Journey',
    description: 'Overview of my learning and career journey.',
    icon: <Calender className="size-4" />,
    href: '/journey',
  },
  {
    name: 'Certificates & Achievements',
    description: 'A curated list of certificates and achievements.',
    icon: <CV className="size-4" />,
    href: '/journey/certificates',
  },
];

export default {
  journeyItems,
};
