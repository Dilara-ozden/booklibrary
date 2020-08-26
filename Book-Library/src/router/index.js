import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/BookStore.vue'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'Book Store Operation',
    component: Home
  },
  {
    path: '/BookAdd',
    name: 'Add New Book',
    component: () => import('../views/BookAdd.vue')
  },
  {
    path: '/BookList',
    name: 'Book List',
    component: () => import('../views/BookList.vue')
  },
  {
    path: '/user',
    name: 'User Operations',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
      path: '/SetToUser',
      name: 'Set To User',
      component: () => import(/* webpackChunkName: "about" */ '../views/SetToUser.vue')
  },
  {
      path: '/GetFromUser',
      name: 'Get From User',
      component: () => import(/* webpackChunkName: "about" */ '../views/GetFromUser.vue')
  },

    ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
