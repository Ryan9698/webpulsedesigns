'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from './Accordion';

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <p
          className="text-white font-2xl p-6 bg-slate-700rounded-xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {question}
        </p>
        {isOpen && <p>{answer}</p>}
      </div>
    </>
  );
}
