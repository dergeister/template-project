<template>
  <div id="theme-context" :class="themeContextClasses">
    <slot></slot>
  </div>
</template>
<script>
import ThemeEnum from '@enums/ThemeEnum'
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
    handleChangeTheme(newTheme) {
      if (!Object.values(ThemeEnum).includes(newTheme)) {
        throw new Error(ErrorEnum.INVALID_THEME)
      }

      this.theme = newTheme
    }
  },
  provide() {
    return {
      changeTheme: this.handleChangeTheme
    }
  }
}
</script>
<style lang="scss"></style>
