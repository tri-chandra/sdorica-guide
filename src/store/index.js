import Vue from 'vue'
import Vuex from 'vuex'

import guideStore from './modules/guide-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },

  getters: {

  },

  mutations: {

  },

  actions: {
    init({ commit }) {
      commit('initGuideStore')
    }
  },

  modules: {
    guideStore
  }
})

export default store
