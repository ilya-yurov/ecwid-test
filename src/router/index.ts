import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@presentation/components/page/Home/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import('@presentation/components/page/NotFound/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
