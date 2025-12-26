'use client';

import type { AnalyticsEvent } from '@/types/analytics';
import { useCallback } from 'react';

declare global {
  interface Window {
    umami?: {
      track: (
        event: AnalyticsEvent['name'],
        data: AnalyticsEvent['data'],
      ) => void;
    };
  }
}

/**
 * Hook for tracking events with Umami Analytics
 * @example Usage
 * ```tsx
 * function MyComponent() {
 *   const { trackEvent } = useUmami()
 *
 *   const handleClick = () => {
 *     trackEvent({
 *       name: 'button_click',
 *       data: {
 *         buttonId: 'hero_cta',
 *         section: 'hero'
 *       }
 *     })
 *   }
 *   return <button onClick={handleClick}>Click Me</button>
 * }
 * ```
 */
export function useUmami() {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    try {
      if (typeof window !== 'undefined' && window.umami) {
        window.umami.track(event.name, event.data);
      }
    } catch (error) {
      console.error('Error tracking Umami event:', error);
    }
  }, []);

  return { trackEvent };
}
