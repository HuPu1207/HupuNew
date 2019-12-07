/*
 * @Author: 赵新朋
 * @Date: 2019-11-04 15:04:43
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-02 08:44:44
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
