// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import global styles
import '@assets/styles/global.scss'

import { mount } from 'cypress/vue'
import i18n from '@i18n'
import setupPinia from '@store'

// Cypress.Commands.add('mount', mount)
Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {}
  options.global.plugins = options.global.plugins || []
  options.global.plugins.push(i18n)
  options.global.plugins.push(setupPinia)

  return mount(component, options)
})
