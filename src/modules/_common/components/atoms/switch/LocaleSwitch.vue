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

import Locales from '@enums/Locales'
import Events from '@enums/Events'

export default {
  components: {
    SelectButton
  },
  data() {
    return {
      locale: Locales.PT,
      options: [Locales.PT, Locales.EN]
    }
  },
  methods: {
    handleLocaleChange() {
      this.emitter.emit(Events.CHANGE_LOCALE, this.locale)
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
