<template>
  <Dialog
    v-model:visible="isVisible"
    :draggable="false"
    modal
    :header="$t('homeEmailModal.header')"
  >
    <EmailForm />
  </Dialog>
</template>
<script>
import Dialog from 'primevue/dialog'

import EmailForm from '@home/components/molecules/forms/EmailForm.vue'
import EventEnum from '@enums/EventEnum'

export default {
  components: {
    Dialog,
    EmailForm
  },
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    setupEvents() {
      this.emitter.off(
        EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK,
        this.handleClickSubscriptionCard
      )
      this.emitter.on(
        EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK,
        this.handleClickSubscriptionCard
      )

      this.emitter.off(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
      this.emitter.on(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS, this.handleFetchUserSuccess)
    },
    handleClickSubscriptionCard() {
      this.isVisible = true
    },
    handleFetchUserSuccess() {
      this.visible = false
    }
  },
  mounted() {
    this.setupEvents()
  }
}
</script>
<style lang="scss"></style>
