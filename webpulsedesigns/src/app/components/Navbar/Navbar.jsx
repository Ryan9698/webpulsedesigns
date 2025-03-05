import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex flex-row gap-4 md:justify-center text-white md:text-2xl p-4">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
