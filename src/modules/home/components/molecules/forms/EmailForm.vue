<template>
  <form
    class="formgrid grid home-email-form"
    @submit.prevent="handleSubmit"
  >
    <div class="field col-12">
      <FormField
        :label="$t('user.email')"
        :validationText="getFieldErrorMessage('email')"
        :invalid="getFieldInvalid('email')"
        required
        id="email"
      >
        <InputText
          type="text"
          v-model="v$.email.$model"
          :placeholder="$t('placeholder.email')"
          :class="['w-full', getInputStateClass('email')]"
          data-cy="email-input"
        />
      </FormField>
    </div>
    <div class="field col-12">
      <Button
        :pt="submitPassThought"
        type="submit"
        :loading="isLoading"
        :label="$t('buttons.continue')"
        size="small"
        class="w-full"
        data-cy="email-form-submit"
      />
    </div>
  </form>
</template>
<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import FormField from '@common/components/atoms/input/FormField.vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import vuelidateMixins from '@mixins/vuelidate-mixin'

import { mapState, mapWritableState } from 'pinia'
import useUserStore from '@store/user'

import EventEnum from '@enums/EventEnum'

export default {
  mixins: [vuelidateMixins],
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    Button,
    InputText,
    FormField
  },
  data() {
    return {
      email: ''
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage(this.$t('formValidation.required'), required),
        email: helpers.withMessage(this.$t('formValidation.email'), email)
      }
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['user']),
    ...mapState(useUserStore, ['isLoading']),
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

      this.emitter?.emit(EventEnum.SUBMIT_EMAIL, this.email)
    }
  }
}
</script>
<style lang="scss">
.home-email-form {
  min-width: 350px;

  @media screen and (max-width: $large-breakpoint) {
    min-width: unset;
  }
}
</style>
