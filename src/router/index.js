import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    component: () => import('../components/mainMenu.vue'),
    children: [{
        path: 'test',
        component: () => import('../components/test.vue')
    },
    {
        path: 'child',
        component: () => import('../components/subcomponent/child.vue')
    },
    {
        path: 'chart',
        component: () => import('../components/chart.vue')
    }
    ]
},
{
    path: '*',
    redirect: '/'
}
]

const router = new Router({
    routes,
    mode: "history"
})

export default router