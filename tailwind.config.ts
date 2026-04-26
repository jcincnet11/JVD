import type { Config } from 'tailwindcss';
import preset from '@jvd/ui/theme/tailwind-preset';

const config: Config = {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@jvd/ui/dist/**/*.{js,mjs,cjs}',
  ],
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
