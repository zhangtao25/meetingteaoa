import Vue from 'vue'
import Router from 'vue-router'
import home from './../view/home'
// import test from './../components/test'
// import CommodityManagement from './../components/commodity-management'
import FileManager from './../view/file-manager'
import ListOfGoods from './../view/list-of-goods'

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
          path: 'file-manager',
          name: 'file-manager',
          component: FileManager,
        },
        {
          path: 'list-of-goods',
          name: 'list-of-goods',
          component: ListOfGoods,
        }
      ]
    }
  ]
})
