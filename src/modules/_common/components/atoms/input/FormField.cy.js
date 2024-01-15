import FormField from './FormField.vue'

describe('Form Field', () => {
  beforeEach(function () {
    cy.fixture('form-field').then((ff) => {
      this.formField = ff
    })
  })

  it('Renders with label only', function () {
    cy.mount(FormField, {
      props: { label: this.formField.label },
      slots: {
        default: {
          render: () => 'Slot'
        }
      }
    })
    cy.get('[data-cy="form-field-item-label"]').should('contain', this.formField.label)
  })

  it('Renders with label and required', function () {
    const requiredClass = 'form-field__label-text--required'
    const required = true

    cy.mount(FormField, {
      props: { label: this.formField.label, required },
      slots: {
        default: {
          render: () => 'Slot'
        }
      }
    })
    cy.get('[data-cy="form-field-item-label"]').should('contain', this.formField.label)
    cy.get('[data-cy="form-field-item-label"]').should('have.class', requiredClass)
  })

  it('Renders with validation text and valid', function () {
    const invalid = false

    cy.mount(FormField, {
      props: {
        label: this.formField.label,
        validationText: this.formField.validationText,
        invalid
      },
      slots: {
        default: {
          render: () => 'Slot'
        }
      }
    })
    cy.get('[data-cy="form-field-item-validation-text"]').should('not.be.visible')
    cy.get('[data-cy="form-field-item-validation-text"]').should(
      'contain',
      this.formField.validationText
    )
  })

  it('Renders with validation text and invalid', function () {
    const invalid = true

    cy.mount(FormField, {
      props: {
        label: this.formField.label,
        validationText: this.formField.validationText,
        invalid
      },
      slots: {
        default: {
          render: () => 'Slot'
        }
      }
    })
    cy.get('[data-cy="form-field-item-validation-text"]').should('be.visible')
    cy.get('[data-cy="form-field-item-validation-text"]').should(
      'contain',
      this.formField.validationText
    )
  })

  it('Renders with helper text', function () {
    cy.mount(FormField, {
      props: { label: this.formField.label, helperText: this.formField.helperText },
      slots: {
        default: {
          render: () => 'Slot'
        }
      }
    })
    cy.get('[data-cy="form-field-item-helper-text"]').should('be.visible')
    cy.get('[data-cy="form-field-item-helper-text"]').should('contain', this.formField.helperText)
  })
})
