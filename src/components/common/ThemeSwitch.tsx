'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Moon from '../svgs/Moon';
import Sun from '../svgs/Sun';

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      const existingTransition = document.querySelector('[data-theme-transition]');
      if (existingTransition) {
        existingTransition.remove();
      }
    };
  }, []);

  const toggleTheme = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isAnimating) return;
      setIsAnimating(true);
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const backgroundColor = resolvedTheme === 'light' ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)';

      const transition = document.createElement('div');
      transition.setAttribute('data-theme-transition', 'true');
      transition.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
        background: ${backgroundColor};
        clip-path: circle(0px at ${x}px ${y}px);
        transition: clip-path 500ms cubic-bezier(0.4, 0, 0.2, 1);
      `;
      document.body.appendChild(transition);
      requestAnimationFrame(() => {
        const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 1.2;
        transition.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
      });

      const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
      setTimeout(() => setTheme(newTheme), 250);

      setTimeout(() => {
        transition.remove();
        setIsAnimating(false);
      }, 500);
    },
    [resolvedTheme, isAnimating, setTheme],
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
          resolvedTheme === 'dark'
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-5 scale-50 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          resolvedTheme === 'light'
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-5 scale-50 opacity-0'
        }`}
      />
    </button>
  );
}