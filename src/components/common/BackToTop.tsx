'use client';

import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { ArrowUp } from 'lucide-react';
import React from 'react';

import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function BackToTop() {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger haptic feedback on mobile devices
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="hover:cursor-pointer fixed bottom-4 right-10 md:right-20 z-50 bg-white dark:bg-black"
          onClick={handleClick}
        >
          <ArrowUp className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Back to top</p>
      </TooltipContent>
    </Tooltip>
  );
}
