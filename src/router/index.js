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
        children: [{
            path: 'reserve',
            name: 'Admin-Reserve',
            component: () =>
                import ('../components/admin/Admin-Reserve.vue')
        }, {
            path: 'memberList',
            name: 'Admin-MemberList',
            component: () =>
                import ('../components/admin/Admin-MemberList.vue')
        }, ],
    }, {
        path: '/reserve',
        name: 'ReserveView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ReserveView.vue')
    }, {
        path: '/point',
        name: 'Point',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/PointView.vue')
    }, {
        path: '/news',
        name: 'News',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/NewsView.vue')
    }, {
        path: '/new/:id',
        name: 'New',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/NewView.vue')
    }, {
        path: '/menu',
        name: 'Menu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/MenuView.vue')
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