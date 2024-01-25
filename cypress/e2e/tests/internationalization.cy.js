import LocaleEnum from '../../../src/domain/enums/LocaleEnum'

import ptBR from '../../../src/presentation/i18n/pt-BR'
import enUS from '../../../src/presentation/i18n/en-US'

describe('Internationalization', () => {
  it('Changes from PT to EN and back to PT', function () {
    const titlePT = ptBR.homeHeader.title
    const titleEN = enUS.homeHeader.title

    cy.visit('/')

    cy.get('[data-cy="home-header-title"]').should('have.text', titlePT)

    cy.get(`[data-cy="locale-${LocaleEnum.EN}"]`).click()
    cy.get('[data-cy="home-header-title"]').should('have.text', titleEN)

    cy.get(`[data-cy="locale-${LocaleEnum.PT}"]`).click()
    cy.get('[data-cy="home-header-title"]').should('have.text', titlePT)
  })
})
