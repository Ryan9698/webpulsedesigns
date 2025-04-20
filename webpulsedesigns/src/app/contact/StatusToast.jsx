'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat, FaHeartBroken } from 'react-icons/fa';
import { FaHeartPulse, FaHeartCircleCheck } from 'react-icons/fa6';

export default function StatusToast({ status, setStatus }) {
  const [pulseIndex, setPulseIndex] = useState(0);

  // Pulse animation cycling for sending
  useEffect(() => {
    if (status === 'sending') {
      const interval = setInterval(() => {
        setPulseIndex((prev) => (prev + 1) % 2);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [status]);

  // Auto-clear message after 3 seconds (except for sending)
  useEffect(() => {
    if (status === 'sent' || status === 'error') {
      const timeout = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [status, setStatus]);

  return (
    <AnimatePresence>
      {status && (
        <motion.div
          key={status}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl text-white font-jakartaSans bg-black/70 shadow-xl border border-white/10 flex items-center gap-3 backdrop-blur-sm z-[100]"
        >
          {status === 'sending' && (
            <>
              {pulseIndex === 0 ? (
                <FaHeartbeat className="text-pink-400 text-xl animate-pulse" />
              ) : (
                <FaHeartPulse className="text-pink-400 text-xl animate-pulse" />
              )}
              <span className="text-sm text-white/80">Sending message...</span>
            </>
          )}
          {status === 'sent' && (
            <>
              <FaHeartCircleCheck className="text-sky-400 text-xl" />
              <span className="text-sm text-white/80">
                Message sent successfully!
              </span>
            </>
          )}
          {status === 'error' && (
            <>
              <FaHeartBroken className="text-red-500 text-xl" />
              <span className="text-sm text-white/80">
                Something went wrong. Try again.
              </span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
