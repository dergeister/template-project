import FormField from './FormField.vue'

describe('Form Field', () => {
  const label = 'Label test'
  const validationText = 'Validation text test'
  const helperText = 'Helper text test'

  it('Renders with label only', () => {
    cy.mount(FormField, { props: { label } })
    cy.get('[data-cy="form-field-label"]').should('contain', label)
  })

  it('Renders with label and required', () => {
    const requiredClass = 'form-field__label-text--required'
    const required = true

    cy.mount(FormField, { props: { label, required } })
    cy.get('[data-cy="form-field-label"]').should('contain', label)
    cy.get('[data-cy="form-field-label"]').should('have.class', requiredClass)
  })

  it('Renders with validation text and valid', () => {
    const invalid = false

    cy.mount(FormField, { props: { label, validationText, invalid } })
    cy.get('[data-cy="form-field-validation-text"]').should('not.be.visible')
    cy.get('[data-cy="form-field-validation-text"]').should('contain', validationText)
  })

  it('Renders with validation text and invalid', () => {
    const invalid = true

    cy.mount(FormField, { props: { label, validationText, invalid } })
    cy.get('[data-cy="form-field-validation-text"]').should('be.visible')
    cy.get('[data-cy="form-field-validation-text"]').should('contain', validationText)
  })

  it('Renders with helper text', () => {
    cy.mount(FormField, { props: { label, helperText } })
    cy.get('[data-cy="form-field-helper-text"]').should('be.visible')
    cy.get('[data-cy="form-field-helper-text"]').should('contain', helperText)
  })
})
