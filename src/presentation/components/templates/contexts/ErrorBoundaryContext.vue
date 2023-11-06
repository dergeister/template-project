<template>
  <div id="error-boundary-context">
    <Toast />
    <slot></slot>
  </div>
</template>
<script>
import Toast from 'primevue/toast'

import Errors from '@enums/Errors'

import CustomErrorFactory from '@factories/CustomErrorFactory'

export default {
  components: {
    Toast
  },
  errorCaptured(error) {
    const errorType = error.message

    switch (errorType) {
      case Errors.INVALID_LOCALE:
        this.$toast.add(CustomErrorFactory.createInvalidLocaleError().config)
        break
      case Errors.INVALID_THEME:
        this.$toast.add(CustomErrorFactory.createInvalidThemeError().config)
        break
      default:
        console.error(error)
        break
    }

    return false
  }
}
</script>
<style lang="scss"></style>
