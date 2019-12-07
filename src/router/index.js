/*
 * @Author: your name
 * @Date: 2019-11-04 17:24:20
 * @LastEditTime: 2019-12-07 10:52:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\vueone\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ShIndex from '@/pages/ShIndex'
import ShListPage from '@/pages/ShListPage'
import Detailpage from '@/pages/Detailpage'
import ShopDeatilPage from '@/pages/ShopDeatilPage'
import GoodsCarPage from '@/pages/GoodsCarPage'
// import CqGoodslistPage from '@/pages/CqGoodslistPage'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShIndex',
      component: ShIndex
    },
    {
      path: '/ShListPage',
      name: 'ShListPage',
      component: ShListPage
    },
    {
      path: '/Detailpage',
      name: 'Detailpage',
      component: Detailpage
    },
    {
      path: '/ShopDeatilPage',
      name: 'ShopDeatilPage',
      component: ShopDeatilPage
    },
    {
      path: '/GoodsCarPage',
      name: 'GoodsCarPage',
      component: GoodsCarPage
    }
  ]
})
