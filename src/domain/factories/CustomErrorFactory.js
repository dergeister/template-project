import ErrorEnum from '@enums/ErrorEnum'

import i18n from '@common/i18n'

class CustomError {
  /**
   * The config object to be sent to the toast
   * @param {"error" | "success" | "info" | "warn"} severty
   * @param {string} summary The title of the toast error
   * @param {string} detail The description of the toast error
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
  /**
   * Creates CustomError objects based on the given ErrorEnum
   * @param {ErrorEnum} type The error to be created
   * @param {number} errorLife The error life time in miliseconds
   * @returns {CustomError} Custom error object
   */
  static createCustomError = (type, errorLife = 5000) => {
    const { t } = i18n.global
    let customError

    switch (type) {
      case ErrorEnum.INVALID_LOCALE:
        customError = new CustomError(
          'error',
          t('errorHandler.invalidLocale.title'),
          t('errorHandler.invalidLocale.message'),
          errorLife
        )
        break
      case ErrorEnum.INVALID_THEME:
        customError = new CustomError(
          'warn',
          t('errorHandler.invalidTheme.title'),
          t('errorHandler.invalidTheme.message'),
          errorLife
        )
        break
      case ErrorEnum.NUTRITIONIST_NOT_FOUND:
        customError = new CustomError(
          'error',
          t('errorHandler.nutritionistNotFound.title'),
          t('errorHandler.nutritionistNotFound.message'),
          errorLife
        )
        break
      default:
        customError = new CustomError(
          'error',
          t('errorHandler.unhandled.title'),
          t('errorHandler.unhandled.message'),
          errorLife
        )
        break
    }

    return customError
  }
}

export default CustomErrorFactory
