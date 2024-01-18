import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'


const router = createRouter({
  history: createWebHistory('/enxings-portfolio/'),
  routes: [
    {
      path: '/',
      name: 'sobre-mi',
      component: AboutView
    },
    {
      path: '/sin-filtros',
      name: 'sin-filtros',
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
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/book/:id',
      name: 'book',
      component: () => import('../views/BookView.vue')
    }
  ]
})

export default router
