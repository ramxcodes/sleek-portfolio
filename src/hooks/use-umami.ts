'use client';

import type { AnalyticsEvent } from '@/types/analytics';
import { useCallback } from 'react';

declare global {
  interface Window {
    umami?: {
      track: (
        eventName: string,
        eventData?: Record<string, string | number | boolean>,
      ) => void;
    };
  }
}

/**
 * Hook for tracking events with Umami Analytics.
 *
 * `trackEvent` is type-safe: the `data` payload is constrained by the `name`
 * via the `AnalyticsEvent` discriminated union, so the wrong payload for an
 * event is a compile error. Calls are no-ops (not errors) when the Umami
 * script hasn't loaded yet — e.g. blocked by an ad blocker or still loading.
 *
 * @example
 * ```tsx
 * const { trackEvent } = useUmami();
 *
 * trackEvent({
 *   name: 'button_click',
 *   data: { buttonId: 'hero_cta', section: 'hero' },
 * });
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
