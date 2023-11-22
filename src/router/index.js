import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue')
    },
    {
      path: '/tags',
      name: 'CreateTag',
      component: () => import('../views/Tags/CreateTagView.vue')
    }
  ]
})

export default router
