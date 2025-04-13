import { motion, AnimatePresence } from 'framer-motion';
import AccordionItem from './AccordionItem';

export const faqs = [
  {
    question: 'How long is a day?',
    answer: 'A day consists of 24 hours.',
  },
  {
    question: 'How many minutes in an hour?',
    answer: 'An hour consists of 60 minutes',
  },
];

export default function Accordion() {
  return (
    <div>
      {faqs.map(({ question, answer }, index) => {
        return (
          <AccordionItem key={index} question={question} answer={answer} />
        );
      })}
    </div>
  );
}
