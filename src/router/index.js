import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/introduce',
            name: 'introduce',
            component: () => import('../views/Introduce.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index.vue')
        },
        {
            path: '/add',
            name: 'add',
            component: () => import('../views/AddGood.vue')
        },
        {
            path: '/swiper',
            name: 'swiper',
            component: () => import('../views/Swiper.vue')
        },
        {
            path: '/hot',
            name: 'hot',
            component: () => import('../views/Hot.vue')
        },
        {
            path: '/new',
            name: 'new',
            component: () => import('../views/Hot.vue')
        },
        {
            path: '/recommend',
            name: '/recommend',
            component: () => import('../views/Hot.vue')
        },
        {
            path: '/category',
            name: 'category',
            component: () => import('../views/Category.vue')
        },
        {
            path: '/good',
            name: 'good',
            component: () => import('../views/Good.vue')
        }
    ]
})

export default router
