'use client';

import { motion } from 'framer-motion';
import { SlideIn } from '@/components/general';

export default function ContactHeader() {
  return (
    <div className="flex flex-col gap-8 md:items-start ">
      {/* Layered Heading */}
      <div className="relative w-fit h-fit md:ml-8">
        <SlideIn
          as="h1"
          direction="left"
          className="absolute top-1 left-1 text-6xl md:text-8xl text-gray-950 font-jakartaSans opacity-30"
        >
          Contact
        </SlideIn>

        <SlideIn
          as="h1"
          direction="up"
          className="relative text-6xl md:text-8xl font-jakartaSans text-white"
        >
          Contact
        </SlideIn>
      </div>

      {/* Text */}
      <SlideIn
        as="section"
        direction="right"
        className="max-w-xl md:mx-auto mt-4 md:mt-0"
      >
        <h2 className="text-xl text-white font-semibold mb-2 font-jakartaSans text-center">
          Let's work together
        </h2>
        <p className="text-white/80 text-sm font-jakartaSans leading-relaxed">
          Use the form to get in touch with Webpulse Designs. Whether you're
          looking for a new website, need help with branding, or just want to
          chat about your next big idea, I usually respond within 24 hours.
          Thank you for visiting!
        </p>
      </SlideIn>
    </div>
  );
}
