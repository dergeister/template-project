<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :header="$t('homeEmailModal.header')"
    :style="{ width: '300px' }"
  >
    <HomeEmailForm />
  </Dialog>
</template>
<script>
import Dialog from 'primevue/dialog'

import HomeEmailForm from '@home/components/molecules/forms/HomeEmailForm.vue'

export default {
  components: {
    Dialog,
    HomeEmailForm
  },
  data() {
    return {
      isVisible: true
    }
  }
}
</script>
<style lang="scss"></style>
