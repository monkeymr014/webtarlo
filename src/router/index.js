import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Crew from '../views/Crew.vue'
import Concerts from '../views/Concerts.vue'
import Music from '../views/Music.vue'
import Gallery from '../views/Gallery.vue'




Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/info',
        name: 'Info',
        component: Info
    },
    {
        path: '/crew',
        name: 'Crew',
        component: Crew
    },

    {
        path: '/concerts',
        name: 'Concerts',
        component: Concerts

    },

    {
        path: '/music',
        name: 'Music',
        component: Music

    },

    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery

    }

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                offset: { x: 0, y: 96 }
            }
        }
    }
})

export default router