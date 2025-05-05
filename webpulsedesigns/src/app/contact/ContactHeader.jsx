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
      <div className="bg-black/30 bg-none rounded-lg p-4">
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
        <section className="relative w-full p-4 rounded-lg">
          {/* Width lock container */}
          <div className="relative mx-auto max-w-prose">
            {/* Shadow */}
            <SlideIn
              as="div"
              direction="left"
              className="absolute top-[1px] left-[1px] w-full z-0"
            >
              <div className="w-full">
                <p className="text-sm font-jakartaSans leading-relaxed text-gray-950 whitespace-pre-wrap break-words">
                  Use the form to get in touch with Webpulse Designs. Whether
                  you're looking for a new website, need help with branding, or
                  just want to chat about your next big idea, I usually respond
                  within 24 hours. Thank you for visiting!
                </p>
              </div>
            </SlideIn>

            {/* Foreground */}
            <SlideIn as="div" direction="up" className="relative z-10 w-full">
              <div className="w-full">
                <p className="text-white/80 text-sm font-jakartaSans leading-relaxed whitespace-pre-wrap break-words">
                  Use the form to get in touch with Webpulse Designs. Whether
                  you're looking for a new website, need help with branding, or
                  just want to chat about your next big idea, I usually respond
                  within 24 hours. Thank you for visiting!
                </p>
              </div>
            </SlideIn>
          </div>
        </section>
      </div>
    </div>
  );
}
