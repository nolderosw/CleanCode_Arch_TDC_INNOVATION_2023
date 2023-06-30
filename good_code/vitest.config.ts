import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import libCss from 'vite-plugin-libcss';

export default defineConfig({
  plugins: [
    Vue(),
    libCss()
  ],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['*.ts', '*.test.ts']
    },
    globals: true,
    environment: 'happy-dom',
    deps: {
        inline: ['element-plus']
    }
  },
})