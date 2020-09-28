/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Shop Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/shop/home/Home')
                },
                {
                    path: '/checkout',
                    name: 'checkout',
                    component: () => import('./views/shop/cart/Cart')
                },
                {
                    path: '/product/:item_id',
                    name: 'product',
                    component: () => import('./views/shop/product/Product')
                },

                // =============================================================================
                // Admin routes
                // =============================================================================
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('./views/admin/Dashboard'),
                    children: [
                        {path: '/dashboard/product', component: () => import('./views/admin/DashboardProduct')},
                        {path: '/dashboard/category', component:() => import('./views/admin/DashboardCategory')},
                        {path: '/dashboard/branch', component:() => import('./views/admin/DashboardBranch')},
                        {path: '/dashboard/order', component:() => import('./views/admin/DashboardOrder')},
                    ]
                }
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/auth/Login.vue')
                },
                {
                    path: '/errors-404',
                    name: 'errors-404',
                    component: () => import('@/views/errors/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/errors-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
