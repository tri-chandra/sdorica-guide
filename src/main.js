// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import firebaseHelper from '@/firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import store from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data() {
    return {
      isLoggedIn: false
    }
  },
  computed: {
    loggedInUser() {
      const user = firebaseHelper.loggedInUser()

      return user
    },
    isReady() {
      return this.$store.getters.isReady
    }
  },
  watch: {
    isLoggedIn(val) {
      if (val) {
        this.$store.dispatch('initGuideStore')
      } else {
        this.$store.commit('clearGuide')
      }
    }
  },
  created() {
    firebaseHelper.init(this)
  }
})
