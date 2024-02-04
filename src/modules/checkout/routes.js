const routes = [
  {
    path: '/',
    name: 'checkout',
    component: () => import('@checkout/components/pages/CheckoutView.vue'),
    meta: { requiresUserAuthenticationGuard: true }
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: () => import('@checkout/components/pages/ThankyouView.vue'),
    meta: { requiresPaymentGuard: true }
  }
]

const moduleRoutes = {
  path: '/checkout',
  component: () => import('@checkout/CheckoutModule.vue'),
  children: routes
}

export default moduleRoutes
