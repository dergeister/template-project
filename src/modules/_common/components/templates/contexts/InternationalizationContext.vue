<template>
  <div id="internationalization-context">
    <slot></slot>
  </div>
</template>
<script>
import LocaleEnum from '@enums/LocaleEnum'
import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

export default {
  methods: {
    setupEvents() {
      this.emitter.off(EventEnum.CHANGE_LOCALE, this.handleChangeLocale)
      this.emitter.on(EventEnum.CHANGE_LOCALE, this.handleChangeLocale)
    },
    handleChangeLocale(newLocale) {
      if (!Object.values(LocaleEnum).includes(newLocale)) {
        throw new Error(ErrorEnum.INVALID_LOCALE)
      }

      this.$i18n.locale = newLocale
    }
  },
  mounted() {
    this.setupEvents()
  }
}
</script>
<style lang="scss"></style>
