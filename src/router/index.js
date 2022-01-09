import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/member',
        name: 'Member',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/MemberView.vue'),
        children: [{
                path: 'reserve',
                name: 'Member-Reserve',
                component: () =>
                    import ('../components/member/Member-Reserve.vue')
            },
            {
                path: 'information',
                name: 'Member-Information',
                component: () =>
                    import ('../components/member/Member-Information.vue')
            },
            {
                path: 'edit',
                name: 'Member-Password',
                component: () =>
                    import ('../components/member/Member-Password.vue')
            }
        ],
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AdminView.vue'),
    }, {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router