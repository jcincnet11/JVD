import type { Config } from 'tailwindcss';
import jvdPreset from '@jvd/ui/theme/tailwind-preset';

const config: Config = {
  presets: [jvdPreset as Config],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@jvd/ui/dist/**/*.{js,mjs,cjs}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6560',
        'accent-dark': '#007A4D',
        dark: '#111111',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
};

export default config;
