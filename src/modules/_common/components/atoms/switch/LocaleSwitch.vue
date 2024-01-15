<template>
  <SelectButton
    class="locale-switch"
    v-model="locale"
    :options="options"
    :allow-empty="false"
    aria-labelledby="basic"
    @change="handleLocaleChange"
  >
    <template #option="slotProps">
      <span :data-cy="`locale-${slotProps.option}`">
        {{ slotProps.option }}
      </span>
    </template>
  </SelectButton>
</template>
<script>
import SelectButton from 'primevue/selectbutton'

import LocaleEnum from '@enums/LocaleEnum'

export default {
  inject: ['changeLocale'],
  components: {
    SelectButton
  },
  data() {
    return {
      locale: LocaleEnum.PT,
      options: [LocaleEnum.PT, LocaleEnum.EN]
    }
  },
  methods: {
    handleLocaleChange() {
      this.changeLocale(this.locale)
    }
  }
}
</script>
<style lang="scss">
.locale-switch {
  .p-button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
  }
}
</style>
