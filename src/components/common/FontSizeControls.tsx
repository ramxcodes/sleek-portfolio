'use client';

import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { Minus, Plus, Settings } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';

export default function FontSizeControls() {
  const [fontSize, setFontSize] = useState<number>(16);
  const { triggerHaptic, isMobile } = useHapticFeedback();

  // Load font size from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem('blog-font-size');
    if (savedFontSize) {
      const size = parseInt(savedFontSize, 10);
      setFontSize(size);
      applyFontSize(size);
    }
  }, []);

  // Apply font size to the document
  const applyFontSize = (size: number) => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(
        '--blog-font-size',
        `${size}px`,
      );
    }
  };

  // Save to localStorage and apply
  const updateFontSize = (newSize: number) => {
    const clampedSize = Math.max(12, Math.min(24, newSize));
    setFontSize(clampedSize);
    applyFontSize(clampedSize);
    localStorage.setItem('blog-font-size', clampedSize.toString());
  };

  const handleIncrease = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
    updateFontSize(fontSize + 2);
  };

  const handleDecrease = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
    updateFontSize(fontSize - 2);
  };

  const handleReset = () => {
    if (isMobile()) {
      triggerHaptic('medium');
    }
    updateFontSize(16);
  };

  return (
    <>
      {/* Mobile: Drawer interface */}
      <div className="md:hidden">
        <Drawer>
          {/* Trigger button - bottom left */}
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-background/95 border-border hover:bg-accent fixed bottom-4 left-4 z-50 h-12 w-12 rounded-full border shadow-lg backdrop-blur-sm"
              aria-label="Open font size controls"
            >
              <Settings size={20} />
            </Button>
          </DrawerTrigger>

          {/* Drawer content */}
          <DrawerContent className="max-h-[60vh]">
            <DrawerHeader className="text-center">
              <DrawerTitle>Font Size Controls</DrawerTitle>
            </DrawerHeader>

            <div className="px-4 pb-6">
              <div className="flex flex-col items-center gap-6">
                {/* Font size display */}
                <div className="text-center">
                  <div className="text-foreground mb-2 font-mono text-3xl font-bold">
                    {fontSize}px
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Current font size
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleDecrease}
                    disabled={fontSize <= 12}
                    className="h-12 w-12 p-0"
                    aria-label="Decrease font size"
                  >
                    <Minus size={20} />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleReset}
                    className="hover:bg-accent h-12 px-4 font-mono text-sm whitespace-nowrap"
                    aria-label="Reset font size"
                  >
                    Reset
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleIncrease}
                    disabled={fontSize >= 24}
                    className="h-12 w-12 p-0"
                    aria-label="Increase font size"
                  >
                    <Plus size={20} />
                  </Button>
                </div>

                {/* Size range indicator */}
                <div className="w-full max-w-xs">
                  <div className="text-muted-foreground mb-2 flex justify-between text-xs">
                    <span>12px</span>
                    <span>24px</span>
                  </div>
                  <div className="bg-muted h-2 w-full rounded-full">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((fontSize - 12) / (24 - 12)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop: Original vertical controls */}
      <div className="fixed top-1/2 right-6 z-50 hidden -translate-y-1/2 md:flex">
        <div className="bg-background/95 border-border rounded-lg border p-2 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleIncrease}
                disabled={fontSize >= 24}
                className="h-8 w-8 p-0"
                aria-label="Increase font size"
              >
                <Plus size={14} />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="hover:bg-accent h-10 px-1 font-mono text-xs whitespace-nowrap"
                aria-label="Reset font size"
              >
                {fontSize}px
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleDecrease}
                disabled={fontSize <= 12}
                className="h-8 w-8 p-0"
                aria-label="Decrease font size"
              >
                <Minus size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
