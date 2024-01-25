export default class UserService {
  /**
   * Sanitizes the user's email
   * @param {string} email The email to be sanitized
   * @returns {object} The sanitized email
   */
  static sanitizeUserEmail = (email) => {
    return email.trim()
  }
}
