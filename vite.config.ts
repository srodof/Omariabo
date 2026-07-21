import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const portable = mode === 'portable'
  return {
    plugins: [react(), ...(portable ? [viteSingleFile()] : [])],
    build: portable
      ? {
          // Incrusta fotos y fuentes como base64 en vez de archivos aparte,
          // para que el resultado sea un único .html sin dependencias externas.
          assetsInlineLimit: 100 * 1024 * 1024,
          cssCodeSplit: false,
          outDir: 'dist-portable',
        }
      : {
          // Build normal: incluye el catálogo (index.html) y la tienda (tienda.html).
          rollupOptions: {
            input: {
              main: resolve(__dirname, 'index.html'),
              tienda: resolve(__dirname, 'tienda.html'),
            },
          },
        },
  }
})
