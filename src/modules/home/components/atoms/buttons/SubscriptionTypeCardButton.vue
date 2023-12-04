<template>
  <Button
    :label="$t('buttons.subscribe')"
    :severity="subscriptionCardButtonSeverity"
    size="small"
    @click="handleSubscriptionButtonClick"
  />
</template>
<script>
import Button from 'primevue/button'

import Events from '@enums/Events'
import SubscriptionTypes from '@enums/SubscriptionTypes'

export default {
  components: {
    Button
  },
  props: {
    variation: {
      default: SubscriptionTypes.PROFESSIONAL,
      validator(value) {
        return Object.values(SubscriptionTypes).includes(value)
      }
    }
  },
  computed: {
    subscriptionCardButtonSeverity() {
      const variations = {
        [SubscriptionTypes.PROFESSIONAL]: 'primary',
        [SubscriptionTypes.STUDENT]: 'info'
      }

      return variations[this.variation]
    }
  },
  methods: {
    handleSubscriptionButtonClick() {
      this.emitter.emit(Events.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.variation)
    }
  }
}
</script>
<style lang=""></style>
