<template>
  <form
    class="plan-identifier-form"
    data-cy="plan-identifier-form"
    @submit.prevent=""
  >
    <PlanIdentifierSelectButton
      v-model="planIdentifier"
      :plans="plans"
    />
  </form>
</template>
<script>
import PlanIdentifierSelectButton from '@checkout/components/atoms/PlanIdentifierSelectButton.vue'

import { mapState, mapWritableState } from 'pinia'
import usePaymentStore from '@store/payment'

import PaymentService from '@services/payment-service'

export default {
  components: {
    PlanIdentifierSelectButton
  },
  computed: {
    ...mapState(usePaymentStore, ['subscriptionType']),
    ...mapWritableState(usePaymentStore, ['planIdentifier']),
    plans() {
      return PaymentService.plansPerSubscriptionType(this.subscriptionType)
    }
  }
}
</script>
<style lang="scss">
.plan-identifier-form {
  border: solid 1px var(--surface-300);
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--surface-200);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li:not(:first-child) {
      margin-top: 1rem;
    }
  }
}
</style>
