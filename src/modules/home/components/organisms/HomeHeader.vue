<template>
  <header class="home__header">
    <h1 data-cy="home-header-title">{{ $t('homeHeader.title') }}</h1>
    <p>{{ $t('homeHeader.description') }}</p>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss">
.home {
  &__header {
    text-align: center;
    padding: 2rem;

    h1 {
      margin-bottom: 1rem;
    }
  }
}
</style>
