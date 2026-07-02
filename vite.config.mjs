import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('lucide-react') || id.includes('@icon-park')) return 'icons'
          if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor'
          return undefined
        },
      },
    },
    cssCodeSplit: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
