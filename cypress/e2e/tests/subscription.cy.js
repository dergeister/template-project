import SubscriptionTypeEnum from '../../../src/domain/enums/SubscriptionTypeEnum'
import PlanIdentifierEnum from '../../../src/domain/enums/PlanIdentifierEnum'

import ptBR from '../../../src/presentation/i18n/pt-BR'

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

    cy.fillEmail(this.user.email)

    cy.wait('@fetchUser')

    cy.get('[data-cy="plan-identifier-form"]').should('be.visible')
    cy.get('[data-cy="payment-method-form"]').should('be.visible')

    cy.get(`[data-cy="plan-identifier-${PlanIdentifierEnum.QUARTERLY}"]`).click()

    cy.fillCreditCard(this.creditCard)

    cy.wait('@postSubscription')

    cy.get('[data-cy="thankyou-title"]').should('be.visible')
  })

  it('Subscribes for monthly student plan', function () {
    cy.visit('/')

    cy.get(`[data-cy="subscription-type-button-${SubscriptionTypeEnum.STUDENT}"]`).click()

    cy.fillEmail(this.user.email)

    cy.wait('@fetchUser')

    cy.get('[data-cy="plan-identifier-form"]').should('be.visible')
    cy.get('[data-cy="payment-method-form"]').should('be.visible')

    cy.get(`[data-cy="plan-identifier-${PlanIdentifierEnum.STUDENT_MONTHLY}"]`).click()

    cy.fillCreditCard(this.creditCard)

    cy.wait('@postSubscription')

    cy.get('[data-cy="thankyou-title"]').should('be.visible')
  })

  it('Validates nonexistent user', function () {
    const userNotFound = ptBR.errorHandler.fetchUserByEmailError.title

    cy.visit('/')

    cy.get(`[data-cy="subscription-type-button-${SubscriptionTypeEnum.PROFESSIONAL}"]`).click()

    cy.get('[data-cy="email-modal"]').should('be.visible')

    cy.get('[data-cy="email-input"]').type(this.user.nonExistentEmail)
    cy.get('[data-cy="email-form-submit"]').click()

    cy.wait('@fetchUser')

    cy.get('.p-toast-summary').should('have.text', userNotFound)
  })
})
