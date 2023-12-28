/**
 * @typedef {string} EventEnum
 * @property {string} CHANGE_THEME
 * @property {string} CHANGE_LOCALE
 * @property {string} HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK
 * @property {string} HOME_EMAIL_FORM_SUCCESS
 * @property {string} HOME_EMAIL_FORM_ERROR
 */

/**
 * @enum {EventEnum}
 */
const EventEnum = Object.freeze({
  CHANGE_THEME: 'CHANGE_THEME',
  CHANGE_LOCALE: 'CHANGE_LOCALE',
  HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK: 'HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK',
  HOME_EMAIL_FORM_SUCCESS: 'HOME_EMAIL_FORM_SUCCESS',
  HOME_EMAIL_FORM_ERROR: 'HOME_EMAIL_FORM_ERROR'
})

export default EventEnum
