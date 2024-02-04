<template>
  <ThemeContext>
    <InternationalizationContext>
      <ErrorBoundaryContext>
        <RouterView />
      </ErrorBoundaryContext>
    </InternationalizationContext>
  </ThemeContext>
</template>
<script>
import { RouterView } from 'vue-router'

import ThemeContext from '@common/components/templates/contexts/ThemeContext.vue'
import InternationalizationContext from '@common/components/templates/contexts/InternationalizationContext.vue'
import ErrorBoundaryContext from '@common/components/templates/contexts/ErrorBoundaryContext.vue'

export default {
  components: {
    RouterView,
    ThemeContext,
    InternationalizationContext,
    ErrorBoundaryContext
  }
}
</script>
<style lang=""></style>
