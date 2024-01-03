<template>
  <Button class="plan-identifier-button" size="large">
    <div class="plan-identifier-button__label">
      {{ label }}
    </div>
    <div class="plan-identifier-button__prices">
      <span class="plan-identifier-button__installment-price">
        {{ installmentPrice }}
      </span>
      <span class="plan-identifier-button__price">
        {{ price }}
      </span>
    </div>
  </Button>
</template>
<script>
import Button from 'primevue/button'

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    price: {
      type: String
    },
    installmentPrice: {
      type: String,
      required: true
    }
  },
  components: {
    Button
  }
}
</script>
<style lang="scss">
.plan-identifier-button {
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__prices {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  &__installment-price {
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__price {
    font-size: 0.75rem;
  }
}
</style>
