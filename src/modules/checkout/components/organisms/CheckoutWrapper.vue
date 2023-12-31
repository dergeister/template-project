<template>
  <div class="checkout-wrapper">
    <div class="checkout-wrapper__left-column">
      <PlanIdentifierForm />
    </div>
    <div class="checkout-wrapper__right-column">
      <PaymentMethodForm />
      <BillingForm />
    </div>
  </div>
</template>
<script>
import PlanIdentifierForm from '@checkout/components/molecules/PlanIdentifierForm.vue';
import PaymentMethodForm from '@checkout/components/molecules/PaymentMethodForm.vue';
import BillingForm from '@checkout/components/molecules/BillingForm.vue';

export default {
  components: {
    PlanIdentifierForm,
    PaymentMethodForm,
    BillingForm
  }
}
</script>
<style lang="scss">
.checkout-wrapper {
  display: flex;
  justify-content: center;

  &__left-column {
    width: 350px;
    background-color: wheat;
  }

  &__right-column {
    width: 500px;
    margin-left: 1rem;
    background-color: wheat;
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