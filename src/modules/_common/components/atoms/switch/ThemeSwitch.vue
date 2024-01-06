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

import ThemeEnum from '@enums/ThemeEnum'

export default {
  inject: ['changeTheme'],
  components: {
    SelectButton
  },
  data() {
    return {
      theme: ThemeEnum.PROFESSIONAL,
      options: [ThemeEnum.PROFESSIONAL, ThemeEnum.STUDENT]
    }
  },
  methods: {
    handleLocaleChange() {
      this.changeTheme(this.theme)
    }
  }
}
</script>
<style lang="scss">
@import url('@assets/styles/themes/professional.scss');
@import url('@assets/styles/themes/student.scss');

.theme-switch {
  .p-button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
  }
}
</style>
