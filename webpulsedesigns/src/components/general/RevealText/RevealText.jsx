import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function RevealText({ word = '', className = '' }) {
  return (
    <motion.span
      className={`inline-flex gap-[0.05wm] ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {word.split('').map((char, i) => (
        <motion.span key={i} variants={letterVariants}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
