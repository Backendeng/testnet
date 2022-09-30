export default {
  namespaced: true,
  state: () => ({
    ProjectID: '0'
  }),

  getters: {
    getProjectID (state) {
      return state.ProjectID
    }
  },

  actions: {
    // Here we will create the actions that will commit the mutations
    setProjectID ({ commit }, DetailID) {
      commit('changeProjectID', DetailID)
    }
  },

  mutations: {
    // Here we will create the mutations that will change the state
    changeProjectID (state, payload) {
      state.ProjectID = payload
    }
  }
}
