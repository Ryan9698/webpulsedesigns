import Image from 'next/image';
import { Logo, TextBox } from '@/app/components/home';

export default function Home() {
  return (
    // Background Image
    <div className="bg-[url('/images/webpulse1440.webp')] bg-cover bg-center">
      <section className="relative max-w-[80%] h-screen  mx-auto py-8 px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="absolute inset-0 -z-10 brightness-100 bg-[url('/webpulse1440.webp')] bg-cover bg-center opacity-60" />

        {/* LEFT TEXT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl font-jakarta text-white font-bold leading-tight">
            Elevate Your Brand with <br />
            <span className="underline decoration-pink-500/60 underline-offset-[6px]">
              Custom Web Design
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
            <Logo />
            <Logo />
            <Logo />
            <TextBox />
            <TextBox />
            <TextBox />
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/images/webpulselogo.webp"
              alt="Device or design preview"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
            {/* Optional Floating Label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60 font-geist">
              Built with Next.js & Tailwind
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-jakartaSans text-white font-semibold text-center mb-12">
          Unique <span className="text-sky-400">Styles</span>.{' '}
          <span className="">
            Built for Your{' '}
            <span className="relative text-sky-400 transform animate-pulse duration-900">
              Brand
              <div className="absolute rounded-full shadow shadow-sky-200  left-1/2 top-full -mt-2 -translate-x-1/2  w-20 h-4 blur"></div>
            </span>
          </span>
          .
        </h2>
      </section>
    </div>
  );
}
