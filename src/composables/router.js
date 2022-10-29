import { createWebHistory, createRouter } from "vue-router"
import landing from '@/pages/landing/landing.vue'
import auth from '@/pages/auth/auth.vue'
import themes from '@/pages/themes/themes.vue'
import gallery from '@/pages/gallery/gallery.vue'
import notFound from '@/pages/not-found/notFound.vue'
import viewComponent from '@/pages/component/viewComponent.vue'
import SignIn from '@/pages/auth/components/SignIn.vue'
import SignUp from '@/pages/auth/components/SignUp.vue'
import ResetPassword from '@/pages/auth/components/ResetPassword.vue'
// import user from '@/pages/user/user.vue'


import { app } from "./firebase.js"

import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth"

import { 
    getFirestore, 
    doc, 
    getDoc 
} from "firebase/firestore"

const routes = [
{ 
    path: "/", 
    name: landing, 
    component: landing,
    meta: { authorize: [] }
},
{ 
    path: "/auth", 
    name: auth, 
    component: auth,
    children: [
        {
        path: 'sign-in',
        component: SignIn,
        },
        {
        path: 'sign-up',
        component: SignUp,
        },
        {
        path: 'reset-password',
        component: ResetPassword,
        },
    ],
    meta: { authorize: [] }
},
{ 
    path: "/themes", 
    name: themes, 
    component: themes,
    meta: { authorize: [] }
},
{ 
    path: "/gallery", 
    name: gallery, 
    component: gallery,
    meta: { authorize: [] }
},
{ 
    path: "/component/:id", 
    name: viewComponent, 
    component: viewComponent,
    meta: { authorize: [] }
},
{ 
    path: "/user", 
    name: themes, 
    component: themes, 
    meta: { authorize: ['User'] }
},
{ 
    path: "/:catchAll(.*)", 
    name: notFound, 
    component: notFound,
    meta: { authorize: [] }
}
]


const router = createRouter({
history: createWebHistory(),
routes,
})  

const hasUserRole = new Promise((resolve, reject) => {
    const auth = getAuth(app)
    onAuthStateChanged(auth, async (_user) => {
        if(_user) {
            const db = getFirestore(app)
            const docRef = doc(db, 'users', _user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.data().role === 'User'){
                resolve('User role matches auth')
            }
        } else {
            reject('user does not exist or does not have the role')
        }
    })
})


router.beforeEach( (to, from, next) => {
    const { authorize } = to.meta
    if (authorize.length) {
        hasUserRole
        .then(() => {
            next()
        })
        .catch(() => {
            router.push('/auth/sign-in')
        })
    }
    next(); 
})


export default router