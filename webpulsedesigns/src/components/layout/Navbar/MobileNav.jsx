'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 text-white"
      >
        {isOpen ? '✖ Close' : '☰ Menu'}
      </button>

      {/* Overlay and Sliding Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90 backdrop-blur-sm z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu} // Allows the menu to close when clicking the overlay
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-4/5 sm:w-1/2 bg-gray-900/85 z-50 p-6 shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col gap-4 text-white font-jakartaSans text-3xl text-lg">
                <a href="#home" onClick={toggleMenu}>
                  Home
                </a>
                <a href="#services" onClick={toggleMenu}>
                  Services
                </a>
                <a href="#portfolio" onClick={toggleMenu}>
                  Portfolio
                </a>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
