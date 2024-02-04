/**
 * Creates a fake delay to simulate requests
 * @returns {Promise}
 */
const delay = async () => {
  return new Promise((resolve) => setTimeout(resolve, 500))
}

export default delay
