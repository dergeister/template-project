<template>
  <SelectButton
    class="theme-switch"
    v-model="theme"
    :options="options"
    :allow-empty="false"
    aria-labelledby="basic"
    @change="handleLocaleChange"
  />
</template>
<script>
import SelectButton from 'primevue/selectbutton'

import Themes from '@enums/Themes'
import Events from '@enums/Events'

export default {
  components: {
    SelectButton
  },
  data() {
    return {
      theme: Themes.NUTRITIONIST,
      options: [Themes.NUTRITIONIST, Themes.STUDENT]
    }
  },
  methods: {
    handleLocaleChange() {
      this.emitter.emit(Events.CHANGE_THEME, this.theme)
    }
  }
}
</script>
<style lang="scss">
@import url('@assets/styles/themes/nutritionist.scss');
@import url('@assets/styles/themes/student.scss');

.theme-switch {
  .p-button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
  }
}
</style>
