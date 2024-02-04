<template>
  <div id="error-boundary-context">
    <Toast />
    <slot></slot>
  </div>
</template>
<script>
import Toast from 'primevue/toast'
import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'
import CustomError from '@models/CustomError'

export default {
  components: {
    Toast
  },
  methods: {
    registerEvents() {
      this.emitter.on(EventEnum.UNBOUND_ERROR, this.bindError)
    },
    forgetEvents() {
      this.emitter.off(EventEnum.UNBOUND_ERROR, this.bindError)
    },
    bindError(errorType) {
      if (!errorType) {
        errorType = ErrorEnum.UNHANDLED_ERROR
      }

      const customError = new CustomError(
        'error',
        this.$t(`errorHandler.${errorType}.title`),
        this.$t(`errorHandler.${errorType}.message`),
        5000
      )

      this.$toast.add(customError)
    }
  },
  errorCaptured(error) {
    const errorType = error.message || null

    this.bindError(errorType)
  },
  mounted() {
    this.registerEvents()
  },
  beforeUnmount() {
    this.forgetEvents()
  }
}
</script>
<style lang="scss"></style>
