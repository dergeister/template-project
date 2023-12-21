export default class Subscription {
  /**
   * The Subscription object
   * @param {SubscriptionTypeEnum} type The type of the Subscription
   * @param {string} name The name of the Subscription
   * @param {string} description The description of the Subscription
   * @param {string} pricing The formated price of the Subscription
   */
  constructor(type, name, description, pricing) {
    this.type = type
    this.name = name
    this.description = description
    this.pricing = pricing
  }
}
