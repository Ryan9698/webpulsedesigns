import {
  inter,
  geistSans,
  geistMono,
  dmSans,
  jakartaSans,
} from '@/utils/fontImports';
import './globals.css';
import { Navbar } from '@/components/layout';
import { ConsentBanner } from '@/components/general';

export const metadata = {
  metadataBase: new URL('https://webpulsedesigns.com'),
  title: {
    default: 'Webpulse Designs | Freelance Web Design Studio',
    template: '%s | Webpulse Designs',
  },
  description:
    'Webpulse Designs builds high-performance websites with sleek visuals, SEO-first structure, and animation polish. Get the digital presence your brand deserves.',
  keywords: [
    'Webpulse Designs',
    'web design studio',
    'freelance web design',
    'Next.js developer',
    'animated websites',
    'SEO-optimized websites',
    'tailwind developer',
    'custom website design',
    'modern websites',
    'branding websites',
    'brevard county web design',
    'florida web design',
    'web design for small businesses',
    'web developer',
    'web designer near me',
    'small business websites',
    'custom web design',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  openGraph: {
    siteName: 'Webpulse Designs',
    title: 'Webpulse Designs | Freelance Web Design Studio',
    description:
      'Get modern, SEO-first websites built with clean code, smooth animations, and conversion-ready layouts. Powered by React, Next.js and Tailwind CSS.',
    url: 'https://webpulsedesigns.com',
    images: [
      {
        url: '/images/webpulselogo3.webp', // ⚠️ NEED TO PLACE ON BLACK BACKGROUND
        width: 1200,
        height: 630,
        alt: 'Webpulse Designs Website Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico', // ⚠️ NEED TO REPLACE SOON
  },
  verification: {
    other: {
      me: ['rcaltabiano90@gmail.com', 'https://www.ryancaltabiano.com'],
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webpulse Designs | Freelance Web Design Studio',
    description:
      'Custom-built websites for freelancers and businesses. Optimized for speed, discoverability, and beauty.',
    images: [
      {
        url: '/og-image.jpg',
        alt: 'Webpulse Designs site preview',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${jakartaSans.variable}`}
    >
      <body className="overflow-x-hidden">
        {/* <Logo /> */}

        <Navbar />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
