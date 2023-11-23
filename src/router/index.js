import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user' // Import the user store from Pinia

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
      meta: { requiresAuth: true } // Add meta field to indicate that authentication is required
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/login/RegisterView.vue')
    },
    {
      path: '/tags',
      name: 'CreateTag',
      component: () => import('../views/tags/CreateTagView.vue'),
      meta: { requiresAuth: true } // Add meta field to indicate that authentication is required
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore() // Access the user store
  const isAuthenticated = userStore.isAuthenticated() // Check if the user is authenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login') // Redirect to login page if authentication is required but user is not logged in
  } else {
    next() // Proceed to the next route
  }
})

export default router
