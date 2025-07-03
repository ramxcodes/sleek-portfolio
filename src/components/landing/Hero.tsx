import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import Skill from "../common/Skill";
import { Button } from "../ui/button";
import Link from "next/link";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";
import JavaScript from "../technologies/JavaScript";
import TypeScript from "../technologies/TypeScript";
import ReactIcon from "../technologies/ReactIcon";
import NextJs from "../technologies/NextJs";
import Bun from "../technologies/Bun";
import NodeJs from "../technologies/NodeJs";
import MongoDB from "../technologies/MongoDB";
import PostgreSQL from "../technologies/PostgreSQL";
import Prisma from "../technologies/Prisma";

export default function Hero() {
  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <Image
        src="/assets/logo.png"
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-yellow-300 dark:bg-blue-300"
      />
      {/* Text Area */}
      <div className="flex flex-col gap-2 mt-8">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m Ram —{" "}
          <span className="text-secondary">A Full Stack web developer.</span>
        </h1>
        <div className="flex flex-wrap gap-2 text-lg text-neutral-500 mt-4">
          <span>I use</span>
          <Skill name="Javascript" href="https://www.javascript.com/">
            <JavaScript />
          </Skill>
          <span>&</span>
          <Skill name="Typescript" href="https://www.typescriptlang.org/">
            <TypeScript />
          </Skill>
          <span>to build interactive web apps using</span>
          <Skill name="React" href="https://react.dev/">
            <ReactIcon />
          </Skill>
          <span>&</span>
          <Skill name="Next.js" href="https://nextjs.org/">
            <NextJs />
          </Skill>
          .
        </div>
        <div className="flex flex-wrap gap-2 text-lg text-neutral-500">
          <span>For Backend I use</span>
          <Skill name="Bun" href="https://bun.sh/">
            <Bun />{" "}
          </Skill>
          ,
          <Skill name="Node" href="https://nodejs.org/">
            <NodeJs />
          </Skill>
          ,
          <Skill name="MongoDB" href="https://www.mongodb.com/">
            <MongoDB />
          </Skill>
          ,
          <Skill name="PostgreSQL" href="https://www.postgresql.org/">
            <PostgreSQL />
          </Skill>
          ,<span>and</span>
          <Skill name="Prisma" href="https://www.prisma.io/">
            <Prisma />
          </Skill>
        </div>
      </div>
      {/* Button */}

      <div className="flex gap-4 mt-8">
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
