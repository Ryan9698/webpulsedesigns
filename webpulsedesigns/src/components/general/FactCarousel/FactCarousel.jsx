'use client';

import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function FactCarousel({ data = [], className = '' }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 6000);
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [data.length]);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  const current = data[index];

  return (
    <div
      className={`relative w-full max-w-xl mx-auto 
      bg-gradient-to-br from-black/30 via-slate-900 to-black/10 
      rounded-xl border border-white/10 
      shadow-[0_0_12px_rgba(0,191,255,0.1)] 
      backdrop-blur-lg text-white transition-all overflow-hidden ${className}`}
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      {/* Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
        <button
          onClick={prev}
          className="text-white/70 hover:text-sky-400 transition text-xl"
          aria-label="Previous"
        >
          <FiChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
        <button
          onClick={next}
          className="text-white/70 hover:text-sky-400 transition text-xl"
          aria-label="Next"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Content box with internal padding */}
      <div className="px-7 py-5 h-44 md:h-36 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            layout="position"
          >
            <h3 className="text-md text-sky-400 mb-2 font-jakartaSans whitespace-pre-wrap break-words">
              {current.title}
            </h3>
            <p className="text-white/90 font-geist text-sm mb-3 whitespace-pre-wrap break-words">
              {current.description}
            </p>
            <div className="text-end">
              <a
                href={current.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-pink-400 underline transition"
              >
                Source: {current.source.name}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
