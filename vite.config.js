import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/presentation/components', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/application/services', import.meta.url)),
      '@enums': fileURLToPath(new URL('./src/domain/enums', import.meta.url))
    }
  }
})
