import Vue from 'vue'
import Router from 'vue-router'

import Home from '../Home.vue'
import Cart from '../Cart.vue'
import Explorer from '../Explorer.vue'
import Me from '../Me.vue'
import BookDetails from '../BookDetails.vue'
import Tabs from '../components/tabs.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Tabs',
      component: Tabs,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'explorer',
          name: 'Explorer',
          component: Explorer
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        }
      ]
    },
    {
      path: '/books/:id',
      name: 'BookDetails',
      component: BookDetails
    }
  ]
})
