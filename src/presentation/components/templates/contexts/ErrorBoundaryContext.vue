<template>
  <div id="error-boundary-context">
    <Toast />
    <slot></slot>
  </div>
</template>
<script>
import Toast from 'primevue/toast'

import Errors from '@enums/Errors'

export default {
  components: {
    Toast
  },
  data() {
    return {
      toasts: [
        {
          type: Errors.NUTRITIONIST_NOT_FOUND,
          config: {
            severity: 'error',
            summary: this.$t('errorHandler.nutritionistNotFound.title'),
            detail: this.$t('errorHandler.nutritionistNotFound.message'),
            life: 5000
          }
        },
        {
          type: Errors.INVALID_LOCALE,
          config: {
            severity: 'warn',
            summary: this.$t('errorHandler.invalidLocale.title'),
            detail: this.$t('errorHandler.invalidLocale.message'),
            life: 5000
          }
        },
        {
          type: Errors.INVALID_THEME,
          config: {
            severity: 'warn',
            summary: this.$t('errorHandler.invalidTheme.title'),
            detail: this.$t('errorHandler.invalidTheme.message'),
            life: 5000
          }
        }
      ]
    }
  },
  errorCaptured(error) {
    const errorType = error.message
    const appError = this.toasts.find((e) => e.type == errorType)

    if (appError) {
      this.$toast.add(appError.config)
    } else {
      console.error(error)
    }

    return false
  }
}
</script>
<style lang="scss"></style>
