<template>
  <nav class="navigation">
    <div class="navigation__logo-wrapper">
      <LogoIcon class="navigation__logo" @click="handleNavigateHome" />
    </div>
    <div class="navigation__locale">
      <LocaleSwitch />
    </div>
  </nav>
</template>
<script>
import LogoIcon from '@components/atoms/icons/LogoIcon.vue'
import LocaleSwitch from '@components/atoms/switch/LocaleSwitch.vue'

export default {
  components: {
    LogoIcon,
    LocaleSwitch
  },
  methods: {
    handleNavigateHome() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
<style lang="scss">
.navigation {
  position: fixed;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 0.5rem 2rem;
  box-shadow: 0 4px 2px -2px var(--gray-200);
  background-color: $primary;

  &__logo {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }

  &__locale {
    display: flex;
    justify-content: center;
  }
}
</style>
