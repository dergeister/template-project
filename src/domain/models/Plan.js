export default class Plan {
  /**
   * The Plan object
   * @param {PlanIdentifierEnumEnum} type The type of the Subscription
   * @param {string} name The name of the Plan
   * @param {number} price The plan's price in cents
   * @param {number} installments The number of installments allowed
   */
  constructor(type, name, price, installments) {
    this.type = type
    this.name = name
    this.price = price
    this.installments = installments
  }
}
