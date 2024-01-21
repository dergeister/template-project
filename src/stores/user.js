import { defineStore } from 'pinia'
import coreApi from '@api/core'
import delay from '@helpers/loading-helper'

import EventEnum from '@enums/EventEnum'
import ErrorEnum from '@enums/ErrorEnum'

import { sanitizeUserEmail } from '@services/user-service'

const useUserStore = defineStore('user', {
  state: () => ({
    isLoading: false,
    user: {
      id: null,
      email: null
    }
  }),
  actions: {
    /**
     * A GET request to the /user/:email endpoint on the Core API that populates the user state
     * @param {string} email The email of the user to be fetched
     * @returns {Promise} The axios request
     */
    async fetchUserByEmail(email) {
      if (this.isLoading) {
        return
      }

      const queryEmail = sanitizeUserEmail(email)

      this.isLoading = true

      await delay()

      return await coreApi
        .get(`/user/${queryEmail}`)
        .then((result) => {
          if (result.data.length > 0) {
            this.user = result.data[0]

            this.emitter.emit(EventEnum.FETCH_USER_BY_EMAIL_SUCCESS)
          } else {
            this.emitter.emit(EventEnum.UNBOUND_ERROR, ErrorEnum.FETCH_USER_BY_EMAIL_ERROR)
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
})

export default useUserStore
