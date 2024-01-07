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

import useUserStore from '@common/stores/user'
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
    ...mapState(useUserStore, ['user']),
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
    },
    userGuard() {
      if (!this.user.id) {
        this.$router.push({
          name: 'home'
        })
      }
    }
  },
  mounted() {
    this.setupEvents()
    this.applySubscriptionTypeTheme()
    this.userGuard()
  }
}
</script>
<style lang="scss"></style>
