import Vue from 'vue'
import Router from 'vue-router'
import Sandbox from '@/pages/Sandbox'

import LandingPage from '@/pages/LandingPage'
import HomePage from '@/pages/HomePage'
import GuidePage from '@/pages/GuidePage'
import PreviewPage from '@/pages/PreviewPage'
import SetGuidePage from '@/pages/SetGuidePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/mylist',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/set-guide/:id',
      props: true,
      name: 'SetGuidePage',
      component: SetGuidePage
    },
    {
      path: '/guide/:id',
      props: true,
      name: 'GuidePage',
      component: GuidePage
    },
    {
      path: '/preview/:id',
      props: true,
      name: 'PreviewPage',
      component: PreviewPage
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    }
  ]
})
