<template>
  <Button
    :label="$t('buttons.subscribe')"
    :severity="subscriptionCardButtonSeverity"
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
    subscriptionCardButtonSeverity() {
      const variations = {
        [SubscriptionTypeEnum.PROFESSIONAL]: 'primary',
        [SubscriptionTypeEnum.STUDENT]: 'info'
      }

      return variations[this.variation]
    }
  },
  methods: {
    handleSubscriptionCardSubscribeClick() {
      this.emitter.emit(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.variation)
    }
  }
}
</script>
<style lang=""></style>
