export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 50"
      className="w-48 h-12"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        d="M0,25 L100,25 L120,10 L140,40 L160,20 L250,20"
        className="text-indigo-500"
      />
      <text
        x="125"
        y="30"
        fontFamily="var(--font-jakarta)"
        fontWeight="700"
        fontSize="20"
        textAnchor="middle"
        fill="currentColor"
        className="text-white font-jakartaSans animate-pulse"
      >
        Webpulse
      </text>
    </svg>
  );
}
