import mitt from 'mitt'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import i18n from '@i18n'
import router from '@router'
import setupPinia from '@store'

const registerPresentation = (app) => {
  const emitter = mitt()
  app.config.globalProperties.emitter = emitter

  app.use(setupPinia(emitter))
  app.use(PrimeVue)
  app.use(ToastService)

  app.use(i18n)
  app.use(router)
}

export default registerPresentation
