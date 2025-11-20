import React from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'QenSalle - Crafting Sustainable Excellence',
  description: 'At QenSalle, we partner with individuals, businesses, and organizations to align mindset, operations, and lifestyle with long-term success.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} bg-ivory font-sans text-slate-dark antialiased selection:bg-accent selection:text-white`}>
        {children}
      </body>
    </html>
  );
}