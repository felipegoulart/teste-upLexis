import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    category: 'Todos',
    apps: [],
    app: [],
    filter: false,
    order: 'Lançamento'
  },

  getters: {
    myCategories: state => {
      return state.categories
    },

    myApps: state => {
      return state.apps
    },

    myApp: state => {
      return state.app
    },

    selectedCategory: state => {
      return state.category
    },

    myFilter: state => {
      return state.filter
    },

    myOrder: state => {
      return state.order
    }
  },

  mutations: {
    categories(state, payload) {
      state.categories = payload
    },

    category(state, payload) {
      state.category = payload
    },

    apps(state, payload) {
      state.apps = payload
    },

    app(state, payload) {
      state.app = payload
    },

    filter(state, payload) {
      state.filter = payload
    },

    order(state, payload) {
      state.order = payload
    },
  },
  
  actions: {
    ActionSetCategories({ commit }, payload) {
      commit('categories', payload)
    },

    ActionSetCategory({ commit }, payload) {
      commit('category', payload)

      const shouldFilter = payload !== 'Todos'
      commit('filter', shouldFilter)
    },

    ActionSetApps({ commit }, payload) {
      commit('apps', payload)
    },

    ActionSetApp({ commit }, payload) {
      commit('app', payload)
    },
  },
})
