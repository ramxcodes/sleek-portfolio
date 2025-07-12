import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import Script from 'next/script';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          {umamiSrc && umamiId && (
            <Script
              src={umamiSrc}
              data-website-id={umamiId}
              strategy="afterInteractive"
              defer
            />
          )}
        </head>
        <body className={`font-hanken-grotesk antialiased`}>
          <ReactLenis root>
            <Navbar />
            {children}
            <OnekoCat />
            <Quote />
            <Footer />
            <ChatBubble />
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
