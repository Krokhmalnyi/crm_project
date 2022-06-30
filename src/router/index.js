import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    meta:{layout: 'main'},
    component: () => import('@/views/HomeView.vue')
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
  {
    path: '/DetailView',
    name: 'DetailView',
    meta:{layout: 'main'},
    component: () => import('@/views/DetailView.vue')
  },
  {
    path: '/HistoryView',
    name: 'HistoryView',
    meta:{layout: 'main'},
    component: () => import('@/views/HistoryView.vue')
   },
   {
    path: '/PlanningView',
    name: 'PlanningView',
    meta:{layout: 'main'},
    component: () => import('@/views/PlanningView.vue')
   },
   {
    path: '/ProfileView',
    name: 'ProfileView',
    meta:{layout: 'main'},
    component: () => import('@/views/ProfileView.vue')
   },
   {
    path: '/RecordView',
    name: 'RecordView',
    meta:{layout: 'main'},
    component: () => import('@/views/RecordView.vue')
   },
   {
    path: '/RegisterView',
    name: 'RegisterView',
    meta:{layout: 'empty'},
    component: () => import('@/views/RegisterView.vue')
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
