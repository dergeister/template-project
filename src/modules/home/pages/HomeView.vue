<template>
  <!--
  <Suspense>
    <EmailModal />
  </Suspense>
  -->
  <template v-if="loadEmailModal">
    <EmailModal />
  </template>
  <DefaultLayout>
    <main class="home">
      <HomeHeader />
      <SubscriptionTypeCards />
    </main>
  </DefaultLayout>
</template>
<script>
import { defineAsyncComponent } from 'vue'

import DefaultLayout from '@common/components/templates/layouts/DefaultLayout.vue'
import HomeHeader from '@home/components/organisms/HomeHeader.vue'
import SubscriptionTypeCards from '@home/components/organisms/SubscriptionTypeCards.vue'

const EmailModal = defineAsyncComponent(() => import('@home/components/organisms/EmailModal.vue'))

import EventEnum from '@enums/EventEnum'

export default {
  components: { DefaultLayout, HomeHeader, SubscriptionTypeCards, EmailModal },
  data() {
    return {
      loadEmailModal: false,
    }
  },
  methods: {
    setupEvents() {
      this.emitter.off(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)
      this.emitter.on(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)
    },
    handleClickSubscribe() {
      this.loadEmailModal = true
    }
  },
  mounted() {
    this.setupEvents()
  }
}
</script>
<style lang="scss">
.home {
  padding-top: 4rem;
  background-color: var(--surface-c);
  min-height: 100vh;
}
</style>
