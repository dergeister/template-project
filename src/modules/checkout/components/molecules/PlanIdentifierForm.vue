<template>
  <form class="plan-identifier-form" @submit.prevent="">
    <ul>
      <li v-for="(plan, index) in plans" :key="`plan-identifier-button-${index}`">
        <PlanIdentifierButton :label="plan.label" :price="plan.price" :installmentPrice="plan.installmentPrice" />
      </li>
    </ul>
  </form>
</template>
<script>
import PlanIdentifierButton from '@checkout/components/atoms/PlanIdentifierButton.vue';

import PlanFactory from '@factories/PlanFactory';
import PlanIdentifierEnum from '@enums/PlanIdentifierEnum';

import { createInstallments } from '@common/helpers/dinero-helper';

export default {
  components: {
    PlanIdentifierButton
  },
  data() {
    return {
      plans: []
    }
  },
  methods: {
    /**
     * Populates the plans property based on the store user's SubscriptionTypeEnum
     */
     createPlansBySubscriptionType() {
      const professionalPlans = [
        PlanIdentifierEnum.MONTHLY,
        PlanIdentifierEnum.QUARTERLY,
        PlanIdentifierEnum.SEMESTER,
        PlanIdentifierEnum.YEARLY
      ]

      professionalPlans.forEach((p) => {
        this.createPlan(p)
      })

      console.log(this.plans)
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
        installmentPrice: installments[installments.length -1].price
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