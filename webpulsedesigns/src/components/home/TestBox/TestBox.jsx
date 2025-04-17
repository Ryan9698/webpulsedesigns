'use client';

import { motion } from 'framer-motion';

export default function AnimatedEKG() {
  return (
    <div className="w-full h-40 flex justify-center items-center bg-black">
      <motion.svg
        viewBox="0 0 500 100"
        className="w-3/4 h-full"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
        }}
      >
        <motion.path
          d="M0 50 L50 50 L70 20 L90 80 L110 50 L180 50 L200 30 L220 70 L240 50 L300 50 L500 50"
          stroke="#00ffff"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
}
