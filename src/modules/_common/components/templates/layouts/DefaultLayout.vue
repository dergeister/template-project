<template>
  <div class="default-layout">
    <AppNavigation />
    <slot></slot>
  </div>
</template>
<script>
import AppNavigation from '@common/components/organisms/AppNavigation.vue'

export default { components: { AppNavigation } }
</script>
<style lang="scss"></style>
