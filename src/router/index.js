import Vue from 'vue'
import Router from 'vue-router'
import Sandbox from '@/pages/Sandbox'

import HomePage from '@/pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
