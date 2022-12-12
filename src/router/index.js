import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/chart1',
        component: () => import('../components/chart1.vue')
    },
    {
        path: '/chart2',
        component: () => import('../components/chart2.vue')
    },
    {
        path: '*',
        redirect: '/chart1'
    }
]

const router = new Router({
    routes,
    mode: "history"
})

export default router