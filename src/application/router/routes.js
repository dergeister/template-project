const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@home/pages/HomeView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@checkout/pages/CheckoutView.vue'),
    meta: { requiresUserAuthenticationGuard: true }
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: () => import('@checkout/pages/ThankyouView.vue'),
    meta: { requiresPaymentGuard: true }
  }
]

export default routes
