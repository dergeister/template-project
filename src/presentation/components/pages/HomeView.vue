<template>
  <DefaultLayout>
    <main class="home">
      <HomeHeader />
      <HomePlans />
    </main>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@components/templates/layouts/DefaultLayout.vue'
import HomeHeader from '@components/organisms/home/HomeHeader.vue'
import HomePlans from '@components/organisms/home/HomePlans.vue'

export default {
  mounted() {},
  components: { DefaultLayout, HomeHeader, HomePlans }
}
</script>
<style lang="scss">
.home {
  padding-top: 4rem;
  background-color: var(--surface-c);
  min-height: 100vh;
}
</style>
