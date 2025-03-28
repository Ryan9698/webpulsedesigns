import {
  inter,
  geistSans,
  geistMono,
  dmSans,
  jakartaSans,
} from './utils/fontImports';
import './globals.css';
import Navbar from '@/app/components/Navbar/Navbar';

export const metadata = {
  title: 'Webpulse Designs',
  description:
    'Custom web services for you and your business. Bringing your ideas to life.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${jakartaSans.variable}`}
    >
      <body className="bg-gradient-to-l from-gray-950 via-gray-900 to-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
