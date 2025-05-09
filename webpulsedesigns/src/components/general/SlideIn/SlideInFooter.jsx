'use client';
import { motion } from 'framer-motion';

export default function SlideInFooter({ children, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-black/80 backdrop-blur w-full"
    >
      {children}
    </motion.div>
  );
}
