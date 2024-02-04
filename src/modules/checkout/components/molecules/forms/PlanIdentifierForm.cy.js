import PlanIdentifierForm from './PlanIdentifierForm.vue'
import { setActivePinia, createPinia } from 'pinia'

import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'
import usePaymentStore from '@store/payment'

import { plansPerSubscriptionType } from '@common/data/plans'

describe('Payment Method Form', () => {
  const planIdentifierId = (id) => `plan-identifier-${id}`

  beforeEach(function () {
    setActivePinia(createPinia())
  })

  it('Validates professional plan', function () {
    cy.mount(PlanIdentifierForm)

    const plans = plansPerSubscriptionType[SubscriptionTypeEnum.PROFESSIONAL]

    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i].identifier

      cy.get(`[data-cy="${planIdentifierId(plan)}"]`).should('be.visible')
    }
  })

  it('Validates student plan', function () {
    cy.mount(PlanIdentifierForm)

    const paymentStore = usePaymentStore()
    paymentStore.subscriptionType = SubscriptionTypeEnum.STUDENT

    const plans = plansPerSubscriptionType[SubscriptionTypeEnum.STUDENT]

    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i].identifier

      cy.get(`[data-cy="${planIdentifierId(plan)}"]`).should('be.visible')
    }
  })
})
