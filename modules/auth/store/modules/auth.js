import { Api } from '@/api'

const api = new Api('api/v1.0/auth')

export default () => ({
  namespaced: true,
  state: () => {
    return {
      account: null,
    }
  },

  mutations: {
    SET_STATES(state, payload) {
      const keys = Object.keys(payload)
      keys.forEach((key) => {
        state[key] = payload[key]
      })
    },
  },

  actions: {
    async LOGIN({ commit }, payload) {
      const account = await api.post(this.$axios, 'login', payload)
      if (account) {
        this.$cookies.set('token', account.token)
        commit('SET_STATES', { account })
        return account
      }
    },
    async GET_ACCOUNT({ commit }) {
      const token = this.$cookies.get('token')
      if (!token) {
        return false
      }
      try {
        const account = await api.get(this.$axios, 'getAccount', null, {
          Authorization: 'Bearer ' + token,
        })
        if (account && account.id) {
          commit('SET_STATES', { account })
        }
      } catch (error) {
        console.error(err)
      }
    },
  },

  getters: {},
})
