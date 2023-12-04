import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@enums': fileURLToPath(new URL('./src/domain/enums', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/domain/models', import.meta.url)),
      '@factories': fileURLToPath(new URL('./src/domain/factories', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/modules/_common', import.meta.url)),
      '@home': fileURLToPath(new URL('./src/modules/home', import.meta.url)),
      '@checkout': fileURLToPath(new URL('./src/modules/checkout', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@assets/styles/variables.scss";`
      }
    }
  }
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //       admin: resolve(__dirname, 'admin/index.html')
  //     }
  //   }
  // }
})
