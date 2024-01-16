<template>
  <Card
    :class="subscriptionCardClasses"
    :data-cy="cardDataCy"
  >
    <template #header>
      <div
        class="subscription-card__header"
        :data-cy="nameDataCy"
      >
        {{ data.name }}
      </div>
    </template>
    <template #content>
      <p
        class="subscription-card__description"
        :data-cy="descriptionDataCy"
      >
        {{ data.description }}
      </p>
      <SubscriptionCardButton
        :variation="data.type"
        class="w-full"
      />
    </template>
  </Card>
</template>
<script>
import Card from 'primevue/card'
import SubscriptionCardButton from '@home/components/atoms/buttons/SubscriptionTypeCardButton.vue'

import Subscription from '@models/Subscription'

export default {
  components: {
    Card,
    SubscriptionCardButton
  },
  props: {
    data: {
      required: true,
      type: Subscription
    }
  },
  computed: {
    subscriptionCardClasses() {
      return ['subscription-card', `subscription-card--${this.data.type}`]
    },
    cardDataCy() {
      return `subscription-card-${this.data.type}`
    },
    nameDataCy() {
      return `subscription-card-name-${this.data.type}`
    },
    descriptionDataCy() {
      return `subscription-card-description-${this.data.type}`
    }
  }
}
</script>
<style lang="scss">
.subscription-card {
  max-width: 300px;

  &__header {
    padding: 1.25rem;
    font-size: 1.5rem;
    border-radius: 6px 6px 0 0;
  }

  &__description {
    margin-bottom: 1rem;
    min-height: 60px;
  }

  &__pricing {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  &--professional {
    .subscription-card__header {
      background-color: var(--professional-primary-color);
      color: var(--gray-50);
    }
  }

  &--student {
    .subscription-card__header {
      background-color: var(--student-primary-color);
      color: var(--gray-50);
    }
  }
}
</style>
