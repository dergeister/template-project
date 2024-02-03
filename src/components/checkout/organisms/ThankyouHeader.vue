<template>
  <header class="thankyou__header">
    <h1 data-cy="thankyou-title">{{ $t('thankyou.title') }}</h1>
    <p>{{ $t('thankyou.description') }}</p>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss">
.thankyou {
  &__header {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 1.5rem;
    }

    p {
      text-align: center;
      max-width: 400px;
    }
  }
}
</style>
