import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Sleek Portfolio",
  description: "Sleek Portfolio Template by @Ramxcodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-hanken-grotesk antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
