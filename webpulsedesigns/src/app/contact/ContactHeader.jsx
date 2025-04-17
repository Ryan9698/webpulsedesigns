'use client';

import { motion } from 'framer-motion';

export default function ContactHeader() {
  return (
    <>
      <div className="relative">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: [-80, 0, -10, 0], opacity: [0.5, 1] }}
          transition={{
            duration: 1.2,
            ease: 'easeIn',
            times: [0, 0.5, 0.75, 1],
          }}
          className="relative text-8xl font-bold mt-20 text-gray-200 font-jakartaSans z-20"
        >
          Contact
        </motion.h1>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: [0.5, 1] }}
          transition={{ delay: 0.2, duration: 1.2, ease: 'easeIn' }}
          className="absolute text-8xl font-bold top-1 left-1 mt-20 text-gray-950 font-jakartaSans z-10"
        >
          Contact{' '}
        </motion.h1>
      </div>
    </>
  );
}
