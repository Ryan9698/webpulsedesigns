import Image from 'next/image';
import { Logo, TextBox, Accordion } from '@/components/home';
import { HoverWords } from '@/components/general';
import { SlideIn } from '@/components/general';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    // Background Image

    <div className="bg-[url('/images/webpulse1440.webp')] bg-cover bg-center">
      <section className="relative md:max-w-[80%] min-h-screen  mx-auto py-8 px-20 flex flex-col-reverse lg:flex-row items-center gap-6">
        <div className="absolute inset-0 -z-10 brightness-100 bg-[url('/webpulse1440.webp')] bg-cover bg-center opacity-60" />
        {/* LEFT TEXT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-12">
          <h2 className="text-3xl sm:text-5xl font-jakarta text-white font-bold leading-normal align-middle">
            <span className="block relative overflow-visible">
              <HoverWords
                className="inline-block text-white filter drop-shadow-[0_0_12px_rgba(0,191,255,0.6)]"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: [40, 0, -6, 0], opacity: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              >
                Elevate
              </HoverWords>{' '}
              Your Brand with <br />
              <span className="underline decoration-pink-500/60 underline-offset-[6px]">
                Custom Web Design
              </span>
            </span>
          </h2>
          <p className="mt-6 text-white/80 text-lg">
            We design experiences that convert — blending performance, SEO, and
            aesthetics into every pixel.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition">
              View Portfolio
            </button>
            <button className="border border-white/30 hover:border-pink-400 text-white px-6 py-3 rounded-lg font-medium transition">
              Let’s Talk
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <AnimatePresence>
            <SlideIn direction="right" includeExit exitDirection="left">
              <div className="relative">
                <Image
                  src="/images/webpulselogo.webp"
                  alt="Device or design preview"
                  width={600}
                  height={400}
                  className="backdrop-blur-sm bg-gradient-to-br from-transparent via-black/10 to-transparent pointer-events-none"
                />
                {/* Optional Floating Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60 font-geist">
                  Built with Next.js & Tailwind
                </div>
              </div>
            </SlideIn>
          </AnimatePresence>
        </div>
      </section>
      <section className="w-full px-20 py-10 sm:w-full mx-auto bg-black/30 rounded-xl">
        <h2 className="text-4xl font-jakartaSans text-white font-semibold text-center mb-12 flex flex-wrap justify-center gap-2">
          <SlideIn direction="left" as="span">
            Unique <span className="text-sky-400">Styles</span>.{' '}
          </SlideIn>
          <SlideIn direction="right" delay={1.5} as="span">
            Built for Your{' '}
            <span className="relative text-sky-400 transform animate-pulse duration-900">
              Brand
              <div className="absolute rounded-full shadow shadow-sky-200  left-1/2 top-full -mt-2 -translate-x-1/2  w-20 h-4 blur"></div>
            </span>
          </SlideIn>
        </h2>
        <p className="text-white sm:w-full sm:text-center sm:text-xl mx-auto">
          Explore your creativity and craft a unique experience for your
          visitors. Our websites are designed using React and JavaScript,
          allowing you to design a site exactly how you picture it in your mind.
          No Wordpress or templates, allowing you total control.
        </p>
      </section>
      <TextBox />
    </div>
  );
}
