import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173, // Optional: specify your port
    strictPort: true, // Optional: fail if 5173 is taken instead of using random one
  },
  plugins: [react(), eslint()],
});
