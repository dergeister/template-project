<template>
  <form class="plan-identifier-form" @submit.prevent="">
    <ul>
      <li v-for="item in 4" :key="`plan-identifier-button-${item}`">
        <PlanIdentifierButton />
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
      plans: [
        PlanFactory.createPlan(PlanIdentifierEnum.MONTHLY),
        PlanFactory.createPlan(PlanIdentifierEnum.QUARTERLY),
        PlanFactory.createPlan(PlanIdentifierEnum.SEMESTER),
        PlanFactory.createPlan(PlanIdentifierEnum.YEARLY),
      ]
    }
  },
  mounted() {
    // console.log(centsToReal(1000))
    console.log(createInstallments(12000, 12))
  }
}
</script>
<style lang="scss">
.plan-identifier-form {
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