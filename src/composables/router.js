import { createWebHistory, createRouter } from "vue-router"
import landing from '../pages/landing/landing.vue'
// import ViewComponents from '../views/ViewComponents.vue'
// import NotFound from '../views/NotFound.vue'

const routes = [
{ path: "/", name: landing, component: landing },
// { path: "/view-component/:id", name: ViewComponents, component: ViewComponents },
// { path: "/:catchAll(.*)", name: NotFound, component: NotFound }
]


const router = createRouter({
history: createWebHistory(),
routes
// shorthand routes:routes
})


export default router