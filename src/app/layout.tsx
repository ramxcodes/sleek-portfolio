import Navbar from '@/components/common/Navbar';
import ReactLenis from 'lenis/react';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata: Metadata = {
  title: 'Sleek Portfolio',
  description: 'Sleek Portfolio Template by @Ramxcodes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`font-hanken-grotesk antialiased`}>
          <ReactLenis root>
            <Navbar />
            {children}
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
