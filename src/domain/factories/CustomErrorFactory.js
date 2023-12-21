import ErrorEnum from '@/domain/enums/ErrorEnum'

import i18n from '@common/i18n'

class CustomError {
  /**
   * An object to structure custom system errors
   * @param {ErrorEnum} type The error to be created
   * @param {CustomErrorToastConfig} config The config object to be sent to the toast
   */
  constructor(type, config) {
    this.type = type
    this.config = config
  }
}

class CustomErrorToastConfig {
  /**
   * The config object to be sent to the toast
   * @param {"error" | "success" | "info" | "warn"} severty
   * @param {String} summary The title of the toast error
   * @param {String} detail The description of the toast error
   * @param {number} life The error's life time in miliseconds
   */
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
  /**
   * Creates CustomError objects based on the given ErrorEnum
   * @param {ErrorEnum} type The error to be created
   * @param {number} errorLife The error life time in miliseconds
   * @returns {CustomError} Custom error object
   */
  static createCustomError = (type, errorLife = 5000) => {
    let config

    switch (type) {
      case ErrorEnum.INVALID_LOCALE:
        config = new CustomErrorToastConfig(
          'error',
          this.t('errorHandler.invalidLocale.title'),
          this.t('errorHandler.invalidLocale.message'),
          errorLife
        )
        break
      case ErrorEnum.INVALID_THEME:
        config = new CustomErrorToastConfig(
          'warn',
          this.t('errorHandler.invalidTheme.title'),
          this.t('errorHandler.invalidTheme.message'),
          errorLife
        )
        break
      case ErrorEnum.NUTRITIONIST_NOT_FOUND:
        config = new CustomErrorToastConfig(
          'error',
          this.t('errorHandler.nutritionistNotFound.title'),
          this.t('errorHandler.nutritionistNotFound.message'),
          errorLife
        )
        break
      default:
        type = ErrorEnum.UNHANDLED

        config = new CustomErrorToastConfig(
          'error',
          this.t('errorHandler.unhandled.title'),
          this.t('errorHandler.unhandled.message'),
          errorLife
        )
        break
    }

    return new CustomError({
      type,
      config
    })
  }
}

export default CustomErrorFactory
