<template>
  <div id="theme-context" :class="themeContextClasses">
    <slot></slot>
  </div>
</template>
<script>
import ThemeEnum from '@enums/ThemeEnum'
import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

export default {
  data() {
    return {
      theme: ThemeEnum.PROFESSIONAL
    }
  },
  computed: {
    themeContextClasses() {
      return ['system', `system--${this.theme}`]
    }
  },
  methods: {
    setupEvents() {
      this.emitter.off(EventEnum.CHANGE_THEME, this.handleChangeTheme)
      this.emitter.on(EventEnum.CHANGE_THEME, this.handleChangeTheme)
    },
    handleChangeTheme(newTheme) {
      if (!Object.values(ThemeEnum).includes(newTheme)) {
        throw new Error(ErrorEnum.INVALID_THEME)
      }

      this.theme = newTheme
    }
  },
  mounted() {
    this.setupEvents()
  }
}
</script>
<style lang="scss"></style>
