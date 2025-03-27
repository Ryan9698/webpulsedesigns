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
    'transition transform hover:text-white hover:scale-105 font-dmSans justify-around';
  const activeStyles = 'text-blue-600 ';
  return (
    <>
      <div className=" text-3xl font-bold text-white">Webpulse</div>
      <nav className="w-full bg-gray-900/70 text-gray-300 flex items-center justify-center backdrop-blur-md shadow-lg border-b border-white/10">
        <ul className="flex">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="text-xl p-2">
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
      </nav>
    </>
  );
}
