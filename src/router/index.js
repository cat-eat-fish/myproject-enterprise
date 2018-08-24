import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'                  //主页


import No404 from '@/page/404'                  //404页面

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },















    {
      path: '*',
      name: 'no404',
      component: No404
    }
  ]
})
