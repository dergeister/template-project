import ErrorEnum from '@enums/ErrorEnum'

import i18n from '@i18n'

import CustomError from '@models/CustomError'

class CustomErrorFactory {
  /**
   * Creates CustomError objects based on the given ErrorEnum
   * @param {ErrorEnum} type The error to be created
   * @param {number} errorLife The error life time in miliseconds
   * @returns {CustomError} The read only CustomError object
   */
  static createCustomError = (errorType, errorLife = 5000) => {
    const { t } = i18n.global

    if (!errorType) {
      errorType = ErrorEnum.UNHANDLED_ERROR
    }

    const customError = new CustomError(
      'error',
      t(`errorHandler.${errorType}.title`),
      t(`errorHandler.${errorType}.message`),
      errorLife
    )

    return customError
  }
}

export default CustomErrorFactory
