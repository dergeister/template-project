// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillEmail', (email) => {
  cy.get('[data-cy="email-modal"]').should('be.visible')

  cy.get('[data-cy="email-input"]').type(email)
  cy.get('[data-cy="email-form-submit"]').click()
})

Cypress.Commands.add('fillCreditCard', (creditCard) => {
  cy.get('[data-cy="cc-number"]').type(creditCard.number)
  cy.get('[data-cy="cc-name"]').type(creditCard.name)
  cy.get('[data-cy="cc-cvv"]').type(creditCard.cvv)
  cy.get('[data-cy="cc-expirationDate"]').type(creditCard.expirationDate)
  cy.get('[data-cy="payment-method-form-submit').click()
})
