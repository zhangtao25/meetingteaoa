import Vue from 'vue'
import Router from 'vue-router'
import home from './../view/home'
import test from './../components/test'
import CommodityManagement from './../components/commodity-management'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: 'test',
          name: 'test',
          component: test,
        },
        {
          path: 'CommodityManagement',
          name: 'CommodityManagement',
          component: CommodityManagement,
        }
      ]
    }
  ]
})
