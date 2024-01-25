<template>
  <div id="theme-context">
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
  methods: {
    handleChangeTheme(newTheme) {
      if (!Object.values(ThemeEnum).includes(newTheme)) {
        throw new Error(ErrorEnum.INVALID_THEME)
      }

      this.theme = newTheme

      this.applyThemeToBody()
    },
    applyThemeToBody() {
      const body = document.body
      body.classList.remove('system', 'system--professional', 'system--student')
      body.classList.add('system', `system--${this.theme}`)
    }
  },
  provide() {
    return {
      changeTheme: this.handleChangeTheme
    }
  },
  mounted() {
    this.applyThemeToBody()
  }
}
</script>
<style lang="scss"></style>
