import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menus',
      name: 'menus',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product/:id',
      name: 'productdetail',
      component: () => import('../views/ProductDetailView.vue'),
      props:true
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
