import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Incluye el catálogo (index.html) y la tienda (tienda.html).
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tienda: resolve(__dirname, 'tienda.html'),
      },
    },
  },
})
