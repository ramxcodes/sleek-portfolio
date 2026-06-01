'use client';

import { useUmami } from '@/hooks/use-umami';
import type { AnalyticsEvent } from '@/types/analytics';
import { Link } from 'next-view-transitions';
import * as React from 'react';

type LinkProps = React.ComponentProps<typeof Link>;

/**
 * Drop-in replacement for `next-view-transitions`' `Link` that fires an Umami
 * event on click. Mirrors the `track` prop on the `Button` component so any
 * link across the site — including those rendered inside server components —
 * can opt into analytics with a single, type-safe prop, e.g.
 * `track={{ name: 'external_link_click', data: { url, text, location } }}`.
 */
export function TrackedLink({
  track,
  onClick,
  ...props
}: LinkProps & { track?: AnalyticsEvent }) {
  const { trackEvent } = useUmami();

  return (
    <Link
      {...props}
      onClick={(event) => {
        if (track) {
          trackEvent(track);
        }
        onClick?.(event);
      }}
    />
  );
}
