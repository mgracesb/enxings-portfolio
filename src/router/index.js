import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/enxings-portfolio/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/al-natural',
      name: 'al-natural',
      component: () => import('../views/AlNaturalView.vue')
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import('../views/PerformanceView.vue')
    },
    {
      path: '/spots',
      name: 'spots',
      component: () => import('../views/SpotsView.vue')
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/book/:id',
      name: 'book',
      component: () => import('../views/BookView.vue')
    }
  ]
})

export default router
