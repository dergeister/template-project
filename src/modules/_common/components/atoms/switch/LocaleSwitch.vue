<template>
  <SelectButton
    class="locale-switch"
    v-model="locale"
    :options="options"
    :allow-empty="false"
    aria-labelledby="basic"
    @change="handleLocaleChange"
  />
</template>
<script>
import SelectButton from 'primevue/selectbutton'

import LocaleEnum from '@enums/LocaleEnum'
import EventEnum from '@enums/EventEnum'

export default {
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
      this.emitter.emit(EventEnum.CHANGE_LOCALE, this.locale)
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
