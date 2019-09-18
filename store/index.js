export const state = () => ({
  modal: null
})

export const mutations = {
  setModal(state, modal) {
    state.modal = modal
  }
}

export const getters = {
  modal(state) {
    return state.modal
  }
}

export const actions = {
  updateModal({ commit }, modal) {
    commit('setModal', modal)
  },
  clearModal({ commit }) {
    commit('setModal', null)
  }
}
