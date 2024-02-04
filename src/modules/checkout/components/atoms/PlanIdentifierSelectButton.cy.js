import PlanIdentifierSelectButton from './PlanIdentifierSelectButton.vue'

describe('Plan Identifier Select Button', () => {
  beforeEach(function () {
    cy.fixture('plans').then((p) => {
      this.plans = p
    })
  })

  it('Renders properly', function () {
    cy.mount(PlanIdentifierSelectButton, {
      props: { plans: this.plans }
    })

    for (let i = 0; i < this.plans.length; i++) {
      const plan = this.plans[i]

      cy.get(`[data-cy="plan-identifier-${plan.planIdentifier}"]`).should('contain', plan.label)
      cy.get(`[data-cy="plan-identifier-price-${plan.planIdentifier}"]`).should(
        'contain',
        plan.price
      )
    }
  })

  it('Selects the first option', function () {
    cy.mount(PlanIdentifierSelectButton, {
      props: { plans: this.plans }
    })

    const plan = this.plans[0]
    const id = `plan-identifier-${plan.planIdentifier}`

    cy.get(`[data-cy="${id}"]`)

    cy.get(`[data-cy="${id}"]`).click()
    cy.get(`[data-cy="${id}"]`).parent().should('have.class', 'p-highlight')
  })
})
