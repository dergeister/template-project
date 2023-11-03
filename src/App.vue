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

import ThemeContext from '@components/templates/contexts/ThemeContext.vue'
import InternationalizationContext from '@components/templates/contexts/InternationalizationContext.vue'
import ErrorBoundaryContext from '@components/templates/contexts/ErrorBoundaryContext.vue'

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
