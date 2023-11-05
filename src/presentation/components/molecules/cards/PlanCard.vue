<template>
  <Card :class="planCardClasses">
    <template #header>
      <div class="plan-card__header">{{ $t(plan.title) }}</div>
    </template>
    <template #content>
      <p class="plan-card__description">{{ $t(plan.description) }}</p>
      <p class="plan-card__pricing">{{ plan.pricing }}</p>
      <PlanCardButton :variation="variation" class="w-full" />
    </template>
  </Card>
</template>
<script>
import Card from 'primevue/card'
import PlanCardButton from '@components/atoms/buttons/PlanCardButton.vue'

export default {
  components: {
    Card,
    PlanCardButton
  },
  props: {
    variation: {
      default: 'professional',
      validator(value) {
        return ['professional', 'student'].includes(value)
      }
    },
    plan: {
      required: true
    }
  },
  computed: {
    planCardClasses() {
      return ['plan-card', `plan-card--${this.variation}`]
    }
  }
}
</script>
<style lang="scss">
.plan-card {
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
    .plan-card__header {
      background-color: var(--green-400);
      color: var(--gray-50);
    }
  }

  &--student {
    .plan-card__header {
      background-color: var(--blue-400);
      color: var(--gray-50);
    }
  }
}
</style>
