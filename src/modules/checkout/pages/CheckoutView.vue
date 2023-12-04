<template>
  <DefaultLayout>
    <main class="checkout">
      <h1>checkout</h1>
    </main>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@common/components/templates/layouts/DefaultLayout.vue'

export default {
  mounted() {},
  components: { DefaultLayout }
}
</script>
<style lang="scss">
.checkout {
  padding-top: 4rem;
  background-color: var(--surface-c);
  min-height: 100vh;
}
</style>
