<template>
  <SelectButton
    :pt="passThrough"
    v-model="selectedPlan"
    :options="plans"
    dataKey="planIdentifier"
    @update:modelValue="handlePlanIdentifierChange"
  >
    <template #option="slotProps">
      <span
        class="plan-identifier-button__label"
        :data-cy="`plan-identifier-${slotProps.option.planIdentifier}`"
      >
        {{ slotProps.option.label }}
      </span>
      <span
        class="plan-identifier-button__price"
        :data-cy="`plan-identifier-price-${slotProps.option.planIdentifier}`"
      >
        {{ slotProps.option.price }}
      </span>
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
          class: {
            'plan-identifier-button': true,
            'system-btn': true,
            'system-btn--primary': true,
            'system-btn--clear': true
          }
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
  padding: 1.5rem;

  &__price {
    font-weight: 700;
    font-size: 0.875rem;
  }
}
</style>
