import mitt from 'mitt'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import setupPinia from '@store'

const registerCommon = (app) => {
  const emitter = mitt()
  app.config.globalProperties.emitter = emitter

  app.use(setupPinia(emitter))
  app.use(PrimeVue)
  app.use(ToastService)
}

export default registerCommon
