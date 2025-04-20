'use client';

import { motion } from 'framer-motion';
import { SlideIn } from '@/components/general';

export default function ContactHeader() {
  return (
    <div className="flex flex-col gap-8 items-center">
      {/* Layered Heading */}
      <div className="relative w-fit h-fit">
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

      {/* Animated Subheading */}

      <section className="relative w-fit h-fit p-2 mx-auto">
        <SlideIn
          as="h2"
          direction="left"
          className="absolute right-1 z-0 text-2xl text-gray-950 font-semibold leading-relaxed font-jakartaSans max-w-md"
        >
          Let's work together!
        </SlideIn>
        <SlideIn
          as="h2"
          direction="up"
          className="relative z-10 text-2xl text-white font-semibold font-jakartaSans leading-relaxed max-w-md"
        >
          Let's work together!
        </SlideIn>
      </section>

      {/* Animated Paragraph */}
      <section className="relative h-fit w-fit p-2 mx-auto">
        <SlideIn
          as="p"
          direction="left"
          className="absolute text-gray-950 text-sm font-jakartaSans leading-relaxed"
        >
          Use the form to get in touch with Webpulse Designs. Whether you're
          looking for a new website, need help with branding, or just want to
          chat about your next big idea, I usually respond within 24 hours.
          Thank you for visiting!
        </SlideIn>
        <SlideIn
          as="p"
          direction="up"
          className="relative text-white/80 text-sm font-jakartaSans leading-relaxed"
        >
          Use the form to get in touch with Webpulse Designs. Whether you're
          looking for a new website, need help with branding, or just want to
          chat about your next big idea, I usually respond within 24 hours.
          Thank you for visiting!
        </SlideIn>
      </section>
    </div>
  );
}
