/*
 * @Author: CoolWind
 * @Date: 2019-11-26 11:09:55
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-03 09:50:28
 * @Description: 
 */
import Vue from 'vue';
import Router from 'vue-router';
import LPF_ForumPage from '../pages/LPF_ForumPage';
import LPF_ForumDetailPage from '../pages/LPF_ForumDetailPage';
import LPF_SubjectPage from '../pages/LPF_SubjectPage';
import LPF_SubjectDetailPage from '../pages/LPF_SubjectDetailPage';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
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
        }
    ]
})

