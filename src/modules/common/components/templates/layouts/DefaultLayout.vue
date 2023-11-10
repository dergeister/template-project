<template>
  <div class="default-layout">
    <AppNavigation />
    <slot></slot>
  </div>
</template>
<script>
import AppNavigation from '@components/organisms/shared/AppNavigation.vue'

export default { components: { AppNavigation } }
</script>
<style lang="scss"></style>
