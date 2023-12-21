/**
 * @typedef {string} ErrorEnum
 */

/**
 * @enum {ErrorEnum}
 */
const ErrorEnum = Object.freeze({
  UNHANDLED_ERROR: 'unhandled',
  INVALID_LOCALE: 'invalidLocale',
  INVALID_THEME: 'invalidTheme',
  NUTRITIONIST_NOT_FOUND: 'nutritionistNotFound'
})

export default ErrorEnum
