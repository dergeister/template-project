import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

/**
 * Sanitizes the subscription object
 * @param {object} subscription The subscription to be sanitized
 * @returns {object} The sanitized subscription object
 */
const sanitizeSubscription = (subscription) => {
  const credit_card = { ...subscription.creditCard }

  const ccName = credit_card.name.trim()
  const ccNumber = credit_card.number.replaceAll(' ', '')

  credit_card.name = ccName
  credit_card.number = ccNumber

  return {
    user_id: subscription.userId,
    credit_card,
    plan_identifier: subscription.planIdentifier
  }
}

const planIdentifierPerSubscriptionType = {
  [SubscriptionTypeEnum.PROFESSIONAL]: [
    PlanIdentifierEnum.MONTHLY,
    PlanIdentifierEnum.QUARTERLY,
    PlanIdentifierEnum.SEMESTER,
    PlanIdentifierEnum.YEARLY
  ],
  [SubscriptionTypeEnum.STUDENT]: [
    PlanIdentifierEnum.STUDENT_MONTHLY,
    PlanIdentifierEnum.STUDENT_YEARLY
  ]
}

export { sanitizeSubscription, planIdentifierPerSubscriptionType }
