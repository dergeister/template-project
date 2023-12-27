<template>
  <Dialog
    v-model:visible="isVisible"
    :draggable="false"
    modal
    :header="$t('homeEmailModal.header')"
  >
    <HomeEmailForm />
  </Dialog>
</template>
<script>
import Dialog from 'primevue/dialog'

import HomeEmailForm from '@home/components/molecules/forms/HomeEmailForm.vue'
import EventEnum from '@enums/EventEnum'

export default {
  components: {
    Dialog,
    HomeEmailForm
  },
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    setupEvents() {
      this.emitter.off(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)
      this.emitter.on(EventEnum.HOME_SUBSCRIPTION_CARD_SUBSCRIBE_CLICK, this.handleClickSubscribe)
    },
    handleClickSubscribe() {
      this.isVisible = true
    }
  },
  mounted() {
    this.setupEvents()
  }
}
</script>
<style lang="scss"></style>
