import { defineStore } from 'pinia'
import paymentApi from '@common/api/core'
import delay from '@common/helpers/loading-helper'

import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

const usePaymentStore = defineStore('payment', {
  state: () => ({
    isLoading: false,
    user: null
  }),
  actions: {
    /**
     * A POST request to the /subscriptions endpoint on the Payment API
     * @param {number} user_id The id of the user that is subscribing
     * @param {PlanIdentifierEnum} plan_identifier The plan identifier that is being subscribed
     * @returns {Promise} The axios request
     */
    async subscribe(user_id, plan_identifier) {
      this.isLoading = true

      await delay()

      const request = paymentApi.post(`/subscriptions`, {
        user_id,
        plan_identifier
      })

      request
        .then((result) => {
          console.log(result)
          this.emitter.emit(EventEnum.POST_SUBSCRIPTION_SUCCESS)
        })
        .catch(() => {
          this.emitter.emit(EventEnum.POST_SUBSCRIPTION_ERROR, ErrorEnum.SUBSCRIPTION_ERROR)
        })
        .finally(() => {
          this.isLoading = false
        })

      return await request
    }
  }
})

export default usePaymentStore
