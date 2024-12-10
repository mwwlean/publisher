import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Publisher",
  description: "A modern publisher website built with Next.js, Supabase, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        style={{ overflowX: 'hidden' }}
      >
        {children}
      </body>
    </html>
  );
}
