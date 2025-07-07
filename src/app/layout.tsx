import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
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
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="df3998a2-e0aa-4727-8b75-6af6b3834047"
            strategy="afterInteractive"
            defer
          />
        </head>
        <body className={`font-hanken-grotesk antialiased`}>
          <ReactLenis root>
            <Navbar />
            {children}
            <Quote />
            <Footer />
            <ChatBubble />
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
