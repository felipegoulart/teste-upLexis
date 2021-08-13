import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/Home"

const routes = [
  {
    path: '/',
    name: 'Home',
    childrens: [
      {
        path: 'app/:id',
        name: 'app',
        component: Home
      }
    ]
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
