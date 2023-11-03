<template>
  <section class="home__plans">
    <PlanCard variation="professional" :plan="professionalPlan" />
    <PlanCard variation="student" :plan="studentPlan" />
  </section>
</template>
<script>
import PlanCard from '@components/molecules/cards/PlanCard.vue'

export default {
  components: { PlanCard },
  data() {
    return {
      professionalPlan: {
        title: 'plans.professional.name',
        description: 'plans.professional.description',
        pricing: 'R$ 74,90'
      },
      studentPlan: {
        title: 'plans.student.name',
        description: 'plans.student.description',
        pricing: 'R$ 24,90'
      }
    }
  }
}
</script>
<style lang="scss">
.home {
  &__plans {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  .plan-card + .plan-card {
    margin-left: 2rem;
  }
}
</style>
