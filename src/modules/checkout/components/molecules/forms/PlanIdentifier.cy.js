import PlanIdentifierForm from './PlanIdentifierForm.vue'
import { setActivePinia, createPinia } from 'pinia'

import { planIdentifierPerSubscriptionType } from '@services/payment-service'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'
import usePaymentStore from '@store/payment'

describe('Payment Method Form', () => {
  const planIdentifierId = (id) => `plan-identifier-${id}`

  beforeEach(function () {
    setActivePinia(createPinia())
  })

  it('Validates professional plan', function () {
    cy.mount(PlanIdentifierForm)

    const plans = planIdentifierPerSubscriptionType[SubscriptionTypeEnum.PROFESSIONAL]

    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i]

      cy.get(`[data-cy="${planIdentifierId(plan)}"]`).should('be.visible')
    }
  })

  it('Validates student plan', function () {
    cy.mount(PlanIdentifierForm)

    // eslint-disable-next-line no-unused-vars
    const paymentStore = usePaymentStore()
    paymentStore.subscriptionType = SubscriptionTypeEnum.STUDENT

    const plans = planIdentifierPerSubscriptionType[SubscriptionTypeEnum.STUDENT]

    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i]

      cy.get(`[data-cy="${planIdentifierId(plan)}"]`).should('be.visible')
    }
  })
})
