export const state = () => ({
    token: null,
    isLocal: true
})

export const mutations = {
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = null
    }
}

export const actions = {
    nuxtServerInit({dispatch}) {
    },
    login({commit}, {token}){
      commit('setToken', token)
      localStorage.setItem('token', token);
    },
    logout({commit}) {
      commit('clearToken')
      localStorage.removeItem('token')
    },
}

export const getters = {
    hasToken: s => !!s.token
}
