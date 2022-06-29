import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    meta:{layout: 'empty'},
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/CategoriesView',
    name: 'CategoriesView',
    meta:{layout: 'main'},
    component: () => import('@/views/CategoriesView.vue')
      },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
