import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Webpulse Designs',
  description:
    'Custom web services for you and your business. Bringing your ideas to life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-l from-gray-950 via-gray-900 to-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
