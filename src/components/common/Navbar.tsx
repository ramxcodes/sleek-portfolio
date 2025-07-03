import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const navItems = [
  {
    label: "Work",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <Container className="py-4 sticky top-0 z-50 rounded-md  backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <Image
            className="w-12 h-12 rounded-md border border-gray-200 bg-black dark:bg-white"
            src="/assets/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <div className="flex items-center justify-center gap-4">
            {navItems.map((item) => (
              <Link
                className="hover:underline hover:underline-offset-4 hover:decoration-2 transition-all duration-300 ease-in-out"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
