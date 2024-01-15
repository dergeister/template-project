import ThemeEnum from '../../../src/domain/enums/ThemeEnum'
import SubscriptionTypeEnum from '../../../src/domain/enums/SubscriptionTypeEnum'

describe('Themes', () => {
  beforeEach(function () {
    cy.fixture('user').then((user) => {
      this.user = user
    })

    cy.intercept({
      pathname: '/user/*'
    }).as('fetchUser')
  })

  it('Checks if checkout has professional theme', function () {
    cy.visit('/')

    cy.get('[data-cy="body"]').should('have.class', `system--${ThemeEnum.PROFESSIONAL}`)

    cy.get(`[data-cy="subscription-type-button-${SubscriptionTypeEnum.PROFESSIONAL}"]`).click()

    cy.fillEmail(this.user.email)

    cy.wait('@fetchUser')

    cy.get('[data-cy="body"]').should('have.class', `system--${ThemeEnum.PROFESSIONAL}`)
  })

  it('Checks if checkout has student theme', function () {
    cy.visit('/')

    cy.get('[data-cy="body"]').should('have.class', `system--${ThemeEnum.PROFESSIONAL}`)

    cy.get(`[data-cy="subscription-type-button-${SubscriptionTypeEnum.STUDENT}"]`).click()

    cy.fillEmail(this.user.email)

    cy.wait('@fetchUser')

    cy.get('[data-cy="body"]').should('have.class', `system--${ThemeEnum.STUDENT}`)
  })
})
