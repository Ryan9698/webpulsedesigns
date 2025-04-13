'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        layout
        className="flex mb-4 border-slate-700 rounded-xl overflow-hidden w-full"
      >
        <motion.div
          layout
          whileHover={{
            rotateY: 15,
            rotateX: 5,
            transition: { type: 'spring', stiffness: 200 },
          }}
          style={{ transformStyle: 'preserve-3d', perspective: 600 }}
          className="text-white text-xl p-6 bg-slate-700 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {question}
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto', rotate: [-15, 0, 15, 0] }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 pb-4 bg-slate-800 text-white overflow-hidden"
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
