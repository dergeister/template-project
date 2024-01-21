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

import PlanFactory from '@factories/PlanFactory'

import { createInstallments } from '@helpers/dinero-helper'

import { mapState, mapWritableState } from 'pinia'
import usePaymentStore from '@store/payment'

import { planIdentifierPerSubscriptionType } from '@services/payment-service'

export default {
  components: {
    PlanIdentifierSelectButton
  },
  computed: {
    ...mapState(usePaymentStore, ['subscriptionType']),
    ...mapWritableState(usePaymentStore, ['planIdentifier']),
    plans() {
      return this.createPlansBySubscriptionType()
    }
  },
  methods: {
    /**
     * Populates the plans property based on the store user's SubscriptionTypeEnum
     */
    createPlansBySubscriptionType() {
      const plansToCreate = planIdentifierPerSubscriptionType[this.subscriptionType]
      const plansList = []

      for (let i = 0; i < plansToCreate.length; i++) {
        const plan = plansToCreate[i]
        plansList.push(this.createPlan(plan))
      }

      return plansList
    },
    /**
     * Creates a plan to be rendered based on the given PlanIdentifierEnum
     * @param {PlanIdentifierEnum} planIdentifier The PlanIdentifierEnum to be created
     */
    createPlan(planIdentifier) {
      const plan = PlanFactory.createPlan(planIdentifier)

      const installments = createInstallments(plan.price, plan.installments)

      return {
        label: plan.name,
        price: installments[0].price,
        planIdentifier
      }
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
