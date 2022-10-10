import { createWebHistory, createRouter } from "vue-router"
import landing from '../pages/landing/landing.vue'
import auth from '../pages/auth/auth.vue'
import themes from '../pages/themes/themes.vue'
import gallery from '../pages/gallery/gallery.vue'
import notFound from '../pages/not-found/notFound.vue'
import viewComponent from '../pages/gallery/components/viewComponent.vue'
import SignIn from '../pages/auth/components/SignIn.vue'
import SignUp from '../pages/auth/components/SignUp.vue'
import user from '../pages/user/user.vue'

import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth"

import { app } from "./firebase.js"

import { 
    getDocs, 
    query, 
    getFirestore, 
    collection,
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
    children: [
        {
        path: 'component/:id',
        component: viewComponent,
        },
    ],
    meta: { authorize: [] }
},
{ 
    path: "/user", 
    name: user, 
    component: user, 
    meta: { authorize: ['User'] }
},
{ 
    path: "/:catchAll(.*)", 
    name: notFound, 
    component: notFound,
}
]


const router = createRouter({
history: createWebHistory(),
routes
// shorthand routes:routes
})

const hasUserRole = new Promise((resolve, reject) => {
    const auth = getAuth(app)
    onAuthStateChanged(auth, async (_user) => {
        if(_user) {
            const db = getFirestore(app)
            const q = query(collection(db, 'users'))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                if(_user.email === doc.data().email){
                    resolve('user has role');
                }
            })
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
            console.log('resolved')
            next()
        })
        .catch(() => {
            router.push('/auth/sign-in')
        })
    }
    
    next(); 
})


export default router