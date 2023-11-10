<template>
  <HomeEmailModal />
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
import HomeEmailModal from '@components/organisms/home/HomeEmailModal.vue'

import Events from '@enums/Events'

export default {
  components: { DefaultLayout, HomeHeader, HomeSubscriptions, HomeEmailModal },
  methods: {
    handleClickSubscribe() {}
  },
  mounted() {
    // this.emitter.on(Events.)
  },
  unmounted() {}
}
</script>
<style lang="scss">
.home {
  padding-top: 4rem;
  background-color: var(--surface-c);
  min-height: 100vh;
}
</style>
