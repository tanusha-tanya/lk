export const state = () => ({
    cities: []
  })
  
  export const mutations = {
    setCities(state, cities) {
      state.cities = cities
    }
  }
  
  export const actions = {
    async fetch({commit}) {
      const cities = await this.$axios.$get('http://192.168.2.137:8080/api/cities').then((response) =>{
        JSON.parse(response.request.response).data       
      })
      console.log(cities)
      commit('setCities', cities)
    }
  }
  
  export const getters = {
    cities: s => s.cities
  }