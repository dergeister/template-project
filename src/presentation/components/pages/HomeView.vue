<template>
  <DefaultLayout>
    <main class="home">
      <HomeHeader />
      <HomeSubscriptions />
    </main>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@components/templates/layouts/DefaultLayout.vue'
import HomeHeader from '@components/organisms/home/HomeHeader.vue'
import HomeSubscriptions from '@components/organisms/home/HomeSubscriptions.vue'

export default {
  mounted() {},
  components: { DefaultLayout, HomeHeader, HomeSubscriptions }
}
</script>
<style lang="scss">
.home {
  padding-top: 4rem;
  background-color: var(--surface-c);
  min-height: 100vh;
}
</style>
