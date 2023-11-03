<template>
  <Button :label="$t('buttons.subscribe')" :severity="planCardButtonSeverity" size="small" />
</template>
<script>
import Button from 'primevue/button'

export default {
  components: {
    Button
  },
  props: {
    variation: {
      default: 'professional',
      validator(value) {
        return ['professional', 'student'].includes(value)
      }
    }
  },
  computed: {
    planCardButtonSeverity() {
      const variations = {
        professional: 'primary',
        student: 'info'
      }

      return variations[this.variation]
    }
  }
}
</script>
<style lang=""></style>
