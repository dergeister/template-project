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
import PlanIdentifierForm from '@checkout/components/molecules/forms/PlanIdentifierForm.vue'
import PaymentMethodForm from '@checkout/components/molecules/forms/PaymentMethodForm.vue'
import EventEnum from '@enums/EventEnum'

import { mapState, mapActions } from 'pinia'
import usePaymentStore from '@common/stores/payment'
import useUserStore from '@common/stores/user'

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
    submitSubscription() {
      this.subscribe(this.user.id)
    },
    setupEvents() {
      this.emitter.off(EventEnum.SUBMIT_SUBSCRIPTION, this.submitSubscription)
      this.emitter.on(EventEnum.SUBMIT_SUBSCRIPTION, this.submitSubscription)
    }
  },
  mounted() {
    this.setupEvents()
  }
}
</script>
<style lang="scss">
.checkout-wrapper {
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;

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
      width: 100%;
    }

    &__right-column {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
