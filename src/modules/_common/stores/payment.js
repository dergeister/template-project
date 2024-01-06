import { defineStore } from 'pinia'
import delay from '@common/helpers/loading-helper'

import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

const usePaymentStore = defineStore('payment', {
  state: () => ({
    isLoading: false,
    subscriptionType: SubscriptionTypeEnum.STUDENT,
    planIdentifier: PlanIdentifierEnum.STUDENT_YEARLY,
    creditCard: {
      number: '',
      name: '',
      cvv: '',
      expirationDate: ''
    }
  }),
  actions: {
    sanitizeSubscriptionPayload(user_id) {
      const credit_card = { ...this.creditCard }

      const ccName = credit_card.name.trim()
      const ccNumber = credit_card.number.replaceAll(' ', '')

      credit_card.name = ccName
      credit_card.number = ccNumber

      return {
        user_id,
        credit_card,
        plan_identifier: this.planIdentifier
      }
    },
    /**
     * A POST request to the /subscriptions endpoint on the Payment API
     * @param {number} user_id The id of the user that is subscribing
     * @returns {Promise} The axios request
     */
    async subscribe(user_id) {
      if (this.isLoading) {
        return
      }

      this.isLoading = true

      await delay()

      const payload = this.sanitizeSubscriptionPayload(user_id)

      return await this.api.payment
        .post(`/subscriptions`, payload)
        .then(() => {
          this.emitter.emit(EventEnum.POST_SUBSCRIPTION_SUCCESS)
        })
        .catch(() => {
          this.emitter.emit(EventEnum.UNBOUND_ERROR, ErrorEnum.SUBSCRIPTION_ERROR)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
})

export default usePaymentStore
