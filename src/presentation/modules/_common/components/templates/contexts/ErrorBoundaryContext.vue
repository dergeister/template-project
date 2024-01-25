<template>
  <div id="error-boundary-context">
    <Toast />
    <slot></slot>
  </div>
</template>
<script>
import Toast from 'primevue/toast'

import CustomErrorFactory from '@factories/CustomErrorFactory'

import EventEnum from '@enums/EventEnum'

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
      const customError = CustomErrorFactory.createCustomError(errorType)
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
