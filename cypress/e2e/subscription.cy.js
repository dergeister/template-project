import SubscriptionTypeEnum from '../../src/domain/enums/SubscriptionTypeEnum'
import PlanIdentifierEnum from '../../src/domain/enums/PlanIdentifierEnum'

describe('Subscription', () => {
  beforeEach(function () {
    cy.fixture('user').then((user) => {
      this.user = user
    })

    cy.fixture('credit-card').then((cc) => {
      this.creditCard = cc
    })

    cy.intercept({
      pathname: '/user/*'
    }).as('fetchUser')

    cy.intercept({
      pathname: '/subscriptions'
    }).as('postSubscription')
  })

  it('Subscribes for quarterly professional plan', function () {
    cy.visit('/')

    cy.get(`[data-cy="subscription-type-button-${SubscriptionTypeEnum.PROFESSIONAL}"]`).click()

    cy.get('[data-cy="email-modal"]').should('be.visible')

    cy.get('[data-cy="email-input"]').type(this.user.email)
    cy.get('[data-cy="email-form-submit"]').click()

    cy.wait('@fetchUser')

    cy.get('[data-cy="plan-identifier-form"]').should('be.visible')
    cy.get('[data-cy="payment-method-form"]').should('be.visible')

    cy.get('[data-cy="body"]').should('have.class', 'system--professional')

    cy.get(`[data-cy="plan-identifier-${PlanIdentifierEnum.QUARTERLY}"]`).click()

    cy.get('[data-cy="cc-number"]').type(this.creditCard.number)
    cy.get('[data-cy="cc-name"]').type(this.creditCard.name)
    cy.get('[data-cy="cc-cvv"]').type(this.creditCard.cvv)
    cy.get('[data-cy="cc-expirationDate"]').type(this.creditCard.expirationDate)
    cy.get('[data-cy="payment-method-form-submit').click()

    cy.wait('@postSubscription')

    cy.get('[data-cy="thankyou-title"]').should('be.visible')
  })
})
