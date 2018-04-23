// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/index.js'
import {RotateSquare2} from 'vue-loading-spinner'
import vBlur from 'v-blur'


Vue.use(BootstrapVue)
Vue.use(vBlur)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App> <rotate-square2></rotate-square2> </App>',
  components: { App, RotateSquare2 }
})
