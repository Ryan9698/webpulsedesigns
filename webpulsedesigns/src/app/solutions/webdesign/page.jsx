'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SlideIn, Highlight } from '@/components/general';
import { AnimatedChecklist } from '@/components/general';
import { FactCarousel } from '@/components/general';
import { webDesignFeatures, webDesignFacts } from '@/app/data';

const cardStyles =
  'rounded-xl p-6 shadow-[0_0_12px_rgba(0,191,255,0.15)] border border-white/10 bg-gradient-to-br from-black/30 via-slate-900 to-black/10';

export default function DesignShowcase() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0b0f19] via-black to-[#1a1a1a] px-6 py-16 text-white font-jakartaSans overflow-hidden">
      {/* Radial backdrop accent */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.10),_transparent)] pointer-events-none" />
      <div className="max-w-screen-xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
        {/* Left Content */}
        <div className="w-full md:max-w-2xl mx-auto space-y-6 mt-10 text-center md:text-left">
          {/* Sliding Header Content */}
          <div className="mx-4">
            <SlideIn
              as="h2"
              direction="left"
              className="text-3xl md:text-4xl font-jakartaSans tracking-wide leading-12"
            >
              <Highlight variant="blue" className="block">
                Custom Websites
              </Highlight>{' '}
              Designed to{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.6,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
                className="inline-block"
              >
                <Highlight variant="pink">Impress</Highlight>
              </motion.span>{' '}
              and{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.2,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
                className="inline-block"
              >
                <Highlight variant="pink">Convert</Highlight>
              </motion.span>
            </SlideIn>
          </div>
          {/* Full black background on small resolutions */}
          <SlideIn
            as="p"
            direction="up"
            delay={0.3}
            className="text-white/80 text-lg md:max-w-2xl font-geist bg-black/30 w-full rounded p-4"
          >
            Your website isn't just an online presence — it's your brand’s{' '}
            <Highlight variant="blue">first impression</Highlight> and{' '}
            <Highlight variant="blue">lasting signature.</Highlight> At
            Webpulse, we craft tailored designs that emphasize clarity, reflect
            your unique identity, and encourage user interaction. Whether you
            need a sophisticated multi-page website or an elegant single-page
            design, we deliver solutions optimized for performance,
            accessibility, and{' '}
            <Link
              href="/solutions/seo"
              className="underline decoration-pink-500 decoration-2 underline-offset-3 text-pink-500"
            >
              search engines (SEO).
            </Link>{' '}
            Stand out, connect with your audience, and showcase what makes you
            unforgettable.
          </SlideIn>

          {/* Animated Checklist */}
          <AnimatedChecklist items={webDesignFeatures} />
        </div>
        <motion.div
          layout="position"
          className="w-full md:w-auto md:mt-10 flex flex-col space-y-12 items-center"
        >
          {/* Right Visual Box */}
          <motion.div
            layout="position"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full max-w-md md:max-w-xl mx-auto bg-gradient-to-br from-black/30 via-slate-900 to-black/10 border border-white/10 rounded-xl p-6 shadow-[0_0_12px_rgba(0,191,255,0.15)] m-4"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Recent Project Highlight
            </h3>
            {/* Recent Project Image and Link */}
            <Link
              href="https://speechavenues.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/satclogo.webp"
                width={600}
                height={375}
                alt="Speech Avenues Therapy Co. Logo showcasing brand identity in recent redesign project"
                className="w-full h-auto object-contain rounded-lg"
              />
            </Link>
            <p className="text-white/70 text-sm mt-4 leading-relaxed tracking-tight">
              Speech Avenues Therapy Co. is a local non-profit business based in
              Rockledge, FL. Redesigned their website from the ground up,
              improving the aesthetics, accessibility, performance, and SEO.
            </p>
          </motion.div>

          <FactCarousel data={webDesignFacts} className="mx-4 my-8 md:mx-0" />
        </motion.div>
      </div>
    </section>
  );
}
