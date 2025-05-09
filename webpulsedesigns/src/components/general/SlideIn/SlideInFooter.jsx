'use client';
import { motion } from 'framer-motion';

export default function SlideInFooter({ children, className = '', ...props }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 1.25, ease: 'easeOut' },
      }}
      exit={{
        y: 100,
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeIn' },
      }}
      className={`fixed bottom-0 left-0 right-0 z-50 will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
