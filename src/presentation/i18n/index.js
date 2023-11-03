import { createI18n } from 'vue-i18n'

import pt from './pt-BR'
import en from './en-US'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  messages: {
    pt,
    en
  }
})

export default i18n
