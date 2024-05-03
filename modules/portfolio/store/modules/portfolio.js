import { Api } from '@/api'

const portfolioApi = new Api('/api/v1.0/portfolio')

function initialState() {
  return {
    portfolioPage: {},
    crossRate: {
      USD: '0.00',
    },
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
    async GET_CROSS_RATE({ commit }) {
      const res = await portfolioApi.get(this.$axios, 'crossrate')
      commit('SET_STATES', {
        crossRate: res,
      })
    },

    async GET_PORTFOLIO_PAGE({ commit }) {
      const { portfolioByInstrumentType, stocks, indicators, funds } =
        await portfolioApi.get(this.$axios, 'portfolio-page')
      commit('SET_STATES', {
        portfolioPage: { portfolioByInstrumentType, stocks, indicators, funds },
      })
    },
  },

  getters: {},
})
