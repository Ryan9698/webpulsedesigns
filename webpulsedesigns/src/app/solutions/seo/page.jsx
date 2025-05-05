'use client';

import { seoFacts } from '@/app/data';
import {
  FactCarousel,
  Highlight,
  AnimatedChecklist,
} from '@/components/general';

export default function SeoAndPerformance() {
  return (
    <div className="bg-gradient-to-br from-[#0b0f19] via-black to-[#1a1a1a] text-white font-jakartaSans px-6 py-20">
      {/* Radial Accent */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.12),_transparent)] pointer-events-none" />

      <section className="flex flex-col justify-start w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-lime-400">
          Turn Visibility Into Value
        </h1>
        <p className="text-white/80 text-lg max-w-3xl">
          Most sites are invisible.{' '}
          <Highlight variant="blue">SEO changes that</Highlight> — and our
          approach goes beyond keywords and buzzwords. We optimize the full
          experience.
        </p>
      </section>

      <section className="">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-jakartaSans">
          What is SEO?
        </h2>
        <p className="font-geist">
          SEO—Search Engine Optimization—is what makes your website *findable*.
          Without it, even the most beautifully designed site can go unnoticed.
          At Webpulse, we go beyond surface-level fixes. We combine technical
          SEO, performance tuning, accessibility, and smart content structure to
          help your site rank higher and stay memorable. Many developers
          overlook SEO entirely, costing businesses valuable visibility. We
          don’t. We build with it from the ground up—so your website not only
          looks good, but gets seen.
        </p>
      </section>

      {/* Facts Carousel */}
      <section className="max-w-screen-xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">
          Why SEO Still Matters
        </h2>
        <FactCarousel data={seoFacts} />
      </section>

      {/* Problem/Solution Pitch */}
      <section className="max-w-screen-xl mx-auto mt-24 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-red-400 mb-2">
            The Problem
          </h2>
          <p className="text-white/70 max-w-2xl">
            Most SEO providers focus on outdated tactics — keyword stuffing,
            paid ads, and bloated plugins. Their results drop off fast, and your
            site ends up buried.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-400 mb-2">
            Our Solution
          </h2>
          <p className="text-white/70 max-w-2xl">
            At Webpulse, we integrate technical SEO with blazing-fast
            performance, accessibility, and structured content to help you rank
            higher and stay memorable.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-screen-xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-lime-300 mb-6">
          Every SEO Plan Includes:
        </h2>
        <AnimatedChecklist
          items={[
            'Technical SEO optimization and clean semantic markup',
            'Lightning-fast performance for mobile and desktop',
            'Accessibility and usability audits',
            'Keyword research and meta tag optimization',
            'Structured data for better Google indexing',
            'Integrated analytics and tracking setup',
          ]}
        />
      </section>
    </div>
  );
}
