import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['__tests__/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./__tests__/setup.ts'],
    server: {
      deps: {
        // Inline @jvd/ui so vitest resolves its peer deps (next/navigation,
        // next-intl) via the consumer's node_modules instead of the
        // package's own .pnpm dir, which doesn't host peer deps.
        inline: [/@jvd\/ui/],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
