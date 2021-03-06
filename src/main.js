// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import UIKit from './vue-uikit'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(UIKit)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  http: {
    root: '/fixtures'
  }
})
