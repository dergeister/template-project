import { createPinia } from 'pinia'

const setupApplication = (app) => {
  app.use(createPinia())
}

export default setupApplication
