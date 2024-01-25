const vuelidateMixins = {
  data() {
    return {
      submitted: false
    }
  },
  methods: {
    /**
     * Sets the form dirty and marks the object as submitted
     */
    submit() {
      this.submitted = true
      this.v$.$touch()
    },
    /**
     * Returns the error message if the form is submitted, in case there is multiple  for the current field state
     * @param {string} field The path of the field
     * @example 'email' | 'form.email'
     * @returns {string} The error message
     */
    getFieldErrorMessage(field) {
      const error = this.v$.$errors.find((e) => e.$propertyPath == field)
      return this.submitted && error ? error.$message : ''
    },
    /**
     * Get wheater the field is invalid or not if the form is submitted
     * @param {string} field The path of the field
     * @example 'email' | 'form.email'
     * @returns {bool} The invalid state
     */
    getFieldInvalid(field) {
      return this.submitted ? this.v$[field].$invalid : false
    },
    /**
     * Get the class to apply to the input based on the field state
     * @param {string} field  The path of the field
     * @example 'email' | 'form.email'
     * @returns {string} The class string
     */
    getInputStateClass(field) {
      return this.getFieldInvalid(field) ? 'p-invalid' : ''
    }
  }
}

export default vuelidateMixins
