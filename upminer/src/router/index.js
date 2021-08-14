import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/layout/Home"
import Apps from "@/views/Apps"
import Details from "@/views/Details"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Aplicativos' },
    children: [
      {
        path: '/',
        name: 'Aplicativos',
        component: Apps
      },
      {
        path: 'detalhes/:id',
        name: 'Details',
        component: Details
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
