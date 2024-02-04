import { createI18n } from 'vue-i18n'

import pt from './pt-BR'
import en from './en-US'

import localeConfig from '@config/locale'

const i18n = createI18n({
  legacy: false,
  locale: localeConfig.defaultLocale,
  messages: {
    pt,
    en
  }
})

export default i18n
