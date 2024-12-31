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
      path: '/product/:id',
      name: 'productdetail',
      component: () => import('../views/ProductDetailView.vue'),
      props:true
    },
  ],
})

export default router
