import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import Skill from "../common/Skill";
import { Button } from "../ui/button";
import Link from "next/link";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";
import {
  heroConfig,
  socialLinks,
  skillComponents,
  parseTemplate,
} from "@/config/Hero";

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="text-secondary">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return <span key={part.key}>{part.text}</span>;
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-yellow-300 dark:bg-blue-300"
      />

      {/* Text Area */}
      <div className="flex flex-col gap-2 mt-8">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m {name} — <span className="text-secondary">{title}</span>
        </h1>

        <div className="flex flex-wrap gap-2 text-lg text-neutral-500 mt-4">
          {renderDescription()}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="flex gap-2 mt-8">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="flex items-center gap-2 text-secondary"
          >
            <span className="size-6">{link.icon}</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
