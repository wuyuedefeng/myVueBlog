import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
const Home = { template: '<p>home page</p>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sub',
      name: 'sub',
      component: function (resolve) {
        require(['components/Sub.vue'], resolve)
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
