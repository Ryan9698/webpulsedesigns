import { motion, AnimatePresence } from 'framer-motion';

const directions = {
  left: { x: -50, opacity: 0 },
  right: { x: 50, opacity: 0 },
  up: { y: -50, opacity: 0 },
  down: { y: 50, opacity: 0 },
};
export default function SlidingWords(
  Children,
  direction = 'left',
  initial = { x: -20 },
  animate = { x: 0 },
  transition = { delay: 0.5, duration: 1.25 }
) {}
