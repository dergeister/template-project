import { defineStore } from 'pinia'
import paymentApi from '@common/api/core'
import delay from '@common/helpers/loading-helper'

import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'

const usePaymentStore = defineStore('payment', {
  state: () => ({
    isLoading: false,
    planIdentifier: PlanIdentifierEnum.SEMESTER,
    creditCard: {
      number: '',
      name: '',
      cvv: '',
      expirationDate: ''
    }
  }),
  actions: {
    /**
     * A POST request to the /subscriptions endpoint on the Payment API
     * @param {number} user_id The id of the user that is subscribing
     * @returns {Promise} The axios request
     */
    async subscribe(user_id) {
      this.isLoading = true

      await delay()

      const request = paymentApi.post(`/subscriptions`, {
        user_id,
        plan_identifier: this.planIdentifier,
        credit_card: this.creditCard
      })

      request
        .then((result) => {
          console.log(result)
          this.emitter.emit(EventEnum.POST_SUBSCRIPTION_SUCCESS)
        })
        .catch(() => {
          this.emitter.emit(EventEnum.UNBOUND_ERROR, ErrorEnum.SUBSCRIPTION_ERROR)
        })
        .finally(() => {
          this.isLoading = false
        })

      return await request
    }
  }
})

export default usePaymentStore
