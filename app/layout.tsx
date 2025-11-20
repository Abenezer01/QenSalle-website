import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />

        {/* Tailwind CDN & Config (injected to preserve specific design tokens without build step config access) */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      ivory: '#FAFAFA',
                      accent: {
                        DEFAULT: '#2E7D32', // Green
                        hover: '#1B5E20',   // Darker Green
                      },
                      forest: {
                        DEFAULT: '#0B3D2E',
                        light: '#15523E',
                      },
                      slate: {
                        custom: '#4A5D50', // Green-Gray
                        dark: '#333333',
                      }
                    },
                    fontFamily: {
                      serif: ['"Playfair Display"', 'serif'],
                      sans: ['"Lato"', 'sans-serif'],
                    }
                  }
                }
              }
            `
          }}
        />
      </head>
      <body className="bg-ivory font-sans text-slate-dark antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}