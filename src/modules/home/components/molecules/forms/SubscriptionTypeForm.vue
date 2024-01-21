<template>
  <form
    class="subscription-type-form"
    @submit.prevent=""
  >
    <SubscriptionTypeCard :data="professional" />
    <SubscriptionTypeCard :data="student" />
  </form>
</template>
<script>
import SubscriptionTypeCard from '@home/components/molecules/cards/SubscriptionTypeCard.vue'

import SubscriptionFactory from '@factories/SubscriptionFactory'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

import { mapWritableState } from 'pinia'
import usePaymentStore from '@store/payment'

import EventEnum from '@enums/EventEnum'
import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'

export default {
  components: { SubscriptionTypeCard },
  computed: {
    ...mapWritableState(usePaymentStore, ['subscriptionType', 'planIdentifier']),
    professional() {
      return SubscriptionFactory.createSubscription(SubscriptionTypeEnum.PROFESSIONAL)
    },
    student() {
      return SubscriptionFactory.createSubscription(SubscriptionTypeEnum.STUDENT)
    }
  },
  methods: {
    registerEvents() {
      this.emitter.on(
        EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK,
        this.handleSubscriptionCardClick
      )
    },
    forgetEvents() {
      this.emitter.off(
        EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK,
        this.handleSubscriptionCardClick
      )
    },
    handleSubscriptionCardClick(subscriptionType) {
      this.subscriptionType = subscriptionType

      this.planIdentifier =
        this.subscriptionType == SubscriptionTypeEnum.PROFESSIONAL
          ? PlanIdentifierEnum.YEARLY
          : PlanIdentifierEnum.STUDENT_YEARLY
    }
  },
  mounted() {
    this.registerEvents()
  },
  beforeUnmount() {
    this.forgetEvents()
  }
}
</script>
<style lang="scss">
.subscription-type-form {
  display: flex;
  justify-content: center;
  padding: 2rem;

  & > :not(:first-child) {
    margin-left: 2rem;
  }
}
</style>
