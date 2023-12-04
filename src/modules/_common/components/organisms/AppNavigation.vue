<template>
  <nav class="navigation">
    <div class="navigation__logo-wrapper">
      <LogoIcon class="navigation__logo" @click="handleNavigateHome" />
    </div>
    <div class="navigation__switches">
      <ThemeSwitch />
      <LocaleSwitch />
    </div>
  </nav>
</template>
<script>
import LogoIcon from '@common/components/atoms/icons/LogoIcon.vue'
import LocaleSwitch from '@common/components/atoms/switch/LocaleSwitch.vue'
import ThemeSwitch from '@common/components/atoms/switch/ThemeSwitch.vue'

export default {
  components: {
    LogoIcon,
    LocaleSwitch,
    ThemeSwitch
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
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding: 0.5rem 2rem;
  box-shadow: 0 4px 2px -2px var(--gray-200);
  background-color: var(--primary-color);

  &__logo {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }

  &__switches {
    display: flex;
    justify-content: end;

    & > :not(:first-child) {
      margin-left: 2rem;
    }
  }
}
</style>
