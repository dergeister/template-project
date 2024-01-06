/**
 * @typedef {Object} ErrorEnum
 * @property {string} UNHANDLED_ERROR
 * @property {string} NO_CONNECTION
 * @property {string} INVALID_LOCALE
 * @property {string} INVALID_THEME
 * @property {string} SUBSCRIPTION_ERROR
 */

/**
 * @enum {ErrorEnum}
 */
const ErrorEnum = Object.freeze({
  UNHANDLED_ERROR: 'unhandled',
  NO_CONNECTION: 'noConnection',
  INVALID_LOCALE: 'invalidLocale',
  INVALID_THEME: 'invalidTheme',
  SUBSCRIPTION_ERROR: 'subscriptionError'
})

export default ErrorEnum
