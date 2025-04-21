'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    subLinks: [
      { label: 'Branding', href: '/solutions/branding' },
      { label: 'SEO', href: '/solutions/seo' },
      { label: 'Ads', href: '/solutions/ads' },
      { label: 'Web Design', href: '/solutions/webdesign' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false); // Close the menu
    setOpenDropdown(null); // Close the submenu
  };
  const toggleDropdown = (label) =>
    setOpenDropdown(openDropdown === label ? null : label);

  // useEffect for changing state and removing dropdown submenu on link change.
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  //   useEffect for locking background scroll while menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  // Variants for staggered framer animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[100] text-white font-jakartaSans bg-gradient-to-br from-gray-900/20 via-gray-800/30 to-black/30 border border-white/10 px-4 py-2 rounded shadow-lg"
      >
        {isOpen ? '✖ Close' : '☰ Menu'}
      </button>

      {/* Overlay + Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Container */}
            <motion.div
              className="fixed inset-0 bg-black/90 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Sliding Menu Panel */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[50%] bg-gradient-to-br from-gray-900/70 to-black/80 backdrop-blur-lg shadow-2xl z-50 p-6 text-white flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 40 }}
            >
              {/* Mapped Navigation Menu from navLinks object */}
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col  justify-start items-start pt-24 gap-10 font-jakartaSans text-2xl px-6"
              >
                {navLinks.map((item) => {
                  const hasDropdown = item.subLinks;
                  const isDropdownOpen = openDropdown === item.label;

                  return (
                    <motion.div
                      variants={itemVariants}
                      key={item.label}
                      className="w-full"
                    >
                      {/* Conditional rendering for menus with sub-menus (Services) */}
                      {hasDropdown ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full text-left"
                            onClick={() => toggleDropdown(item.label)}
                          >
                            {item.label}

                            {/* Motion Arrow for Dropdown Sub-menu */}
                            <motion.span
                              className={`ml-2 ${
                                isDropdownOpen ? 'text-sky-500' : ''
                              }`}
                              animate={{ rotate: isDropdownOpen ? 90 : 0 }}
                              transition={0.3}
                            >
                              ▸
                            </motion.span>
                          </button>

                          {/* Sub-menu conditional rendering managed by state and animated with Framer Motion */}
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 mt-4 space-y-2 text-base text-gray-300"
                              >
                                {item.subLinks.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={closeMenu}
                                    className="block hover:text-sky-500 transition"
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
                          className="block hover:text-sky-500 transition"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </motion.nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
