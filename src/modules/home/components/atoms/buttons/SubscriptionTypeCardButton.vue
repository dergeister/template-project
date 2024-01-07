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
            'system-btn': true,
            'system-btn--professional': this.variation == SubscriptionTypeEnum.PROFESSIONAL,
            'system-btn--student': this.variation == SubscriptionTypeEnum.STUDENT
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
<style lang="scss"></style>
