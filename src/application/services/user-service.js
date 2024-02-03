/**
 * Sanitizes the user's email
 * @param {string} email The email to be sanitized
 * @returns {object} The sanitized email
 */
const sanitizeUserEmail = (email) => {
  return email.trim()
}

/**
 * Maps the user response object to js patterns
 * @param {object} user The user response object to map
 * @returns {object} The mapped user object
 */
const mapUser = (user) => {
  return {
    id: user.Id,
    email: user.Email
  }
}

export { sanitizeUserEmail, mapUser }
