import SubscriptionTypeCardButton from './SubscriptionTypeCardButton.vue'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

describe('Subscrtiption Type Card Button', () => {
  it('Renders properly the professional variation', () => {
    cy.mount(SubscriptionTypeCardButton, {
      props: { variation: SubscriptionTypeEnum.PROFESSIONAL }
    })

    const dataCy = `subscription-type-button-${SubscriptionTypeEnum.PROFESSIONAL}`
    const btnClass = `system-btn--${SubscriptionTypeEnum.PROFESSIONAL}`

    cy.get(`[data-cy="${dataCy}"]`).should('have.class', btnClass)
  })

  it('Renders properly the student variation', () => {
    cy.mount(SubscriptionTypeCardButton, {
      props: { variation: SubscriptionTypeEnum.STUDENT }
    })

    const dataCy = `subscription-type-button-${SubscriptionTypeEnum.STUDENT}`
    const btnClass = `system-btn--${SubscriptionTypeEnum.STUDENT}`

    cy.get(`[data-cy="${dataCy}"]`).should('have.class', btnClass)
  })
})
