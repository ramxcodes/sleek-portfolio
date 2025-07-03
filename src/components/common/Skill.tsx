import React from "react";
import Link from "next/link";

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline"
    >
      <div className="w-4 h-4 flex-shrink-0">{children}</div>
      <p className="text-sm ml-1 font-bold text-neutral-100">{name}</p>
    </Link>
  );
}
