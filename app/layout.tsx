import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import Head from 'next/head';
import AosInit from '@/components/AosInit'; // ✅ เพิ่มการ import
import Navbar from '@/components/Navigation' // ✅ components ตัวเล็ก

export const metadata: Metadata = {
  title: 'My App',
  description: 'Portfolio with Tailwind, AOS, GSAP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* CSS ที่ต้องโหลดจาก CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <body style={{ backgroundColor: '#f5f5f5' }}>
        {/* JS จาก CDN */}
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
