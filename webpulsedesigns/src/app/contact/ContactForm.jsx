'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm({ status, setStatus }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000); // Clear after delay
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8 + i * 0.15, // staggered entry after header completes
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md shadow-lg"
    >
      {/* Feedback Banner */}
      {/* <AnimatePresence>
        {status && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className={`text-center py-2 px-4 rounded text-sm font-medium ${
              status === 'sent'
                ? 'bg-green-600 text-white'
                : status === 'sending'
                ? 'bg-yellow-500 text-black'
                : 'bg-red-600 text-white'
            }`}
          >
            {status === 'sent'
              ? 'Message sent! 🚀'
              : status === 'sending'
              ? 'Sending...'
              : 'Something went wrong 😢'}
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Name */}
      <motion.input
        custom={0}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      {/* Email */}
      <motion.input
        custom={1}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        required
        className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      {/* Message */}
      <motion.textarea
        custom={2}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message..."
        required
        rows={5}
        className="w-full px-4 pt-4 pb-10 rounded-lg bg-gray-900/30 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
      />

      {/* Button */}
      <motion.button
        custom={3}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        type="submit"
        disabled={status === 'sending'}
        className="mt-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-lg transition"
      >
        Send Message
      </motion.button>
    </form>
  );
}
