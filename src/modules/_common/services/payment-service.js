// eslint-disable-next-line no-unused-vars
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

import { createDineroInstance, formatDineroInstanceToReal } from '@common/helpers/dinero-helper'

import { plansPerSubscriptionType } from '@common/data/plans'

/**
 * Sanitizes the subscription object
 * @param {object} subscription The subscription to be sanitized
 * @returns {object} The sanitized subscription object
 */
const sanitizeSubscription = (subscription) => {
  const CreditCard = { ...subscription.creditCard }

  const ccName = CreditCard.name.trim()
  const ccNumber = CreditCard.number.replaceAll(' ', '')

  CreditCard.name = ccName
  CreditCard.number = ccNumber

  return {
    UserId: subscription.userId,
    CreditCard,
    PlanIdentifier: subscription.planIdentifier
  }
}

/**
 * Creates an array of Plans to be displayed
 * @param {SubscriptionTypeEnum} subscriptionType The Subscription Type to create the plans
 * @returns {Array} An array of plans
 */
const createSubscriptionPlans = (subscriptionType) => {
  const plansToCreate = plansPerSubscriptionType[subscriptionType]
  const plansList = []

  for (let i = 0; i < plansToCreate.length; i++) {
    const plan = plansToCreate[i]
    const installments = createInstallments(plan.price, plan.installments)

    plansList.push({
      label: plan.name,
      price: installments[0].price,
      planIdentifier: plan.identifier
    })
  }

  return plansList
}

/**
 * Creates a list of installments
 * @param {number} amount The total amount to be divided
 * @param {number} installments The total amount of installments
 * @returns {object[]} The list of installments
 */
const createInstallments = (amount, installments) => {
  const installmentsList = []

  const dineroInstance = createDineroInstance(amount)

  for (let i = 1; i <= installments; i++) {
    const diviedValue = dineroInstance.divide(i)

    installmentsList.push({
      installment: i,
      price: formatDineroInstanceToReal(diviedValue)
    })
  }

  return installmentsList
}

export { sanitizeSubscription, createSubscriptionPlans }
