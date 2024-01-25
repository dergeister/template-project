import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@enums': fileURLToPath(new URL('./src/domain/enums', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/domain/models', import.meta.url)),
      '@factories': fileURLToPath(new URL('./src/domain/factories', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/presentation/modules/_common', import.meta.url)),
      '@home': fileURLToPath(new URL('./src/presentation/modules/home', import.meta.url)),
      '@checkout': fileURLToPath(new URL('./src/presentation/modules/checkout', import.meta.url)),
      '@i18n': fileURLToPath(new URL('./src/presentation/i18n', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/infrastructure/api', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/presentation/router', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/application/stores', import.meta.url)),
      '@middlewares': fileURLToPath(new URL('./src/presentation/middlewares', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/application/helpers', import.meta.url)),
      '@mixins': fileURLToPath(new URL('./src/presentation/mixins', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/application/services', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@assets/styles/variables.scss";`
      }
    }
  }
})
