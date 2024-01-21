import PaymentMethodForm from './PaymentMethodForm.vue'
import { setActivePinia, createPinia } from 'pinia'

import ptBR from '@i18n/pt-BR'

describe('Payment Method Form', () => {
  const requiredValidation = ptBR.formValidation.required

  const validationId = (id) => `form-field-${id}-validation-text`

  beforeEach(function () {
    setActivePinia(createPinia())

    cy.fixture('credit-card').then((cc) => {
      this.creditCard = cc
    })
  })

  it('Validates the Number field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-number'
    const numberValidation = ptBR.formValidation.creditCard.number

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredValidation)

    cy.get(`[data-cy="${id}"]`).type(this.creditCard.invalidNumber)
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', numberValidation)

    cy.get(`[data-cy="${id}"]`).clear()
    cy.get(`[data-cy="${id}"]`).type(this.creditCard.number)
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })

  it('Validates the Name field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-name'

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredValidation)

    cy.get(`[data-cy="${id}"]`).clear()
    cy.get(`[data-cy="${id}"]`).type(this.creditCard.name)
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })

  it('Validates the CVV field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-cvv'
    const cvvValidation = ptBR.formValidation.creditCard.cvv

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredValidation)

    cy.get(`[data-cy="${id}"]`).type(this.creditCard.invalidCvv)
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', cvvValidation)

    cy.get(`[data-cy="${id}"]`).clear()
    cy.get(`[data-cy="${id}"]`).type(this.creditCard.cvv)
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })

  it('Validates the Expiration Date field', function () {
    cy.mount(PaymentMethodForm)

    const id = 'cc-expirationDate'
    const expirationDateValidation = ptBR.formValidation.creditCard.expirationDate

    cy.get('[data-cy="payment-method-form-submit"').click()
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', requiredValidation)

    cy.get(`[data-cy="${id}"]`).type(this.creditCard.invalidExpirationDate)
    cy.get(`[data-cy="${validationId(id)}"]`).should('be.visible')
    cy.get(`[data-cy="${validationId(id)}"]`).should('have.text', expirationDateValidation)

    cy.get(`[data-cy="${id}"]`).clear()
    cy.get(`[data-cy="${id}"]`).type(this.creditCard.expirationDate)
    cy.get(`[data-cy="${validationId(id)}"]`).should('not.be.visible')
  })

  it('Validates valid form', function () {
    cy.mount(PaymentMethodForm)

    cy.get(`[data-cy="cc-number"]`).type(this.creditCard.number)
    cy.get(`[data-cy="cc-name"]`).type(this.creditCard.name)
    cy.get(`[data-cy="cc-cvv"]`).type(this.creditCard.cvv)
    cy.get(`[data-cy="cc-expirationDate"]`).type(this.creditCard.expirationDate)

    cy.get(`[data-cy="${validationId('cc-name')}"]`).should('not.be.visible')
    cy.get(`[data-cy="${validationId('cc-name')}"]`).should('not.be.visible')
    cy.get(`[data-cy="${validationId('cc-cvv')}"]`).should('not.be.visible')
    cy.get(`[data-cy="${validationId('cc-cvv')}"]`).should('not.be.visible')

    cy.get('[data-cy="payment-method-form-submit"').click()
  })
})
