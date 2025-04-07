'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'Services',
      dropdown: [
        { href: '/services/branding', label: 'Branding' },
        { href: '/services/seo', label: 'SEO & Performance' },
        { href: '/services/ads', label: 'Ad Management' },
        { href: '/services/webdesign', label: 'Web Design' },
      ],
    },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'Contact' },
  ];

  const baseStyles =
    'transition transform hover:text-white hover:scale-105 font-jakartaSans text-lg';
  const activeStyles = 'text-blue-600';

  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: 1,
          rotate: [45, -45, 0],
          scale: [1, 0.5, 1],
        }}
        transition={{ duration: 2 }}
        className="relative h-auto w-40 p-2"
      >
        <Image
          src="/images/webpulselogo.webp"
          width={160}
          height={80}
          className="w-full h-1/2 object-contain"
        ></Image>
      </motion.div>
      <nav className="relative w-full bg-gray-900/70 text-gray-300 flex items-center justify-center backdrop-blur-md shadow-lg border-b border-white/10 z-40">
        <ul className="flex space-x-12 items-center">
          {navLinks.map(({ href, label, dropdown }) => {
            const isActive = pathname === href;

            if (dropdown) {
              return (
                <li key={label} className="group relative p-2">
                  <button
                    type="button"
                    aria-label="Services Menu"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className={`inline-flex items-center p-2 ${baseStyles} ${
                      isActive ? activeStyles : ''
                    }`}
                    onClick={() =>
                      isTouchDevice && setDropdownOpen(!dropdownOpen)
                    }
                  >
                    {label}
                    <svg
                      className="ml-1 h-5 w-5 transition-transform duration-200 group-hover:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12.293l-4.146-4.147-.708.708L10 13.707l4.854-4.853-.708-.708L10 12.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown with proper alignment and z-index */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 z-50 rounded-lg bg-gray-900 py-2 shadow-[0_8px_16px_rgba(255,255,255,0.05)] w-48 border border-white/10 backdrop-blur-md transition duration-200 ${
                      isTouchDevice
                        ? dropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none'
                        : 'group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    {' '}
                    {dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            }

            return (
              <li key={href} className="p-2">
                <Link
                  href={href}
                  className={`p-2 inline-block ${baseStyles} ${
                    isActive ? activeStyles : ''
                  }`}
                >
                  <span className="relative z-10"> {label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-1 w-full h-[1px] bg-blue-500 rounded"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 50,
                      }}
                      animate={{
                        backgroundColor: isActive ? '#3b82f6' : '#aaa',
                      }}
                    ></motion.div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
