import EmailForm from './EmailForm.vue'
import { setActivePinia, createPinia } from 'pinia'

import ptBR from '@i18n/pt-BR'

describe('Email Form', () => {
  beforeEach(function () {
    setActivePinia(createPinia())

    cy.fixture('user').then((user) => {
      this.user = user
    })
  })

  it('Validates a correct e-mail', function () {
    cy.mount(EmailForm)

    cy.get('[data-cy="email-input"]').type(this.user.email)
    cy.get('[data-cy="email-form-submit"]').click()

    cy.get('[data-cy="form-field-email-validation-text"]').should('not.be.visible')
  })

  it('Validates the e-mail field', function () {
    cy.mount(EmailForm)

    const requiredValidation = ptBR.formValidation.required
    const emailValidation = ptBR.formValidation.email

    cy.get('[data-cy="email-form-submit"]').click()
    cy.get('[data-cy="form-field-email-validation-text"]').should('be.visible')
    cy.get('[data-cy="form-field-email-validation-text"]').should('have.text', requiredValidation)

    cy.get('[data-cy="email-input"]').type(this.user.invalidEmail)
    cy.get('[data-cy="form-field-email-validation-text"]').should('be.visible')
    cy.get('[data-cy="form-field-email-validation-text"]').should('have.text', emailValidation)
  })
})
