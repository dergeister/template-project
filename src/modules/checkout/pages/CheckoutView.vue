<template>
  <DefaultLayout>
    <main class="checkout">
      <CheckoutWrapper />
    </main>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@common/components/templates/layouts/DefaultLayout.vue'

import CheckoutWrapper from '@checkout/components/organisms/CheckoutWrapper.vue'

export default {
  components: {
    DefaultLayout,
    CheckoutWrapper
  }
}
</script>
<style lang="scss"></style>
