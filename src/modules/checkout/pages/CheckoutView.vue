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

import viewMixin from '@common/mixins/view-mixin';

export default {
  mixins:[viewMixin],
  components: { 
    DefaultLayout,
    CheckoutWrapper
  }
}
</script>
<style lang="scss">
.checkout {
  padding-top: var(--navbar-height, 4rem);
  background-color: var(--surface-c);
  min-height: 100vh;
}
</style>
