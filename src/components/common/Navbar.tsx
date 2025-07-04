import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

const navItems = [
  {
    label: 'Work',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/',
  },
  {
    label: 'About',
    href: '/',
  },
];

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-50 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <Link href="/">
            <Image
              className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
              src="/assets/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex items-center justify-center gap-4">
            {navItems.map((item) => (
              <Link
                className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
