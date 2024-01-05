<template>
  <div class="form-field">
    <label>
      <span :class="labelClasses">{{ label }}</span>
      <slot></slot>
      <small v-if="showValidationMessage" class="form-field__validation-text">
        {{ validationText }}
      </small>
      <small v-if="helperText" class="form-field__helper-text">
        {{ helperText }}
      </small>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      requied: true
    },
    helperText: {
      type: String
    },
    validationText: {
      type: String
    },
    invalid: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showValidationMessage() {
      return this.invalid && this.validationText
    },
    labelClasses() {
      return {
        'form-field__label-text': true,
        'form-field__label-text--required': this.required
      }
    }
  }
}
</script>
<style lang="scss">
.form-field {
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  label {
    cursor: pointer;
  }

  &__label-text {
    display: block;
    font-weight: 700;
    margin-bottom: 2px;

    &--required {
      &::after {
        display: inline-block;
        content: '*';
        color: var(--red-400);
      }
    }
  }

  &__validation-text {
    display: block;
    color: var(--red-400);
  }

  &__helper-text {
    display: block;
    color: var(--bluegray-400);
  }
}
</style>
