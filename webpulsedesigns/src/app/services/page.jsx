import Image from 'next/image';

export default function Services() {
  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-jakartaSans text-white font-semibold text-center mb-12">
        Unique <span className="text-sky-400">Styles</span>.{' '}
        <span className="underline underline-offset-8 decoration-1">
          Built for Your{' '}
          <span className="text-sky-400 transform animate-pulse duration-900">
            Brand
          </span>
        </span>
        .
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        {[
          {
            title: 'Minimalist',
            desc: 'Clean lines, subtle colors, and white space.',
          },
          {
            title: 'Bold & Vibrant',
            desc: 'High contrast and eye-catching colors.',
          },
          {
            title: 'Sleek & Modern',
            desc: 'Glassmorphic, motion-rich experiences.',
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:scale-[1.02] transition"
          >
            <h3 className="text-2xl font-jakarta mb-2">{title}</h3>
            <p className="text-white/80">{desc}</p>
          </div>
        ))}
      </div>

      <div class="relative w-60 h-32 bg-gray-200 m-4">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-2">
          Perfectly Centered
        </div>
      </div>
    </section>
  );
}
