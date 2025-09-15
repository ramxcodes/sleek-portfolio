'use client';

import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from '@/theme/theme-animations';
import { useTheme } from 'next-themes';
import React from 'react';

import Moon from '../svgs/Moon';
import Sun from '../svgs/Sun';
import { Button } from '../ui/button';

/* eslint-disable react-hooks/exhaustive-deps */

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant;
  start?: AnimationStart;
  showLabel?: boolean;
  url?: string;
}

export default function ThemeSwitch({
  variant = 'circle',
  start = 'top-right',
  showLabel = false,
  url,
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme();
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const styleId = 'theme-transition-styles';

  const updateStyles = React.useCallback((css: string) => {
    if (typeof window === 'undefined') return;

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url);

    updateStyles(animation.css);

    if (typeof window === 'undefined') return;

    const switchTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');

      // Trigger haptic feedback on mobile devices
      if (isMobile()) {
        triggerHaptic('medium');
      }
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [theme, setTheme, isMobile, triggerHaptic]);

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="w-9 p-0 h-9 relative group hover:cursor-pointer"
      name="Theme Toggle Button"
    >
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Theme Toggle </span>
      {showLabel && (
        <>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -top-10">
            {' '}
            variant = {variant}
          </span>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -bottom-10">
            {' '}
            start = {start}
          </span>
        </>
      )}
    </Button>
  );
}
