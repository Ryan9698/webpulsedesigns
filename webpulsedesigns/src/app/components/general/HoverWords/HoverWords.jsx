'use client';

import { motion } from 'framer-motion';

export default function HoverWords({
  children,
  className = 'align-baseline inline-block',
  initial = { y: 20, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  transition = {
    delay: 0.25,
    duration: 1.5,
    times: [0, 0.25, 0.5, 0.75, 1],
    ease: 'easeOut',
  },
  viewport = { once: true },
}) {
  return (
    // Using motion.span with className='inline-block' rather than div because div defaults as a block element and shifts layout.
    <motion.span
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.span>
  );
}
