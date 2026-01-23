import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
      // "/api": "https://codecommerce.onrender.com",
      // "/uploads/": "https://codecommerce.onrender.com",
    }
  }
})