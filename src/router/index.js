import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cash from '../views/Cash.vue'
import Stocks from '../views/Stocks'
import Profile from '../views/Profile'

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
    component: Stocks
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
