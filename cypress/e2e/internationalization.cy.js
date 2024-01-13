import LocaleEnum from '../../src/domain/enums/LocaleEnum'

describe('Internationalization', () => {
  it('Changes from PT to EN and back to PT', function () {
    cy.visit('/')

    cy.get('[data-cy="home-header-title"]').should('have.text', 'Planos')

    cy.get(`[data-cy="locale-${LocaleEnum.EN}"]`).click()
    cy.get('[data-cy="home-header-title"]').should('have.text', 'Plans')

    cy.get(`[data-cy="locale-${LocaleEnum.PT}"]`).click()
    cy.get('[data-cy="home-header-title"]').should('have.text', 'Planos')
  })
})
