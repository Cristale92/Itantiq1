
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'a3ddbb8a-ebed-49ce-9403-1cf6902e94a1-00-u5t5ytk68yam.spock.replit.dev'
    ]
  },
  build: {
    // Generate source maps for debugging
    sourcemap: false,
    // Minify output
    minify: 'esbuild',
    // Chunk size optimization
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split chunks by module
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['lucide-react']
        },
      },
    },
    // CSS optimization
    cssCodeSplit: true,
    // Reduce build output size
    target: 'esnext',
  },
});
