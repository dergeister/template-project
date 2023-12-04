<template>
  <template v-if="showEmailModal">
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

import Events from '@enums/Events'

export default {
  components: { DefaultLayout, HomeHeader, SubscriptionTypeCards, EmailModal },
  data() {
    return {
      showEmailModal: false
    }
  },
  methods: {
    handleClickSubscribe() {
      this.showEmailModal = true
    }
  },
  mounted() {
    this.emitter.off(Events.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)
    this.emitter.on(Events.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)
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
