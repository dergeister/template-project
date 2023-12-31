/**
 * @typedef {string} PlanIdentifierEnum
 * @property {string} PROFESSIONAL
 * @property {string} STUDENT
 */

/**
 * @enum {PlanIdentifierEnum}
 */
const PlanIdentifierEnum = Object.freeze({
  MONTHLY: 'monthly_plan',
  QUARTERLY: 'quarterly_plan',
  SEMESTER: 'semester_plan',
  YEARLY: 'yearly_plan'
})

export default PlanIdentifierEnum
