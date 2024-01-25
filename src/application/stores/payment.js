import { defineStore } from 'pinia'
import delay from '@helpers/loading-helper'

import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

import PaymentService from '@services/payment-service'

const usePaymentStore = defineStore('payment', {
  state: () => ({
    isLoading: false,
    subscriptionType: SubscriptionTypeEnum.PROFESSIONAL,
    planIdentifier: PlanIdentifierEnum.YEARLY,
    creditCard: {
      number: '',
      name: '',
      cvv: '',
      expirationDate: ''
    },
    hasSubscribed: false
  }),
  actions: {
    /**
     * A POST request to the /subscriptions endpoint on the Payment API
     * @param {number} userId The id of the user that is subscribing
     * @returns {Promise} The axios request
     */
    async subscribe(userId) {
      if (this.isLoading) {
        return
      }

      this.isLoading = true

      await delay()

      const payload = PaymentService.sanitizeSubscription({
        userId,
        creditCard: this.creditCard,
        planIdentifier: this.planIdentifier
      })

      return await this.api.payment
        .post(`/subscriptions`, payload)
        .then(() => {
          this.emitter.emit(EventEnum.POST_SUBSCRIPTION_SUCCESS)
          this.hasSubscribed = true
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
