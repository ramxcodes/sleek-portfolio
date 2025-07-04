"use client";
import React, { useState } from "react";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";
import Website from "../svgs/Website";
import Github from "../svgs/Github";
import PlayCircle from "../svgs/PlayCircle";
import { projects } from "@/config/Projects";
import { Button } from "../ui/button";
import ArrowRight from "../svgs/ArrowRight";

export default function Projects() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const toggleVideo = (projectTitle: string) => {
    setPlayingVideo(playingVideo === projectTitle ? null : projectTitle);
  };

  return (
    <Container className="mt-20">
      <p>Featured</p>
      <h2 className="text-2xl font-light text-secondary">Work</h2>

      {projects.slice(0, 3).map((project) => (
        <div key={project.title} className="flex flex-col gap-8 mt-8">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm text-secondary">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                className="flex items-center justify-center size-6 text-secondary"
                href={project.link}
                target="_blank"
              >
                <Website />
              </Link>
              <Link
                className="flex items-center justify-center size-6 text-secondary"
                href={project.github}
                target="_blank"
              >
                <Github />
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <p className="text-sm text-secondary">Technologies:</p>
              {project.technologies.map((technology, index) => (
                <span key={index} className="text-sm text-secondary size-6">
                  {technology}
                </span>
              ))}
            </div>
            {project.details && (
              <Link
                href={project.detailsLink}
                className="text-sm text-secondary underline underline-offset-4 flex items-center gap-1"
              >
                View Details <ArrowRight className="size-4" />
              </Link>
            )}
          </div>
          <div className="relative rounded-md aspect-video overflow-hidden group">
            {playingVideo === project.title ? (
              <video
                className="w-full h-full object-cover"
                src={project.video}
                autoPlay
                muted
                loop
                controls
              />
            ) : (
              <>
                <Image
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:backdrop-blur-xs">
                  <button
                    onClick={() => toggleVideo(project.title)}
                    className="flex items-center justify-center size-16 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200 group-hover:cursor-pointer"
                  >
                    <PlayCircle />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-8">
        <Button variant="outline">
          <Link href="/work">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
