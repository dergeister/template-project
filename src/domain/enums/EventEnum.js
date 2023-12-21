/**
 * @typedef {string} EventEnum
 * @property {string} CHANGE_THEME
 * @property {string} CHANGE_LOCALE
 * @property {string} HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK
 */

/**
 * @enum {EventEnum}
 */
const EventEnum = Object.freeze({
  CHANGE_THEME: 'CHANGE_THEME',
  CHANGE_LOCALE: 'CHANGE_LOCALE',
  HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK: 'HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK'
})

export default EventEnum
