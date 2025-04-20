module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['font-geist', 'font-inter', 'font-geistMono'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
      },
      keyframes: {
        'pulse-bg': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'pulse-bg': 'pulse-bg 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
