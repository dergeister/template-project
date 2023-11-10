<template>
  <form @submit.prevent="handleSubmit">
    <FormField label="123" helperText="qwe" validationText="asd" :invalid="true"> field </FormField>
    <Button :label="$t('buttons.continue')" size="small" class="w-full" />
  </form>
</template>
<script>
import Button from 'primevue/button'

import FormField from '@components/atoms/input/FormField.vue'

export default {
  components: {
    Button,
    FormField
  },
  methods: {
    handleSubmit() {}
  }
}
</script>
<style lang="scss">
</style>
