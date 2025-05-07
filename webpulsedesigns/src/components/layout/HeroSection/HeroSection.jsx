'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SlideIn, HoverWords } from '@/components/general';
import { CallToAction } from '@/components/general';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_20%,_rgba(0,0,0,0.95)_100%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 max-w-4xl mx-auto">
        <SlideIn direction="up">
          <div className="w-full max-w-md mx-auto mb-10">
            <Image
              src="/images/webpulselogo.webp"
              alt="Webpulse Logo"
              width={600}
              height={400}
              className="w-full h-auto object-contain drop-shadow-[0_0_24px_rgba(255,255,255,0.3)]"
            />
            <p className="text-sm text-white/60 mt-2 font-geist">
              Built with Next.js & Tailwind
            </p>
          </div>
        </SlideIn>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold mb-6 leading-tight">
          <HoverWords className="text-white drop-shadow-[0_0_12px_rgba(0,191,255,0.6)]">
            Elevate
          </HoverWords>{' '}
          Your Brand with{' '}
          <span className="underline decoration-pink-500/60 underline-offset-[6px]">
            Custom Web Design
          </span>
        </h1>

        <SlideIn direction="up" delay={0.4}>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            We design experiences that convert — blending performance, SEO, and
            aesthetics into every pixel.
          </p>
        </SlideIn>

        <CallToAction />
      </div>
    </section>
  );
}
