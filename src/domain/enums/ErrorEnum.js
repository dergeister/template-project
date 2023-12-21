/**
 * @typedef {Object} ErrorEnum
 * @property {string} UNHANDLED_ERROR
 * @property {string} INVALID_LOCALE
 * @property {string} INVALID_THEME
 */

/**
 * @enum {ErrorEnum}
 */
const ErrorEnum = Object.freeze({
  UNHANDLED_ERROR: 'unhandled',
  INVALID_LOCALE: 'invalidLocale',
  INVALID_THEME: 'invalidTheme'
})

export default ErrorEnum
