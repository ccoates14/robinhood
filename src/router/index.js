import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cash from '../views/Cash.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cash',
    name: 'Cash',
    component: Cash
  },
  {
    path: '/Stocks',
    name: 'Stocks',
    component: Cash
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Cash
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
