import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ include: 'src/*.tsx' })],
  build: {
    outDir: './dist',
    assetsDir: './public',
  }
});
