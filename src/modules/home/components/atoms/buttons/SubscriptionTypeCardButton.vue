<template>
  <Button
    :pt="passThought"
    :label="$t('buttons.subscribe')"
    size="small"
    @click="handleSubscriptionCardSubscribeClick"
  />
</template>
<script>
import Button from 'primevue/button'

import EventEnum from '@enums/EventEnum'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

export default {
  components: {
    Button
  },
  props: {
    variation: {
      default: SubscriptionTypeEnum.PROFESSIONAL,
      validator(value) {
        return Object.values(SubscriptionTypeEnum).includes(value)
      }
    }
  },
  computed: {
    passThought() {
      return {
        root: () => ({
          class: {
            'subscription-type-card-button': true,
            'subscription-type-card-button--professional':
              this.variation == SubscriptionTypeEnum.PROFESSIONAL,
            'subscription-type-card-button--student': this.variation == SubscriptionTypeEnum.STUDENT
          }
        })
      }
    }
  },
  methods: {
    handleSubscriptionCardSubscribeClick() {
      this.emitter.emit(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.variation)
    }
  }
}
</script>
<style lang="scss">
.subscription-type-card-button {
  &--professional {
    background-color: var(--professional-primary-color);

    &:hover,
    &:focus {
      background-color: var(--professional-primary-color-hover);
    }

    &:active {
      background-color: var(--professional-primary-color-active);
    }
  }

  &--student {
    background-color: var(--student-primary-color);

    &:hover,
    &:focus {
      background-color: var(--student-primary-color-hover);
    }

    &:active {
      background-color: var(--student-primary-color-active);
    }
  }
}
</style>
