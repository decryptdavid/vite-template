/// <reference types="vitest" />
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueI18n({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/**'),
    }),
  ],
  test: {
    globals: true,
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },
});
