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

  actions: {},

  getters: {},
})
