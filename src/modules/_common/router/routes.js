const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@home/pages/HomeView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@checkout/pages/CheckoutView.vue')
  },
  {
    path: '/thanktou',
    name: 'thankyou',
    component: () => import('@checkout/pages/ThankyouView.vue')
  }
]

export default routes
