import PaymentMethodForm from './PaymentMethodForm.vue'
import { setActivePinia, createPinia } from 'pinia'

import ptBR from '@common/i18n/pt-BR/index'

describe('Payment Method Form', () => {
  const requiredField = ptBR.formValidation.required

  const validationId = (id) => `form-field-${id}-validation-text`

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Validates the Number field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-number'
    const numberValidation = ptBR.formValidation.creditCard.number

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredField)

    cy.get(`[data-cy="${id}"]`).type('1234')
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', numberValidation)

    cy.get(`[data-cy="${id}"]`).type('123412341234')
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })

  it('Validates the Name field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-name'

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredField)

    cy.get(`[data-cy="${id}"]`).type('test')
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })

  it('Validates the CVV field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-cvv'
    const cvvValidation = ptBR.formValidation.creditCard.cvv

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredField)

    cy.get(`[data-cy="${id}"]`).type('1')
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', cvvValidation)

    cy.get(`[data-cy="${id}"]`).type('23')
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })

  it('Validates the Expiration Date field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-expirationDate'
    const expirationDateValidation = ptBR.formValidation.creditCard.expirationDate

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredField)

    cy.get(`[data-cy="${id}"]`).type('1')
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', expirationDateValidation)

    cy.get(`[data-cy="${id}"]`).type('234')
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })
})
