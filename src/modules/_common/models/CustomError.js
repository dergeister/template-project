export default class CustomError {
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
