function initialState() {
  return {}
}
export const state = () => {
  return initialState()
}

export const mutations = {
  SET_STATES(state, payload) {
    const keys = Object.keys(payload)
    keys.forEach((key) => {
      state[key] = payload[key]
    })
  },
  CLEAR_STATES(state, payload) {
    const s = initialState()
    payload.forEach((el) => {
      state[el] = s[el]
    })
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch('auth/GET_ACCOUNT')
  },
  nuxtClientInit({ commit }, context) {
    // code
  },
}

export const getters = {}
