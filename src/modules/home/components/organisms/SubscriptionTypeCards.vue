<template>
  <section class="home__subscriptions">
    <SubscriptionTypeCard :data="professional" />
    <SubscriptionTypeCard :data="student" />
  </section>
</template>
<script>
import SubscriptionTypeCard from '@home/components/molecules/cards/SubscriptionTypeCard.vue'

import SubscriptionFactory from '@factories/SubscriptionFactory'

export default {
  components: { SubscriptionTypeCard },
  computed: {
    professional() {
      return SubscriptionFactory.createProfessionalSubscription()
    },
    student() {
      return SubscriptionFactory.createStudentSubscription()
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
