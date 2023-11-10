const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@components/pages/HomeView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@components/pages/HomeView.vue')
  }
]

export default routes
