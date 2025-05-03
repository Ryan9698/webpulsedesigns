'use client';

import { easeOut, motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + i * 1.0,
      duration: 0.5,
      ease: 'easeIn',
    },
  }),
};

export default function AnimatedChecklist({ items = [] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        return (
          <motion.li
            key={item}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex gap-3 items-start text-white"
          >
            <FiCheckCircle className="text-sky-400 text-cl mt-1 shrink-0" />
            <span>{item}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}
