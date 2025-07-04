import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import Skill from "../common/Skill";
import Link from "next/link";
import X from "../svgs/X";
import Website from "../svgs/Website";
import LinkedIn from "../svgs/LinkedIn";
import Github from "../svgs/Github";
import { type Experience, experiences } from "@/config/Experience";
import { Button } from "../ui/button";

export default function Experience() {
  return (
    <Container className="mt-20">
      <p>Featured</p>
      <h2 className="text-2xl font-light text-secondary">Experience</h2>
      <div className="flex flex-col gap-8 mt-4">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <div className="flex flex-col gap-4" key={experience.company}>
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              {/* Left Side */}
              <div className="flex items-center gap-4">
                <Image
                  src={experience.image}
                  alt={experience.company}
                  width={100}
                  height={100}
                  className="size-12 rounded-md"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold">{experience.company}</h3>
                    <Link
                      href={experience.website ?? ""}
                      target="_blank"
                      className="text-neutral-500 size-4"
                    >
                      <Website />
                    </Link>
                    <Link
                      href={experience.x ?? ""}
                      target="_blank"
                      className="text-neutral-500 size-4"
                    >
                      <X />
                    </Link>
                    <Link
                      href={experience.linkedin ?? ""}
                      target="_blank"
                      className="text-neutral-500 size-4"
                    >
                      <LinkedIn />
                    </Link>
                    <Link
                      href={experience.github ?? ""}
                      target="_blank"
                      className="text-neutral-500 size-4"
                    >
                      <Github />
                    </Link>
                    {experience.isCurrent && (
                      <div className="text-xs border-green-300 bg-green-500/10 rounded-md px-2 py-1 flex items-center gap-1">
                        <div className="size-2 bg-green-500 rounded-full"></div>
                        Working
                      </div>
                    )}
                  </div>
                  <p>{experience.position}</p>
                </div>
              </div>
              {/* Right Side */}
              <div className="flex flex-col text-secondary md:text-right">
                <p>
                  {experience.startDate} -{" "}
                  {experience.isCurrent ? "Present" : experience.endDate}
                </p>
                <p>{experience.location}</p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-md font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map(
                  (technology, techIndex: number) => (
                    <Skill
                      key={techIndex}
                      name={technology.name}
                      href={technology.href}
                    >
                      {technology.icon}
                    </Skill>
                  )
                )}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col text-secondary">
              {experience.description.map(
                (description: string, descIndex: number) => (
                  <p key={descIndex}>• {description}</p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="outline">
          <Link href="/experience">Show all experiences </Link>
        </Button>
      </div>
    </Container>
  );
}
