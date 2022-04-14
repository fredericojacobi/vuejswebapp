import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/Home/FIndex.vue')
const Dashboard = () => import('@/views/Dashboard/FIndex.vue')
const Credentials = () => import('@/views/Credentials/FIndex.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            hasAuth: true
        }
    },
    {
        path: '/credentials',
        name: 'Credentials',
        component: Credentials,
        meta: {
            hasAuth: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: {
            name: 'Home'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router