import PlanIdentifierSelectButton from './PlanIdentifierSelectButton.vue'
import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'

describe('Plan Identifier Select Button', () => {
  const professionalPlan = {
    label: 'Plan test 1',
    price: 'R$ 00,00',
    planIdentifier: PlanIdentifierEnum.MONTHLY
  }

  const studentPlan = {
    label: 'Plan test 2',
    price: 'R$ 12,34',
    planIdentifier: PlanIdentifierEnum.STUDENT_YEARLY
  }

  const plans = [professionalPlan, studentPlan]

  it('Renders properly', () => {
    cy.mount(PlanIdentifierSelectButton, {
      props: { plans }
    })

    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i]

      cy.get(`[data-cy="plan-identifier-${plan.planIdentifier}"]`).should('contain', plan.label)
      cy.get(`[data-cy="plan-identifier-price-${plan.planIdentifier}"]`).should(
        'contain',
        plan.price
      )
    }
  })

  it('Selects the first option', () => {
    cy.mount(PlanIdentifierSelectButton, {
      props: { plans }
    })

    const plan = plans[0]

    const btn = cy.get(`[data-cy="plan-identifier-${plan.planIdentifier}"]`)

    btn.click()
    btn.parent().should('have.class', 'p-highlight')
  })
})
