
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import IndexDetialPage from '@/pages/IndexDetialPage';
import ZsRegister from '@/pages/ZsRegister';
import Login from '@/pages/Login';
import ZSForget from '@/pages/ZSForget';
import ZsMore from '@/pages/ZsMore';
import LPF_ForumPage from '../pages/LPF_ForumPage';
import LPF_ForumDetailPage from '../pages/LPF_ForumDetailPage';
import LPF_SubjectPage from '../pages/LPF_SubjectPage';
import LPF_SubjectDetailPage from '../pages/LPF_SubjectDetailPage';
import List from '@/pages/List';
import ListDetail from '@/pages/ListDetail';
import ShIndex from '@/pages/ShIndex';
import ShListPage from '@/pages/ShListPage';
import ShopDeatilPage from '@/pages/ShopDeatilPage';
import Detailpage from '@/pages/Detailpage';
import GoodsCarPage from '@/pages/GoodsCarPage';

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
        },
        {
            path: '/LPF_ForumPage',
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
        },
        {
            path: '/ShIndex',
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
        },
        { 
            path: '/List',
            name: 'List', 
            component: List 
        },
        { 
            path: '/ListDetail',
            name: 'ListDetail', 
            component: ListDetail 
        },
        {
            path: '/ShIndex',
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


