import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/collezioni',
      name: 'collezioni',
      component: () => import('../views/CollezioniView.vue')
    },
    {
      path: '/modelli',
      name: 'modelli',
      component: () => import('../views/ModelloView.vue')
    },
    {
      path: '/prodotti',
      name: 'prodotti',
      component: () => import('../views/ProdottiView.vue')
    },
  ]
})

export default router
