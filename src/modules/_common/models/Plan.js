export default class Plan {
  /**
   * The Plan object
   * @param {PlanIdentifierEnumEnum} identifier The type of the Subscription
   * @param {string} name The name of the Plan
   * @param {number} price The plan's price in cents
   * @param {number} installments The number of installments allowed
   */
  constructor(identifier, name, price, installments) {
    this.identifier = identifier
    this.name = name
    this.price = price
    this.installments = installments
  }
}
