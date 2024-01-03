<template>
  <div class="checkout-wrapper">
    <div class="checkout-wrapper__left-column">
      <PlanIdentifierForm />
    </div>
    <div class="checkout-wrapper__right-column">
      <PaymentMethodForm />
    </div>
  </div>
</template>
<script>
import PlanIdentifierForm from '@checkout/components/molecules/PlanIdentifierForm.vue'
import PaymentMethodForm from '@checkout/components/molecules/PaymentMethodForm.vue'

export default {
  components: {
    PlanIdentifierForm,
    PaymentMethodForm
  }
}
</script>
<style lang="scss">
.checkout-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  &__left-column {
    width: 350px;
  }

  &__right-column {
    width: 500px;
    margin-left: 1rem;
  }

  @media screen and (max-width: $large-breakpoint) {
    flex-direction: column;
    justify-content: start;
    align-items: center;

    &__left-column {
      width: unset;
    }

    &__right-column {
      width: unset;
      margin-left: 0;
    }
  }
}
</style>
