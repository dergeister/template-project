import { defineStore } from 'pinia/dist/pinia'
import coreApi from '@common/api/core'
import delay from '@common/helpers/loading'

const useUserStore = defineStore('user', {
  state: () => ({
    isLoading: false,
    user: null
  }),
  actions: {
    async fetchUserByEmail(email) {
      this.isLoading = true

      await delay()

      const request = coreApi.get(`/user/${email}`)
      request.then(() => {
        this.isLoading = false
      })

      return await request
    }
  }
})

export default useUserStore
