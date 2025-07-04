import Link from 'next/link';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-700 bg-neutral-800 p-1 text-sm leading-4 text-neutral-100 no-underline"
    >
      <div className="h-4 w-4 flex-shrink-0">{children}</div>
      <p className="ml-1 text-sm font-bold text-neutral-100">{name}</p>
    </Link>
  );
}
