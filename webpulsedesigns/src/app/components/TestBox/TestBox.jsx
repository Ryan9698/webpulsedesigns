'use client';

import { motion } from 'framer-motion';

export default function TestBox() {
  return (
    <motion.div
      className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
      whileHover={{ scale: 1.1, rotate: 5, opacity: 0.1 }}
      whileTap={{ scale: 0.5, rotate: 360 }}
      initial={{ opacity: 1, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      Hover or Tap Me
    </motion.div>
  );
}
