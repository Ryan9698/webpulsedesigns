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
    'transition transform hover:text-white hover:scale-105 font-jakartaSans text-lg';
  const activeStyles = 'text-blue-600 ';
  return (
    <>
      <div className=" text-3xl font-bold text-white">Webpulse</div>
      <nav className="w-full bg-gray-900/70 text-gray-300 flex items-center justify-center backdrop-blur-md shadow-lg border-b border-white/10">
        <ul className="flex space-x-12">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;

            if (label === 'Services') {
              return (
                <li key={href} className="relative group p-2">
                  <span
                    className={`${baseStyles} ${
                      isActive ? activeStyles : ''
                    } cursor-pointer`}
                  >
                    {label}
                  </span>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition duration-300 z-50">
                    <Link
                      href="/services/branding"
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      Branding
                    </Link>
                    <Link
                      href="/services/seo"
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      SEO & Performance
                    </Link>
                    <Link
                      href="/services/ads"
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      Ad Management
                    </Link>
                    <Link
                      href="/services/webdesign"
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      Web Design
                    </Link>
                  </div>
                </li>
              );
            }

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
