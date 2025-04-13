'use client';

import { motion } from 'framer-motion';

export default function TestBox() {
  return (
    <motion.div
      className="w-40 h-40 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg"
      initial={{ opacity: 0, y: -50, transition: 2.0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.75, rotate: 270 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      Hover or Tap Me
    </motion.div>
  );
}
