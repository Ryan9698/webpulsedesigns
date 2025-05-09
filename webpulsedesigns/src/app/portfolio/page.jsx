import { SlideIn } from '@/components/general';
export default function Portfolio() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <SlideIn
        as="h1"
        direction="up"
        className="text-3xl md:text-4xl text-white font-jakartaSans tracking-wide leading-12"
      >
        Coming Soon
      </SlideIn>
    </div>
  );
}
