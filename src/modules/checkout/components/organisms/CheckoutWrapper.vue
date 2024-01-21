<template>
  <div class="checkout-form-wrapper">
    <div class="checkout-form-wrapper__plan-identifier">
      <PlanIdentifierForm />
    </div>
    <div class="checkout-form-wrapper__payment-method">
      <PaymentMethodForm />
    </div>
  </div>
</template>
<script>
import PlanIdentifierForm from '@checkout/components/molecules/forms/PlanIdentifierForm.vue'
import PaymentMethodForm from '@checkout/components/molecules/forms/PaymentMethodForm.vue'
import EventEnum from '@enums/EventEnum'

import { mapState, mapActions } from 'pinia'
import usePaymentStore from '@store/payment'
import useUserStore from '@store/user'

export default {
  components: {
    PlanIdentifierForm,
    PaymentMethodForm
  },
  computed: {
    ...mapState(usePaymentStore, ['isLoading']),
    ...mapState(useUserStore, ['user'])
  },
  methods: {
    ...mapActions(usePaymentStore, ['subscribe']),
    registerEvents() {
      this.emitter.on(EventEnum.SUBMIT_SUBSCRIPTION, this.submitSubscription)
    },
    forgetEvents() {
      this.emitter.off(EventEnum.SUBMIT_SUBSCRIPTION, this.submitSubscription)
    },
    submitSubscription() {
      this.subscribe(this.user.id)
    }
  },
  mounted() {
    this.registerEvents()
  },
  beforeUnmount() {
    this.forgetEvents()
  }
}
</script>
<style lang="scss">
.checkout-form-wrapper {
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;

  &__plan-identifier {
    width: 350px;
  }

  &__payment-method {
    width: 500px;
    margin-left: 1rem;
  }

  @media screen and (max-width: $large-breakpoint) {
    flex-direction: column;
    justify-content: start;
    align-items: center;

    $child-width: 500px;

    &__plan-identifier {
      width: 100%;
      margin-bottom: 2rem;
      max-width: $child-width;
    }

    &__payment-method {
      width: 100%;
      margin-left: 0;
      max-width: $child-width;
    }
  }
}
</style>
