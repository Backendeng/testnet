export default {
  namespaced: true,
  state: () => ({
    selectedPage: 'Home'
  }),

  getters: {
    getPage (state) {
      return state.selectedPage
    }
  },

  actions: {
    // Here we will create the actions that will commit the mutations
    setPage ({ commit }, pageName) {
      commit('changePageName', pageName)
    }
  },

  mutations: {
    // Here we will create the mutations that will change the state
    changePageName (state, payload) {
      state.selectedPage = payload
    }
  }
}
