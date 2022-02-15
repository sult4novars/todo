import { join } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log(join(__dirname, 'dist'));

export default defineConfig({
  root: './src',
  build: {
    outDir: join(__dirname, 'dist'),
  },
  plugins: [react()],
});
