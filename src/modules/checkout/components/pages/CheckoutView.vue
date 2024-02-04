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

import usePaymentStore from '@store/payment'

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
    registerEvents() {
      this.emitter.on(EventEnum.POST_SUBSCRIPTION_SUCCESS, this.handleSubscriptionSuccess)
    },
    forgetEvents() {
      this.emitter.off(EventEnum.POST_SUBSCRIPTION_SUCCESS, this.handleSubscriptionSuccess)
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
    this.registerEvents()
    this.applySubscriptionTypeTheme()
  },
  beforeUnmount() {
    this.forgetEvents()
  }
}
</script>
<style lang="scss"></style>
