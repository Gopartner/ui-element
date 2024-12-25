import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@c': path.resolve(__dirname, 'src/components'),
      '@p': path.resolve(__dirname, 'src/pages'),
      '@l': path.resolve(__dirname, 'src/layouts'),
      '@f': path.resolve(__dirname, 'src/config'),
      '@u': path.resolve(__dirname, 'src/utils'),
      '@h': path.resolve(__dirname, 'src/hooks'),
      '@cont': path.resolve(__dirname, 'src/context'),
      '@css': path.resolve(__dirname,'src/styles'),
      '@a': path.resolve(__dirname, 'src/auth'),
    },
  },
});