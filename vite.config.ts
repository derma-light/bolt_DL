import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    plugins: [react()],
    base: '/',
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    server: isDev ? {
      host: true,
      port: 5173,
      strictPort: false,
      hmr: {
        overlay: true,
        clientPort: 5173,
      },
    } : undefined,
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      target: 'es2020',
      sourcemap: false,
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
  };
});
