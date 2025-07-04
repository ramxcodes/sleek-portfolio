import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { about, mySkills } from "@/config/About";

export default function About() {
  return (
    <Container className="mt-20">
      <p>About</p>
      {/* About me */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Image
          src="/assets/logo.png"
          alt="About"
          width={100}
          height={100}
          className="rounded-md size-60 border-2 border-secondary bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary font-bold mt-8">Skills</p>
          <div className="flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="size-6 mt-4">{skill}</div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
