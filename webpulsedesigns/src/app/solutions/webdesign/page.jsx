'use client';

import { motion } from 'framer-motion';
import { SlideIn, Highlight } from '@/components/general';
import { AnimatedChecklist } from '@/components/general';
import { FactCarousel } from '@/components/general';
import { webDesignFeatures, webDesignFacts } from '@/app/data';

export default function DesignShowcase() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0b0f19] via-black to-[#1a1a1a] px-6 py-16 text-white font-jakartaSans overflow-hidden">
      {/* Radial backdrop accent */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.10),_transparent)] pointer-events-none" />
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 z-10 space-y-6">
          <SlideIn
            as="h2"
            direction="left"
            className="text-4xl md:text-5xl font-jakartaSans"
          >
            <Highlight variant="blue">Custom Websites</Highlight> Designed to{' '}
            <Highlight variant="pink">Impress</Highlight> and{' '}
            <Highlight variant="pink">Convert</Highlight>
          </SlideIn>

          <SlideIn
            as="p"
            direction="up"
            delay={0.3}
            className="text-white/80 text-lg max-w-xl font-geist"
          >
            Your website isn't just an online presence — it's your brand’s first
            impression and lasting signature. At Webpulse, we craft tailored
            designs that emphasize clarity, reflect your unique identity, and
            encourage user interaction. Whether you need a sophisticated
            multi-page website or an elegant single-page design, we deliver
            solutions optimized for performance, accessibility, and search
            engines (SEO). Stand out, connect with your audience, and showcase
            what makes you unforgettable.
          </SlideIn>

          <AnimatedChecklist items={webDesignFeatures} />
        </div>
        <div className="flex flex-col flex-1 min-w-0 space-y-12">
          {/* Right Visual Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex-1 bg-gradient-to-br from-black/30 via-slate-900 to-black/10 border border-white/10 rounded-xl p-6 shadow-[0_0_12px_rgba(0,191,255,0.15)]"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Recent Project Highlight
            </h3>
            <div className="aspect-video w-full bg-gray-800 rounded-md mb-3" />
            <p className="text-white/70 text-sm">
              Reimagined a local brand's site from the ground up, resulting in a
              63% increase in engagement and a 40% faster loading time. All
              built with React, Tailwind, and love.
            </p>
          </motion.div>

          <FactCarousel data={webDesignFacts} />
        </div>
      </div>
    </section>
  );
}
