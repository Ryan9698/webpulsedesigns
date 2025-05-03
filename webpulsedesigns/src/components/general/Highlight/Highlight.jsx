import { motion } from 'framer-motion';

const variants = {
  blue: 'text-sky-400 font-semibold',
  pink: 'text-pink-500 font-semibold',
  green: 'text-green-500 font-semibold',
};

const base = 'text-white font-semibold';

export default function Highlight({
  children,
  variant = 'primary',
  className = '',
}) {
  return (
    <span className={`${variants[variant] || base} ${className}`}>
      {' '}
      {children}
    </span>
  );
}
