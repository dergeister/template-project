import coreApi from './core'
import paymentApi from './payment'

import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

/**
 * Creates an API object with all APIs passing and event emitter
 * @param {object} emitter The emitter instance
 * @returns {object} The API object
 */
const setupAPI = (emitter) => {
  addResponseInterceptor(coreApi, emitter)
  addResponseInterceptor(paymentApi, emitter)

  return {
    core: coreApi,
    payment: paymentApi
  }
}

/**
 * Adds the event emitter to the response interceptor to handle unbound
 * @param {object} api The API object
 * @param {object} emitter The event emitter
 */
const addResponseInterceptor = (api, emitter) => {
  api.interceptors.response.handlers = []

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.code == 'ERR_NETWORK') {
        emitter.emit(EventEnum.UNBOUND_ERROR, ErrorEnum.NO_CONNECTION)
      }

      return Promise.reject(error)
    }
  )
}

export default setupAPI
