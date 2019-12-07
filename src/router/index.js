/*
<<<<<<< HEAD
 * @Author: CoolWind
 * @Date: 2019-11-26 11:09:55
<<<<<<< HEAD
 * @LastEditors: zxs
 * @LastEditTime: 2019-12-06 16:14:35
=======
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-03 09:50:28
>>>>>>> LPF
 * @Description: 
 */
import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import Index from '@/pages/Index';
import IndexDetialPage from '@/pages/IndexDetialPage';
import ZsRegister from '@/pages/ZsRegister';
import Login from '@/pages/Login';
import ZSForget from '@/pages/ZSForget';
import ZsMore from '@/pages/ZsMore';
=======
import LPF_ForumPage from '../pages/LPF_ForumPage';
import LPF_ForumDetailPage from '../pages/LPF_ForumDetailPage';
import LPF_SubjectPage from '../pages/LPF_SubjectPage';
import LPF_SubjectDetailPage from '../pages/LPF_SubjectDetailPage';
>>>>>>> LPF


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
<<<<<<< HEAD
            name: 'Index',
            component: Index
        },
        {
            path: '/Index',
            name: 'Index',
            component: Index
        },
        {
            path: '/IndexDetialPage/:id',
            name: 'IndexDetialPage',
            component: IndexDetialPage,
            props:true
        },
        {
            path: '/ZsRegister',
            name: 'ZsRegister',
            component: ZsRegister
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/ZSForget',
            name: 'ZSForget',
            component: ZSForget
        },
        {
            path: '/ZsMore',
            name: 'ZsMore',
            component: ZsMore
=======
            name: 'LPF_ForumPage',
            component: LPF_ForumPage
        },
        {
            path: '/LPF_ForumDetailPage/:id',
            name: 'LPF_ForumDetailPage',
            component: LPF_ForumDetailPage,
            props: true
        },
        {
            path: '/LPF_SubjectPage/:id',
            name: 'LPF_SubjectPage',
            component: LPF_SubjectPage,
            props: true
        },
        {
            path: '/LPF_SubjectDetailPage/:id',
            name: 'LPF_SubjectDetailPage',
            component: LPF_SubjectDetailPage,
            props: true
>>>>>>> LPF
        }
    ]
})

=======
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
>>>>>>> cq
