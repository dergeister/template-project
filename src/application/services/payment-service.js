import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

import { createInstallments } from '@helpers/dinero-helper'
import PlanFactory from '@factories/PlanFactory'

export default class PaymentService {
  /**
   * An object containing all the Subscription Types as keys and their respective Plan Identifiers as an array
   */
  static planIdentifierPerSubscriptionType = Object.freeze({
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
  })

  /**
   * Sanitizes the subscription object
   * @param {object} subscription The subscription to be sanitized
   * @returns {object} The sanitized subscription object
   */
  static sanitizeSubscription = (subscription) => {
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

  /**
   * Creates an array of Plans to be displayed
   * @param {SubscriptionTypeEnum} subscriptionType The Subscription Type to create the plans
   * @returns {Array} An array of plans
   */
  static plansPerSubscriptionType = (subscriptionType) => {
    const plansToCreate = this.planIdentifierPerSubscriptionType[subscriptionType]
    const plansList = []

    for (let i = 0; i < plansToCreate.length; i++) {
      const planIdentifier = plansToCreate[i]
      const plan = PlanFactory.createPlan(planIdentifier)
      const installments = createInstallments(plan.price, plan.installments)

      plansList.push({
        label: plan.name,
        price: installments[0].price,
        planIdentifier
      })
    }

    return plansList
  }
}
