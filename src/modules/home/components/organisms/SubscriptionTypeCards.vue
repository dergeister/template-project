<template>
  <section class="home__subscriptions">
    <SubscriptionTypeCard :data="professional" />
    <SubscriptionTypeCard :data="student" />
  </section>
</template>
<script>
import SubscriptionTypeCard from '@home/components/molecules/cards/SubscriptionTypeCard.vue'

import SubscriptionFactory from '@factories/SubscriptionFactory'
import SubscriptionTypeEnum from '@/domain/enums/SubscriptionTypeEnum'
export default {
  components: { SubscriptionTypeCard },
  computed: {
    professional() {
      return SubscriptionFactory.createSubscription(SubscriptionTypeEnum.PROFESSIONAL)
    },
    student() {
      return SubscriptionFactory.createSubscription(SubscriptionTypeEnum.STUDENT)
    }
  }
}
</script>
<style lang="scss">
.home {
  &__subscriptions {
    display: flex;
    justify-content: center;
    padding: 2rem;

    & > :not(:first-child) {
      margin-left: 2rem;
    }
  }
}
</style>
