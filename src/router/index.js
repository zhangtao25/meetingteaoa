import Vue from 'vue'
import Router from 'vue-router'
import home from './../view/home'
import FileManager from './../view/file-manager'
import ListOfGoods from './../view/list-of-goods'
import AddGoods from './../view/add-goods'

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
        },
        {
          path: 'add-goods',
          name: 'add-goods',
          component: AddGoods,
        }
      ]
    }
  ]
})
