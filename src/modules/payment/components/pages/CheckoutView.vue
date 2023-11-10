<template>
  <DefaultLayout>
    <main class="checkout"></main>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@components/templates/layouts/DefaultLayout.vue'

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
