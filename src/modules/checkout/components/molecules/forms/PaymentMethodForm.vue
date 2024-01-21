<template>
  <form
    class="payment-method-form formgrid grid"
    data-cy="payment-method-form"
    @submit.prevent="handleSubmit"
  >
    <div class="field col-12">
      <FormField
        :label="$t('creditCard.number')"
        :validationText="getFieldErrorMessage('number')"
        :invalid="getFieldInvalid('number')"
        id="cc-number"
        required
      >
        <InputText
          type="text"
          v-model="v$.number.$model"
          v-mask="'#### #### #### ####'"
          :placeholder="$t('placeholder.creditCard.number')"
          :class="['w-full', getInputStateClass('number')]"
          data-cy="cc-number"
        />
      </FormField>
    </div>
    <div class="field col-12">
      <FormField
        :label="$t('creditCard.name')"
        :validationText="getFieldErrorMessage('name')"
        :invalid="getFieldInvalid('name')"
        id="cc-name"
        required
      >
        <InputText
          type="text"
          v-model="v$.name.$model"
          maxlength="255"
          :placeholder="$t('placeholder.creditCard.name')"
          :class="['w-full', getInputStateClass('name')]"
          data-cy="cc-name"
        />
      </FormField>
    </div>
    <div class="field col-12 sm:col-6">
      <FormField
        :label="$t('creditCard.cvv')"
        :validationText="getFieldErrorMessage('cvv')"
        :invalid="getFieldInvalid('cvv')"
        id="cc-cvv"
        required
      >
        <InputText
          type="text"
          v-model="v$.cvv.$model"
          v-mask="'####'"
          :placeholder="$t('placeholder.creditCard.cvv')"
          :class="['w-full', getInputStateClass('cvv')]"
          data-cy="cc-cvv"
        />
      </FormField>
    </div>
    <div class="field col-12 sm:col-6">
      <FormField
        :label="$t('creditCard.expirationDate')"
        :validationText="getFieldErrorMessage('expirationDate')"
        :invalid="getFieldInvalid('expirationDate')"
        id="cc-expirationDate"
        required
      >
        <InputText
          type="text"
          v-model="v$.expirationDate.$model"
          v-mask="'##/##'"
          :placeholder="$t('placeholder.creditCard.expirationDate')"
          :class="['w-full', getInputStateClass('expirationDate')]"
          data-cy="cc-expirationDate"
        />
      </FormField>
    </div>
    <div class="field col-12">
      <Button
        :pt="submitPassThought"
        type="submit"
        :loading="isLoading"
        :label="$t('buttons.continue')"
        class="w-full"
        data-cy="payment-method-form-submit"
      />
    </div>
  </form>
</template>
<script>
import { mask } from 'vue-the-mask'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FormField from '@common/components/atoms/input/FormField.vue'

import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'
import vuelidateMixins from '@mixins/vuelidate-mixin'

import { mapState, mapWritableState } from 'pinia'
import usePaymentStore from '@store/payment'

import EventEnum from '@enums/EventEnum'

export default {
  mixins: [vuelidateMixins],
  directives: { mask },
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    FormField,
    InputText,
    Button
  },
  data() {
    return {
      number: '',
      name: '',
      cvv: '',
      expirationDate: ''
    }
  },
  validations() {
    return {
      number: {
        required: helpers.withMessage(this.$t('formValidation.required'), required),
        minLength: helpers.withMessage(this.$t('formValidation.creditCard.number'), minLength(19))
      },
      name: {
        required: helpers.withMessage(this.$t('formValidation.required'), required)
      },
      cvv: {
        required: helpers.withMessage(this.$t('formValidation.required'), required),
        minLength: helpers.withMessage(this.$t('formValidation.creditCard.cvv'), minLength(3))
      },
      expirationDate: {
        required: helpers.withMessage(this.$t('formValidation.required'), required),
        minLength: helpers.withMessage(
          this.$t('formValidation.creditCard.expirationDate'),
          minLength(5)
        )
      }
    }
  },
  computed: {
    ...mapState(usePaymentStore, ['isLoading']),
    ...mapWritableState(usePaymentStore, ['creditCard']),
    submitPassThought() {
      return {
        root: () => ({
          class: {
            'system-btn': true,
            'system-btn--primary': true
          }
        })
      }
    }
  },
  methods: {
    handleSubmit() {
      this.submit()

      if (this.v$.$invalid) {
        return
      }

      this.creditCard = {
        number: this.number,
        name: this.name,
        cvv: this.cvv,
        expirationDate: this.expirationDate
      }

      this.emitter?.emit(EventEnum.SUBMIT_SUBSCRIPTION)
    }
  }
}
</script>
<style lang="scss">
.payment-method-form {
  border: solid 1px var(--surface-300);
  padding: 1rem 0.5rem;
  border-radius: 8px;
  background-color: var(--surface-200);
}
</style>
