'use client';

import { useState } from 'react';
import { FaHeartPulse, FaHeartCircleCheck } from 'react-icons/fa6';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import StatusToast from './StatusToast';
import { SlideIn } from '@/components/general'; // Assuming SlideIn is reusable

export default function Contact() {
  const [status, setStatus] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* 🔮 Animated Background with Pulsing Effect*/}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.75),_transparent_60%)] blur-[100px] animate-[var(--animate-pulse-glow)]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl px-6 mx-auto mt-20">
        {/* 👤 Contact Header */}
        <div className="w-full lg:w-1/2 relative z-10 ">
          <ContactHeader />
        </div>

        {/* 💬 Contact Form / Overlay / Success Message */}
        <div className="relative w-full lg:w-1/2 z-10">
          {/* Overlay during sending */}
          {status === 'sending' && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center rounded-xl z-20">
              <FaHeartPulse className="text-pink-400 text-4xl animate-pulse" />
            </div>
          )}

          {/* Success state */}
          {status === 'sent' ? (
            <SlideIn
              direction="up"
              className="text-white text-center p-8 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md shadow-lg"
            >
              <FaHeartCircleCheck className="text-4xl text-pink-400 mx-auto mb-4" />
              <p className="text-xl font-jakartaSans">
                Thank you! I’ll be in touch soon.
              </p>
            </SlideIn>
          ) : (
            <ContactForm status={status} setStatus={setStatus} />
          )}
        </div>

        {/* ✅ Toast  */}
        <StatusToast status={status} setStatus={setStatus} />
      </div>
    </div>
  );
}
