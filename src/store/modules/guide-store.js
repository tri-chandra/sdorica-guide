import firebaseHelper from '@/firebase'

import Guide from '@/model/Guide'

const store = {
  namespaced: false,

  state: {
    guides: [],
    collection: null
  },

  getters: {
    collection(state) {
      if (state.collection) return state.collection
      else {
        state.collection = firebaseHelper.db().collection('guide')
        return state.collection
      }
    },
    guides(state) {
      return [...state.guides]
    }
  },

  mutations: {
    addNewGuide(state, value) {
      if (value) {
        state.guides.push(value)
      }
    }
  },

  actions: {
    addNewGuide({ getters, commit }, value) {
      const payload = {
        ...value,
        ownerId: firebaseHelper.loggedInUser().userId,
        isPublic: false,
        team: {
          gold: {},
          black: {},
          white: {},
          advisor: {},
          guildAdvisor: {}
        }
      }
      getters.collection.add(payload).then((docRef) => {
        commit('addNewGuide', payload)
      })
    }
  }
}

export default store
