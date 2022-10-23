import { ref, onMounted } from "vue"
import { app } from "./firebase.js"

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  updatePassword,
} from "firebase/auth"

import { getDocs, query, getFirestore, collection, setDoc, doc, getDoc } from "firebase/firestore"

const initialized = ref(false)
const user = ref(null)
const loadingAuth = ref(true)
const sub = ref(null)

import router from './router'

// add check current authenticated user on mounted
export default function useAuth() {
    const logIn = async (email, password) => {
        try {
            const auth =  getAuth(app)
            const response = await signInWithEmailAndPassword(auth, email, password)
            const db = getFirestore(app)
            const q = query(collection(db, 'users'))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                if(response.user.email === doc.data().email){
                    user.value = doc.data()
                    console.log('user signed in')
                    router.push('/gallery')
                }
            });
            return (false)
        } catch (error) {
            console.log('Sign In Error () => ', error)
            return(true)
        }
    }

    const logOut = async () => {
        try {
            const auth =  getAuth(app)
            user.value = await signOut(auth)
            console.log('user signed out')
            router.push('/')
        } catch (error) {
            console.log('Sign Out Error () => ', error)
        }
    }

    const signUp = async (firstName, lastName, email, password) => {
        try {
            const auth = getAuth(app)
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response.user.uid)
            const newUser = {
                ID: response.user.uid,
                firstName: firstName,
                lastName: lastName,
                role: 'User',
                email: response.user.email,
                themes: [],
                plugins: []
            }

            const db = getFirestore(app)
            const r = await setDoc(doc(db, "users", response.user.uid), newUser)
            router.push('/auth/sign-in')
            return false
        } catch (error) {
            console.log('Sign Up Error () => ', error)
            return true
        }
    }
    const subscription =  () => {

        const auth = getAuth(app);
        sub.value = onAuthStateChanged(auth, async (_user) => {
            loadingAuth.value = true
            if(_user) {

                const db = getFirestore(app)
                const docRef = doc(db, 'users', _user.uid)
                const docSnap = await getDoc(docRef)
                user.value = docSnap.data()
            } else {
                user.value = false
            } 
            loadingAuth.value = false
        })
    }

    const getUser = () => {
        return user
    }

    const sendPasscodeResetEmail = async(email) => {
        const actionCodeSettings = {
            url: 'http://localhost:5173/',
            handleCodeInApp: true
        };
        const auth =  getAuth(app)
        await sendPasswordResetEmail(auth, email, actionCodeSettings)
            .then(() => {
                return true
            })
            .catch(() => {
                return false
            })
    }

    onMounted( () => {
        if(!initialized.value){
            subscription ()
            initialized.value = true
        }
    })

    return{
        loadingAuth,
        user,
        sub,
        logIn,
        logOut,
        signUp,
        subscription,
        getUser,
        sendPasscodeResetEmail
    }
} 