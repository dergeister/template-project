import mitt from 'mitt'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import i18n from './i18n'
import router from './router'

const setupCommon = (app) => {
  const emitter = mitt()
  app.config.globalProperties.emitter = emitter

  app.use(createPinia())
  app.use(PrimeVue)
  app.use(ToastService)

  app.use(i18n)
  app.use(router)
}

export default setupCommon
