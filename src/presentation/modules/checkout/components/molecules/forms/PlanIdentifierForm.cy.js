import PlanIdentifierForm from './PlanIdentifierForm.vue'
import { setActivePinia, createPinia } from 'pinia'

import PaymentService from '@services/payment-service'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'
import usePaymentStore from '@store/payment'

describe('Payment Method Form', () => {
  const planIdentifierId = (id) => `plan-identifier-${id}`

  beforeEach(function () {
    setActivePinia(createPinia())
  })

  it('Validates professional plan', function () {
    cy.mount(PlanIdentifierForm)

    const plans =
      PaymentService.planIdentifierPerSubscriptionType[SubscriptionTypeEnum.PROFESSIONAL]

    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i]

      cy.get(`[data-cy="${planIdentifierId(plan)}"]`).should('be.visible')
    }
  })

  it('Validates student plan', function () {
    cy.mount(PlanIdentifierForm)

    const paymentStore = usePaymentStore()
    paymentStore.subscriptionType = SubscriptionTypeEnum.STUDENT

    const plans = PaymentService.planIdentifierPerSubscriptionType[SubscriptionTypeEnum.STUDENT]

    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i]

      cy.get(`[data-cy="${planIdentifierId(plan)}"]`).should('be.visible')
    }
  })
})
