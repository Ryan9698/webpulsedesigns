'use client';

import { SlideIn } from '@/components/general';
import { motion } from 'framer-motion';

export default function DesignShowcase() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-sky-900 via-black to-slate-900 px-6 py-16 text-white font-jakartaSans">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <SlideIn
            as="h2"
            direction="left"
            className="text-4xl md:text-5xl font-jakartaSans"
          >
            Custom Design That Converts
          </SlideIn>

          <SlideIn
            as="p"
            direction="up"
            delay={0.3}
            className="text-white/80 text-lg max-w-xl"
          >
            Your website isn't just a presence — it's a **first impression**.
            With tailored design that prioritizes clarity, identity, and
            interaction, Webpulse helps brands stand out and stay memorable.
          </SlideIn>

          <SlideIn
            as="ul"
            direction="right"
            delay={0.5}
            className="space-y-3 list-disc pl-5 text-white/70"
          >
            <li>Responsive, mobile-first layouts</li>
            <li>Custom animations with Framer Motion</li>
            <li>Tailwind CSS for scalable styling and dynamic layouts</li>
            <li>
              SEO & accessibility best practices baked in to reach as many users
              as possible
            </li>
          </SlideIn>
        </div>

        {/* Right Visual Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Recent Project Highlight
          </h3>
          <div className="aspect-video w-full bg-gray-800 rounded-md mb-3" />
          <p className="text-white/70 text-sm">
            Reimagined a local brand's site from the ground up, resulting in a
            63% increase in engagement and a 40% faster loading time. All built
            with React, Tailwind, and love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
