'use client';
import Image from 'next/image';
import { SlideIn, HoverWords, CallToAction } from '@/components/general';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12">
      {/*  Gradient + glow background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0b0f19] via-black to-gray-900" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)] blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-5xl rounded-full bg-cyan-400/10 blur-3xl z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        <SlideIn direction="up">
          <div className="w-full max-w-5xl mb-10">
            <Image
              src="/images/webpulselogo3.webp"
              alt="Webpulse Logo"
              width={1000}
              height={700}
              className="w-full h-auto object-contain drop-shadow-[0_0_32px_rgba(255,255,255,0.3)]"
            />
          </div>
        </SlideIn>

        <SlideIn direction="up" delay={0.3}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold mb-12 leading-tight tracking-tight">
            <HoverWords className="text-white drop-shadow-[0_0_12px_rgba(0,191,255,0.6)]">
              Elevate
            </HoverWords>{' '}
            Your Brand with
            <br />
            <span className="underline decoration-pink-500/60 underline-offset-[6px]">
              Custom Web Design
            </span>
          </h1>
        </SlideIn>

        <SlideIn direction="up" delay={0.5}>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed tracking-tight">
            Fast, beautiful websites designed to convert. Built from scratch
            with SEO, performance, and your brand’s personality at the core.
          </p>
        </SlideIn>

        <SlideIn direction="up" delay={0.7}>
          <div className="mt-10">
            <CallToAction />
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
