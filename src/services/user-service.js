/**
 * Sanitizes the user's email
 * @param {string} email The email to be sanitized
 * @returns {object} The sanitized email
 */
const sanitizeUserEmail = (email) => {
  return email.trim()
}

export { sanitizeUserEmail }
