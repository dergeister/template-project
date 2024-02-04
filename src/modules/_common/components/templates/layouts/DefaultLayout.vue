<template>
  <div class="default-layout">
    <AppNavigation />
    <div class="default-layout__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import AppNavigation from '@common/components/organisms/AppNavigation.vue'

import navigationMixin from '@mixins/navigation-mixin'

export default {
  mixins: [navigationMixin],
  components: {
    AppNavigation
  }
}
</script>
<style lang="scss">
.default-layout {
  background-color: var(--surface-c);

  &__content {
    padding-top: var(--navbar-height);
    min-height: calc(100dvh);
  }
}
</style>
