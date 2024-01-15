<template>
  <Dialog
    v-model:visible="isVisible"
    :draggable="false"
    modal
    :header="$t('homeEmailModal.header')"
    data-cy="email-modal"
  >
    <template v-if="isVisible">
      <EmailForm />
    </template>
  </Dialog>
</template>
<script>
import { defineAsyncComponent } from 'vue'

import Dialog from 'primevue/dialog'

const EmailForm = defineAsyncComponent(
  () => import('@home/components/molecules/forms/EmailForm.vue')
)

import EventEnum from '@enums/EventEnum'

export default {
  components: {
    Dialog,
    EmailForm
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    registerEvents() {
      this.emitter.on(
        EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK,
        this.handleClickSubscriptionCard
      )

      this.emitter.on(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
    },
    forgetEvents() {
      this.emitter.off(
        EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK,
        this.handleClickSubscriptionCard
      )

      this.emitter.off(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
    },
    handleClickSubscriptionCard() {
      this.isVisible = true
    },
    handleFetchUserSuccess() {
      this.visible = false
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
<style lang="scss"></style>
