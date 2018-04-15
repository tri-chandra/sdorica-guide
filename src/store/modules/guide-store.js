import firebaseHelper from '@/firebase'

import Guide from '@/model/Guide'

const store = {
  namespaced: false,

  state: {
    guides: [],
    selectedGuide: {},
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
      return state.guides
    },
    selectedGuide(state) {
      return state.selectedGuide
    }
  },

  mutations: {
    addNewGuide(state, value) {
      if (value) {
        state.guides.push(value)
      }
    },
    clearGuide(state) {
      state.guides = []
    },
    setSelectedGuide(state, value) {
      state.selectedGuide = value
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
    },
    initGuideStore({ getters, commit }) {
      commit('clearGuide')
      getters.collection.where(
        'ownerId', '==', firebaseHelper.loggedInUser().userId
      ).get().then((response) => {
        response.forEach(doc => {
          commit('addNewGuide', {
            id: doc.id,
            ...doc.data()
          })
        })

        commit('setStoreReady')
      })
    },
    saveGuide({ getters, commit }, value) {
      getters.collection.doc(value.id).set(value)
    },
    getSelectedGuide({getters, commit}, id) {
      getters.collection.doc(id).get().then((doc) => {
        commit('setSelectedGuide', doc.data())
      })
    }
  }
}

export default store
