import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import userAuthenticationGuard from '@common/middlewares/authentication'
import paymentGuard from '@common/middlewares/payment'

import useUserStore from '@common/stores/user'
import usePaymentStore from '@common/stores/payment'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  if (to.meta.requiresUserAuthenticationGuard) {
    const userStore = useUserStore()

    return userAuthenticationGuard(userStore.user.id)
  }

  if (to.meta.requiresPaymentGuard) {
    const paymentStore = usePaymentStore()

    const guard = paymentGuard(paymentStore.hasSubscribed)
    paymentStore.hasSubscribed = false

    return guard
  }
})

export default router
