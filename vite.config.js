import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  "scripts": {
    "build": "vite build"
  },
  plugins: [react()],
})
