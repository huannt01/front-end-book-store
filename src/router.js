import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue'
import Login from './pages/LoginUser.vue'
import Register from './pages/RegisterUser.vue'
import ChangePassword from './pages/ChangePassword.vue'
import UserPage from './pages/UserPage.vue'
import UserProfile from './pages/UserProfile.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/user/:id',
        name: 'user-page',
        component: UserPage,
    },
    {
        path: '/user/:id/profile',
        name: 'user-profile',
        component: UserProfile,
    },
    {
        path: '/user/:id/password',
        name: 'change-password',
        component: ChangePassword
    },
]

const router = new VueRouter({
    routes
});

export default router;