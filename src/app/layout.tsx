import Navbar from '@/components/common/Navbar';
import { Quote } from '@/components/common/Quote';
import ReactLenis from 'lenis/react';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

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
            <Quote />
            <Footer />
            <BackToTop />
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
