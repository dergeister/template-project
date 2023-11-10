<template>
  <section class="home__subscriptions">
    <SubscriptionCard :data="professional" />
    <SubscriptionCard :data="student" />
  </section>
</template>
<script>
import SubscriptionCard from '@components/molecules/cards/SubscriptionCard.vue'

import SubscriptionFactory from '@factories/SubscriptionFactory'

export default {
  components: { SubscriptionCard },
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
