import Errors from '@enums/Errors'

import i18n from '@common/i18n'

class CustomError {
  constructor(type, config) {
    this.type = type
    this.config = config
  }
}

class CustomErrorConfig {
  constructor(severty, summary, detail, life) {
    this.severity = severty
    this.summary = summary
    this.detail = detail
    this.life = life
  }
}

class CustomErrorFactory {
  constructor() {
    const { t } = i18n.global

    this.t = t
  }

  static createLocaleNotFoundError = () => {
    const config = new CustomErrorConfig(
      'error',
      this.t('errorHandler.invalidLocale.title'),
      this.t('errorHandler.invalidLocale.message'),
      5000
    )

    return new CustomError({
      type: Errors.INVALID_LOCALE,
      config
    })
  }

  static createInvalidThemeError = () => {
    const config = new CustomErrorConfig(
      'warn',
      this.t('errorHandler.invalidTheme.title'),
      this.t('errorHandler.invalidTheme.message'),
      5000
    )

    return new CustomError({
      type: Errors.INVALID_THEME,
      config
    })
  }

  static createNutritionistNotFoundError = () => {
    const config = new CustomErrorConfig(
      'error',
      this.t('errorHandler.nutritionistNotFound.title'),
      this.t('errorHandler.nutritionistNotFound.message'),
      5000
    )

    return new CustomError({
      type: Errors.NUTRITIONIST_NOT_FOUND,
      config
    })
  }
}

export default CustomErrorFactory
