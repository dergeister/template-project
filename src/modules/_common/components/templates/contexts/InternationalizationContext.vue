<template>
  <div id="internationalization-context">
    <slot></slot>
  </div>
</template>
<script>
import Locales from '@enums/Locales'
import Events from '@enums/Events'
import Errors from '@enums/Errors'

export default {
  methods: {
    handleChangeLocale(newLocale) {
      if (!Object.values(Locales).includes(newLocale)) {
        throw new Error(Errors.INVALID_LOCALE)
      }

      this.$i18n.locale = newLocale
    }
  },
  mounted() {
    this.emitter.off(Events.CHANGE_LOCALE, this.handleChangeLocale)
    this.emitter.on(Events.CHANGE_LOCALE, this.handleChangeLocale)
  }
}
</script>
<style lang="scss"></style>
