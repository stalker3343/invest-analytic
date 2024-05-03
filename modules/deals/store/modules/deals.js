import { Api } from '@/api'

const dealsApi = new Api('/api/v1.0/deals')

function initialState() {
  return {
    deals: [],
  }
}

export default () => ({
  namespaced: true,
  state: () => {
    return initialState()
  },

  mutations: {
    SET_STATES(state, payload) {
      const keys = Object.keys(payload)
      keys.forEach((key) => {
        state[key] = payload[key]
      })
    },
    CLEAR_STATES(state, payload) {
      const s = initialState()
      if (!payload) payload = Object.keys(state)
      payload.forEach((el) => {
        state[el] = s[el]
      })
    },
  },

  actions: {
    async GET_DEALS({ commit }) {
      const res = await dealsApi.get(this.$axios, 'list')
      commit('SET_STATES', {
        deals: res,
      })
    },
  },

  getters: {},
})
