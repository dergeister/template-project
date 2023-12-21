<template>
  <div id="error-boundary-context">
    <Toast />
    <slot></slot>
  </div>
</template>
<script>
import Toast from 'primevue/toast'

import CustomErrorFactory from '@factories/CustomErrorFactory'

export default {
  components: {
    Toast
  },
  errorCaptured(error) {
    const errorType = error.message

    this.$toast.add(CustomErrorFactory.createCustomError(errorType).config)

    return false
  }
}
</script>
<style lang="scss"></style>
