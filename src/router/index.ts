import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@presentation/components/page/HomePage/index.vue')
    },
    {
        path: '/products',
        component: () =>
            import('@presentation/components/page/ProductsPage/index.vue')
    },
    {
        path: '/cart',
        component: () => import('@presentation/components/page/CartPage/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import('@presentation/components/page/ErrorPage/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
