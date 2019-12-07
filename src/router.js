/*
 * @Author: 赵新朋
 * @Date: 2019-12-02 09:17:31
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-07 19:55:11
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import List from '@/pages/List'
import ListDetail from '@/pages/ListDetail'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { 
        path: '/List',
        name: 'List', 
        component: List 
    },
    { 
      path: '/ListDetail',
      name: 'ListDetail', 
      component: ListDetail 
  }
//   { 
//     path: '/Index',
//     name: 'Index', 
//     component: Index 
// }
  ]
})
