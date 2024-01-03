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

import viewMixin from '@common/mixins/view-mixin'

export default {
  mixins: [viewMixin],
  components: { DefaultLayout, HomeHeader, SubscriptionTypeCards, EmailModal },
  data() {
    return {
      loadEmailModal: false
    }
  },
  methods: {
    setupEvents() {
      this.emitter.off(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)
      this.emitter.on(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)

      this.emitter.off(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
      this.emitter.on(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
    },
    handleClickSubscribe() {
      this.loadEmailModal = true
    },
    handleFetchUserSuccess() {
      this.$router.push({
        name: 'checkout'
      })
    }
  },
  mounted() {
    this.setupEvents()
  }
}
</script>
<style lang="scss">
.home {
  padding-top: var(--navbar-height, 4rem);
  background-color: var(--surface-c);
  min-height: 100vh;
}
</style>
