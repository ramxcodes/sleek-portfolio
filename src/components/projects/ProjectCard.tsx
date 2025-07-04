'use client';

import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import ArrowRight from '../svgs/ArrowRight';
import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [playingVideo, setPlayingVideo] = useState<boolean>(false);

  const toggleVideo = () => {
    setPlayingVideo(!playingVideo);
  };

  return (
    <div className="flex flex-col gap-8 rounded-lg border border-muted p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-secondary text-sm">{project.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="text-secondary flex size-6 items-center justify-center"
            href={project.link}
            target="_blank"
          >
            <Website />
          </Link>
          <Link
            className="text-secondary flex size-6 items-center justify-center"
            href={project.github}
            target="_blank"
          >
            <Github />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <p className="text-secondary text-sm">Technologies:</p>
          {project.technologies.map((technology, index) => (
            <span key={index} className="text-secondary size-6 text-sm">
              {technology}
            </span>
          ))}
        </div>
        {project.details && (
          <Link
            href={project.detailsLink}
            className="text-secondary flex items-center gap-1 text-sm underline underline-offset-4"
          >
            View Details <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
      <div className="group relative aspect-video overflow-hidden rounded-md">
        {playingVideo ? (
          <video
            className="h-full w-full object-cover"
            src={project.video}
            autoPlay
            muted
            loop
            controls
          />
        ) : (
          <>
            <Image
              className="h-full w-full object-cover"
              src={project.image}
              alt={project.title}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:backdrop-blur-xs">
              <button
                onClick={toggleVideo}
                className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 group-hover:cursor-pointer hover:bg-white/30"
              >
                <PlayCircle />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
