import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SkillProps {
  src: string;
  name: string;
  href: string;
}

export default function Skill({ src, name, href }: SkillProps) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline"
    >
      <Image src={src} alt={name} width={20} height={20} />
      <p className="text-sm ml-1 font-bold text-neutral-100">{name}</p>
    </Link>
  );
}
