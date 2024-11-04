import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from "path";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/tma/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: './dist' // Ensure this matches what you expect
  },
});
