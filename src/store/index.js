import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ui
  },
  strict: debug
})