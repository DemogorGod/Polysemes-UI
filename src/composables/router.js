import { createWebHistory, createRouter } from "vue-router"
import landing from '../pages/landing/landing.vue'
import auth from '../pages/auth/auth.vue'
import themes from '../pages/themes/themes.vue'
import gallery from '../pages/gallery/gallery.vue'
import notFound from '../pages/not-found/notFound.vue'
import viewComponent from '../pages/gallery/components/viewComponent.vue'

import useAuth from "./auth"

// const { user } = useAuth()

const routes = [
{ 
    path: "/", 
    name: landing, 
    component: landing,
    // meta: { requiresAuth: true }
},
{ 
    path: "/auth", 
    name: auth, 
    component: auth, 
    // meta: { requiresAuth: false } 
},
{ 
    path: "/themes", 
    name: themes, 
    component: themes, 
    // meta: { requiresAuth: false }
},
{ 
    path: "/gallery", 
    name: gallery, 
    component: gallery, 
    children: [
        {
        path: 'component/:id',
        component: viewComponent,
        // meta: { requiresAuth: false }
        },
    ]
},
{ 
    path: "/:catchAll(.*)", 
    name: notFound, 
    component: notFound,
    // meta: { requiresAuth: false }
}
]


const router = createRouter({
history: createWebHistory(),
routes
// shorthand routes:routes
})

// router.beforeResolve((to, from, next) => {
    // replace this with firebase current auth user with catch function if no authenticated users
    // Auth.currentAuthenticatedUser()
    //   .then(() => {
    //     next()
    //   })
    //   .catch(() => {
    //     next({
    //       path: '/auth'
    //     })
    //   })
// })


export default router