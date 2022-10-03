import { ref } from "vue"
import { app } from "./firebase.js";
import router from './router'

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth
} from "firebase/auth";

const user = ref(null)

// need to connect this composable to firebase auth
export default function useAuth() {
    const logIn = async () => {
        try {
            const auth =  getAuth(app)
            const response = await signInWithEmailAndPassword(auth, 'stevannajeeb11@gmail.com', 'fabio911')
            if(response){
                user.value = response
                router.push('/gallery')
            }
        } catch (error) {
            console.log('Sign In Error () => ', error)
        }
    }

    const logOut = async () => {
        try {
            const auth =  getAuth(app)
            user.value = await signOut(auth)
            router.push('/')
        } catch (error) {
            console.log('Sign Out Error () => ', error)
        }
    }

    return{
        user,
        logIn,
        logOut
    }
}