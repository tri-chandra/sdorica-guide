import Vue from 'vue'
import Router from 'vue-router'
import Sandbox from '@/pages/Sandbox'

import HomePage from '@/pages/HomePage'
import GuidePage from '@/pages/GuidePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/guide/:id',
      props: true,
      name: 'GuidePage',
      component: GuidePage
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    }
  ]
})
