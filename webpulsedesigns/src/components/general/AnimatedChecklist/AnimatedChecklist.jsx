'use client';

import { easeOut, motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function AnimatedChecklist({ items = [], className = '' }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="space-y-4"
    >
      {items.map((item, i) => {
        return (
          <motion.li
            key={item}
            custom={i}
            variants={itemVariants}
            className={`flex gap-3 items-start text-white text-sm md:text-md mx-4 md:mx-0 mr-10 md:mr-0 ${className}`}
          >
            <FiCheckCircle className="text-sky-400 text-cl mt-1 shrink-0" />
            <span className="inline-block text-left w-full">{item}</span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
