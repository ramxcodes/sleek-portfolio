import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import Skill from "../common/Skill";
import { Button } from "../ui/button";
import Link from "next/link";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";

export default function Hero() {
  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <Image
        src="/assets/logo.png"
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-yellow-300"
      />
      {/* Text Area */}
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m Ram —{" "}
          <span className="text-[#909092] dark:text-[#909092]">
            A Full Stack web developer.
          </span>
        </h1>
        <div className="flex flex-wrap gap-2 text-lg text-neutral-500">
          <span>I use</span>
          <Skill
            src="/skills/javascript.png"
            name="Javascript"
            href="https://www.javascript.com/"
          />
          <span>&</span>
          <Skill
            src="/skills/typescript.png"
            name="Typescript"
            href="https://www.typescriptlang.org/"
          />
          <span>to build interactive web apps using</span>
          <Skill
            src="/skills/react.png"
            name="React"
            href="https://react.dev/"
          />
          <span>&</span>
          <Skill
            src="/skills/nextjs.png"
            name="Next.js"
            href="https://nextjs.org/"
          />
          .
        </div>
        <div className="flex flex-wrap gap-2 text-lg text-neutral-500">
          <span>For Backend I use</span>
          <Skill src="/skills/bun.png" name="Bun" href="https://bun.sh/" />,
          <Skill
            src="/skills/node.png"
            name="Node"
            href="https://nodejs.org/"
          />,
          <Skill
            src="/skills/mongodb.png"
            name="MongoDB"
            href="https://www.mongodb.com/"
          />,
          <Skill
            src="/skills/postgresql.png"
            name="PostgreSQL"
            href="https://www.postgresql.org/"
          />
          <span>and</span>
          <Skill
            src="/skills/prisma.png"
            name="Prisma"
            href="https://www.prisma.io/"
          />
        </div>
      </div>
      {/* Button */}

      <div className="flex gap-2 mt-4">
        <Button variant="outline">
          <CV />
          <Link href="/resume">Resume</Link>
        </Button>
        <Button variant="default">
          <Chat />
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </Container>
  );
}
