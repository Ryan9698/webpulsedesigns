import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: 'about', label: 'Contact' },
  ];
  const linkStyles = 'hover:text-red-900 text-white';
  return (
    <div>
      <ul className="flex md:justify-center gap-4">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={linkStyles}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
