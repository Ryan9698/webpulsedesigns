'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    subLinks: [
      { label: 'Branding', href: '/services/branding' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Ads', href: '/services/ads' },
      { label: 'Web Design', href: '/services/webdesign' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const toggleDropdown = (label) =>
    setOpenDropdown(openDropdown === label ? null : label);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[100] text-white bg-gradient-to-br from-pink-600 to-purple-600 px-4 py-2 rounded"
      >
        {isOpen ? '✖ Close' : '☰ Menu'}
      </button>

      {/* Overlay + Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Background */}
            <motion.div
              className="fixed inset-0 bg-black/90 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Sliding Menu Panel */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-4/5 sm:w-1/2 bg-gradient-to-br from-gray-900/70 to-black/80 backdrop-blur-md z-50 p-6 text-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col gap-4 font-jakartaSans text-xl">
                {navLinks.map((item) => {
                  const hasDropdown = item.subLinks;
                  const isDropdownOpen = openDropdown === item.label;

                  return (
                    <div key={item.label}>
                      {hasDropdown ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full"
                            onClick={() => toggleDropdown(item.label)}
                          >
                            {item.label}
                            <span className="ml-2">
                              {isDropdownOpen ? '▾' : '▸'}
                            </span>
                          </button>

                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="pl-4 mt-2 space-y-2 text-base text-gray-300"
                              >
                                {item.subLinks.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={closeMenu}
                                    className="block hover:text-white transition"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block hover:text-white transition"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
