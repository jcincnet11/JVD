import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6560',
        accent: '#00A86B',
        'accent-dark': '#007A4D',
        border: '#E0D9CF',
        dark: '#111111',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
