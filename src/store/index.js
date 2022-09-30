import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Page from './page.js'
import ProjectId from './projectId.js'

export const store = createStore({
  modules: {
    page: Page,
    project: ProjectId
  },
  plugins: [
    createPersistedState()
  ]
})
