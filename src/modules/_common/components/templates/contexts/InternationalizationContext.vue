<template>
  <div id="internationalization-context">
    <slot></slot>
  </div>
</template>
<script>
import LocaleEnum from '@enums/LocaleEnum'
import ErrorEnum from '@enums/ErrorEnum'

export default {
  methods: {
    handleChangeLocale(newLocale) {
      if (!Object.values(LocaleEnum).includes(newLocale)) {
        throw new Error(ErrorEnum.INVALID_LOCALE)
      }

      this.$i18n.locale = newLocale
    }
  },
  provide() {
    return {
      changeLocale: this.handleChangeLocale
    }
  }
}
</script>
<style lang="scss"></style>
