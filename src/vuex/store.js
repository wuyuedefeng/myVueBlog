import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state, age) {
      console.log('age =', age)
      state.count++
    }
  }
})
