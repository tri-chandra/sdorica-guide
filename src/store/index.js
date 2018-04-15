import Vue from 'vue'
import Vuex from 'vuex'

import guideStore from './modules/guide-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isReady: false
  },

  getters: {
    isReady(state) {
      return state.isReady
    }
  },

  mutations: {
    setStoreReady(state) {
      state.isReady = true
    }
  },

  actions: {

  },

  modules: {
    guideStore
  }
})

export default store
