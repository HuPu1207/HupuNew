/*
 * @Author: CoolWind
 * @Date: 2019-11-26 11:09:55
 * @LastEditors: zxs
 * @LastEditTime: 2019-12-06 16:14:35
 * @Description: 
 */
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import IndexDetialPage from '@/pages/IndexDetialPage';
import ZsRegister from '@/pages/ZsRegister';
import Login from '@/pages/Login';
import ZSForget from '@/pages/ZSForget';
import ZsMore from '@/pages/ZsMore';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
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
        }
    ]
})

