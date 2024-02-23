import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    outDir: '../backend/public', // Output build files to the backend's public directory
    assetsDir: '.',
  },
  server: {
    port: 8080, 
  },

  plugins: [react()],
})
