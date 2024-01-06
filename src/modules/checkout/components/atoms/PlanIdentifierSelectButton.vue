<template>
  <SelectButton
    :pt="passThrough"
    v-model="selectedPlan"
    :options="plans"
    dataKey="planIdentifier"
    @update:modelValue="handlePlanIdentifierChange"
  >
    <template #option="slotProps">
      <div class="plan-identifier-button__label">
        {{ slotProps.option.label }}
      </div>
      <div class="plan-identifier-button__prices">
        <span class="plan-identifier-button__installment-price">
          {{ slotProps.option.installmentPrice }}
        </span>
        <span class="plan-identifier-button__price">
          {{ slotProps.option.price }}
        </span>
      </div>
    </template>
  </SelectButton>
</template>
<script>
import SelectButton from 'primevue/selectbutton'

export default {
  props: {
    plans: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  components: {
    SelectButton
  },
  data() {
    return {
      selectedPlan: null
    }
  },
  computed: {
    passThrough() {
      return {
        root: () => ({
          class: 'plan-identifier-select-button'
        }),
        button: () => ({
          class: 'plan-identifier-button'
        })
      }
    }
  },
  methods: {
    initialize() {
      if (this.selectedPlan) {
        return
      }

      this.selectedPlan = { planIdentifier: this.modelValue }
    },
    handlePlanIdentifierChange() {
      this.$emit('update:modelValue', this.selectedPlan.planIdentifier)
    }
  },
  mounted() {
    this.initialize()
  }
}
</script>
<style lang="scss">
.plan-identifier-select-button {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .plan-identifier-button {
    border: solid 1px var(--surface-d);
    border-radius: 8px;
  }

  .plan-identifier-button {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
}

.plan-identifier-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__prices {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: 1rem;
  }

  &__installment-price {
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__price {
    font-size: 0.75rem;
  }
}
</style>
