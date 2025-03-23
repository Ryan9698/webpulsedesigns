'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'Contact' },
  ];
  const baseStyles =
    'transition transform hover:text-white hover:scale-105 font-inter ml-4';
  const activeStyles = 'text-blue-600 ';
  return (
    <aside className="relative w-64 h-screen text-gray-300 flex items-center bg-gray-900/40">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-3xl font-bold text-white">
        Webpulse
      </div>
      <ul className="flex flex-col space-y-6">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="text-4xl font-inter p-2">
              <Link
                href={href}
                className={`${baseStyles} ${isActive ? activeStyles : ''}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
