import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import setupAPI from '@common/api/index'

/**
 * Creates Pinia passing and event emitter
 * @param {object} emitter The emitter instance
 * @returns {object} Pinia
 */
const setupPinia = (emitter) => {
  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.emitter = markRaw(emitter)
    store.api = setupAPI(emitter)
  })

  return pinia
}

export default setupPinia
