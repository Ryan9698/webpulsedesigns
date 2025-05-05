'use client';

import { seoFacts } from '@/app/data';
import {
  FactCarousel,
  Highlight,
  AnimatedChecklist,
  SlideIn,
  CallToAction,
} from '@/components/general';

export default function SeoAndPerformance() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0b0f19] to-gray-900 px-6 py-20 text-white font-jakartaSans overflow-hidden">
      {/* Radial Accent for visual flair */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.15),_transparent)] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto grid gap-16 lg:grid-cols-2 items-start relative z-10">
        {/* Intro Block */}
        <div className="space-y-10 text-center md:text-left">
          <SlideIn className="text-cyan-400" as="h1" direction="left">
            <p className="text-4xl md:text-5xl font-bold tracking-wide my-10">
              Turn Visibility Into Value
            </p>
          </SlideIn>
          <p className="text-white/80 text-lg max-w-xl mx-auto md:mx-0">
            Most sites are invisible.{' '}
            <Highlight variant="blue">SEO changes that</Highlight> — and our
            approach goes beyond keywords and buzzwords. We optimize the full
            experience.
          </p>
          <div className="space-y-6 bg-black/50 p-6 pt-8 rounded">
            <h2 className="text-2xl text-sky-300 font-bold">What is SEO?</h2>
            <p className="text-white/70 font-geist leading-relaxed tracking-tight">
              SEO—Search Engine Optimization—is what makes your website{' '}
              <Highlight variant="pink" className="tracking-wide">
                findable
              </Highlight>
              . Without it, even the most beautifully designed site can go
              unnoticed. At Webpulse, we go beyond surface-level fixes. We
              combine technical SEO, performance tuning, accessibility, and
              smart content structure to help your site rank higher and stay
              memorable. Many developers overlook SEO entirely, costing
              businesses valuable visibility. We don’t. We build with it from
              the ground up—so your website not only looks good, but gets seen.
            </p>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="rounded-xl p-6 shadow-[0_0_12px_rgba(0,191,255,0.15)] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Why SEO Still Matters
          </h2>
          <FactCarousel data={seoFacts} />
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-pink-500/20 via-white/10 to-cyan-400/20 mt-24" />

      {/* Problem and Solution Section */}

      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] px-0 md:px-4 mt-24">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row relative z-10">
          {/* Problem Block */}
          <div className="flex-1 p-6 bg-black/50 border border-white/10 shadow-md">
            <h2 className="text-xl text-pink-400 font-semibold mb-2">
              The Problem
            </h2>
            <p className="text-white/70 leading-relaxed">
              Most SEO providers focus on outdated tactics — keyword stuffing,
              paid ads, and bloated plugins.
            </p>
          </div>

          {/* Solution Block */}
          <div className="flex-1 p-6 bg-slate-800/70 border border-white/10 shadow-md">
            <h2 className="text-xl text-sky-400 font-semibold mb-2">
              Our Solution
            </h2>
            <p className="text-white/70 leading-relaxed">
              We integrate technical SEO with blazing-fast performance,
              accessibility, and structured content.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-pink-500/20 via-white/10 to-cyan-400/20 mt-24" />

      {/* Checklist */}
      <div className="max-w-screen-xl mx-auto mt-24 px-4">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">
          Every SEO Plan Includes:
        </h2>
        <AnimatedChecklist
          items={[
            'Technical SEO optimization and clean semantic markup structured for search engine crawlers',
            'Lightning-fast performance for mobile and desktop utilizing mobile-first design',
            'Accessibility and usability audits',
            'Keyword research and meta tag optimization to make sure search results find you',
            'Structured data for better Google indexing to rank higher',
            'Integrated analytics and tracking setup to see what your site is doing',
          ]}
        />
      </div>
      <div>
        <CallToAction className="border-pink-400" />
      </div>
    </section>
  );
}
