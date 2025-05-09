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
  title: 'Webpulse Designs',
  description:
    'Custom web services for you and your business. Bringing your ideas to life.',
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
