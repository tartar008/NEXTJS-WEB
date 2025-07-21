import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import AosInit from '@/components/AosInit';
import Navbar from '@/components/navigation';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Portfolio with Tailwind, AOS, GSAP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: '#f5f5f5' }}>
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.11.1/dist/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/aos@2.3.4/dist/aos.js"
          strategy="beforeInteractive"
        />
        <AosInit />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
