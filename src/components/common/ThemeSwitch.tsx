'use client';

import React, { useCallback, useEffect, useState } from 'react';

import Moon from '../svgs/Moon';
import Sun from '../svgs/Sun';

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');

    setTheme(savedTheme as 'light' | 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isAnimating) return;

      setIsAnimating(true);
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const transition = document.createElement('div');
      transition.style.position = 'fixed';
      transition.style.inset = '0';
      transition.style.zIndex = '30';
      transition.style.pointerEvents = 'none';
      transition.style.backgroundColor =
        theme === 'light' ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)';
      transition.style.clipPath = 'circle(0% at var(--x) var(--y))';
      transition.style.transition = 'clip-path 600ms ease-in-out';
      transition.style.setProperty('--x', `${x}px`);
      transition.style.setProperty('--y', `${y}px`);

      document.body.appendChild(transition);

      requestAnimationFrame(() => {
        transition.style.clipPath = 'circle(150% at var(--x) var(--y))';
      });

      await new Promise((resolve) => setTimeout(resolve, 300));

      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark');

      await new Promise((resolve) => setTimeout(resolve, 300));
      transition.remove();
      setIsAnimating(false);
    },
    [theme, isAnimating],
  );

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      disabled={isAnimating}
      className={`relative flex h-8 w-8 items-center justify-center overflow-hidden transition-opacity hover:opacity-80 ${className} hover:cursor-pointer z-50`}
      aria-label="Toggle theme"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'dark'
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-5 scale-50 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'light'
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-5 scale-50 opacity-0'
        }`}
      />
    </button>
  );
}
