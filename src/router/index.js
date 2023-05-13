import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/product.vue')
    },
    {
      path: '/product_form',
      name: 'product_form',
      component: () => import('../views/product_form.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/category.vue')
    },
    {
      path: '/list/:id',
      name: 'list',
      component: () => import('../views/product_list.vue')
    },

  ]
})

export default router
