<template>
  <form class="plan-identifier-form" @submit.prevent="">
    <PlanIdentifierSelectButton v-model="planIdentifier" :plans="plans" />
  </form>
</template>
<script>
import PlanIdentifierSelectButton from '@checkout/components/atoms/PlanIdentifierSelectButton.vue'

import PlanFactory from '@factories/PlanFactory'
import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'

import { createInstallments } from '@common/helpers/dinero-helper'

import { mapState, mapWritableState } from 'pinia'
import usePaymentStore from '@common/stores/payment'

import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

export default {
  components: {
    PlanIdentifierSelectButton
  },
  data() {
    return {
      plans: []
    }
  },
  computed: {
    ...mapState(usePaymentStore, ['subscriptionType']),
    ...mapWritableState(usePaymentStore, ['planIdentifier'])
  },
  methods: {
    /**
     * Populates the plans property based on the store user's SubscriptionTypeEnum
     */
    createPlansBySubscriptionType() {
      let plansToCreate = []

      switch (this.subscriptionType) {
        default:
        case SubscriptionTypeEnum.PROFESSIONAL:
          plansToCreate = [
            PlanIdentifierEnum.MONTHLY,
            PlanIdentifierEnum.QUARTERLY,
            PlanIdentifierEnum.SEMESTER,
            PlanIdentifierEnum.YEARLY
          ]
          break
        case SubscriptionTypeEnum.STUDENT:
          plansToCreate = [PlanIdentifierEnum.STUDENT_MONTHLY, PlanIdentifierEnum.STUDENT_YEARLY]
          break
      }

      plansToCreate.forEach((p) => {
        this.createPlan(p)
      })
    },
    /**
     * Creates a plan to be rendered based on the given PlanIdentifierEnum
     * @param {PlanIdentifierEnum} planIdentifier The PlanIdentifierEnum to be created
     */
    createPlan(planIdentifier) {
      const plan = PlanFactory.createPlan(planIdentifier)

      const installments = createInstallments(plan.price, plan.installments)

      this.plans.push({
        label: plan.name,
        price: installments[0].price,
        planIdentifier
      })
    }
  },
  mounted() {
    this.createPlansBySubscriptionType()
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
