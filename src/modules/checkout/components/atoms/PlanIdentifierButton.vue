<template>
  <Button class="plan-identifier-button" size="large">
    teste
  </Button>
</template>
<script>
import Button from 'primevue/button'

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    installmentPrice: {
      type: String,
      required: true
    },
  },
  components: {
    Button
  }
}
</script>
<style lang="scss">
.plan-identifier-button {
  width: 100%;
}
</style>