<template>
  <div id="theme-context" :class="themeContextClasses">
    <slot></slot>
  </div>
</template>
<script>
import Themes from '@enums/Themes'
import Events from '@enums/Events'
import Errors from '@enums/Errors'

export default {
  data() {
    return {
      theme: Themes.NUTRITIONIST
    }
  },
  computed: {
    themeContextClasses() {
      return ['db', `db--${this.theme}`]
    }
  },
  methods: {
    handleChangeTheme(newTheme) {
      if (!Object.values(Themes).includes(newTheme)) {
        throw new Error(Errors.INVALID_THEME)
      }

      this.theme = newTheme
    }
  },
  mounted() {
    this.emitter.on(Events.CHANGE_THEME, this.handleChangeTheme)
  },
  unmounted() {
    this.emitter.off(Events.CHANGE_THEME, this.handleChangeTheme)
  }
}
</script>
<style lang="scss"></style>
