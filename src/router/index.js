import Vue from 'vue'
import Router from 'vue-router'
import Sandbox from '@/pages/Sandbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sandbox',
      component: Sandbox
    }
  ]
})
