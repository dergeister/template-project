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

import usePaymentStore from '@common/stores/payment'

import { mapState } from 'pinia'
import EventEnum from '@enums/EventEnum'

export default {
  inject: ['changeTheme'],
  components: {
    DefaultLayout,
    CheckoutWrapper
  },
  computed: {
    ...mapState(usePaymentStore, ['subscriptionType'])
  },
  methods: {
    setupEvents() {
      this.emitter.off(EventEnum.POST_SUBSCRIPTION_SUCCESS, this.handleSubscriptionSuccess)
      this.emitter.on(EventEnum.POST_SUBSCRIPTION_SUCCESS, this.handleSubscriptionSuccess)
    },
    handleSubscriptionSuccess() {
      this.$router.push({
        name: 'thankyou'
      })
    },
    applySubscriptionTypeTheme() {
      this.changeTheme(this.subscriptionType)
    }
  },
  mounted() {
    this.setupEvents()
    this.applySubscriptionTypeTheme()
  }
}
</script>
<style lang="scss"></style>
