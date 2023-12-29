import { markRaw } from 'vue'
import { createPinia } from 'pinia'

/**
 * Creates Pinia passing and event emitter
 * @param {object} emitter The emitter instance
 * @returns {object} Pinia
 */
const setupPinia = (emitter) => {
  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.emitter = markRaw(emitter)
  })

  return pinia
}

export default setupPinia
