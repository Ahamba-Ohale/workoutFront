import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  port: 8080,
  build: {
    target: 'esnext',
    outDir: 'build', // Adjust this to your desired output directory
  },
  plugins: [react()],
})
