'use client';

import { motion } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';
import Link from 'next/link';

export default function CallToAction({
  href = '/contact',
  label = "Let's Work Together",
  icon = <FaHeartbeat className="text-pink-400" />,
  className = '',
}) {
  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`mt-16 mx-auto w-fit px-6 py-4 rounded-xl bg-black/60 backdrop-blur border border-pink-400 shadow-lg flex items-center gap-3 text-white font-jakartaSans text-lg ${className}`}
      >
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {icon}
        </motion.span>
        {label}
      </motion.a>
    </Link>
  );
}
