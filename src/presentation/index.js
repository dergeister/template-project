import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import i18n from './i18n'
import router from './router'

const setupPresentation = (app) => {
  app.use(PrimeVue)
  app.use(ToastService)

  app.use(i18n)
  app.use(router)
}

export default setupPresentation
