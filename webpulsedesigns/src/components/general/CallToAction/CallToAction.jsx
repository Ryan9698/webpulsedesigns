'use client';

import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function CallToAction({
  href = '/contact',
  label = "Let's Work Together",
  icon = <FaHeart className="text-pink-400" />,
  className = '',
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="mt-16 mx-auto w-fit px-6 py-4 rounded-xl bg-black/60 backdrop-blur border border-white/10 shadow-lg flex items-center gap-3 text-white font-jakartaSans text-lg"
    >
      <motion.span
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {icon}
      </motion.span>
      <Link
        href={href}
        className="hover:underline hover:text-pink-400 transition"
      >
        {label}
      </Link>
    </motion.div>
  );
}
