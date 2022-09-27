import { ref } from "vue"

const user = ref(null)

const demoUser = {
    name: 'Steve',
    email: 'stevannajeeb11@gmail.com',
    savedThemes : [],
    savedStyles: []
}

// need to connect this composable to firebase auth
export default function useAuth() {
    const signIn = () => {
        // firebase sing in function here
        // set user with either return value or getUser function from firebase
        console.log('user before ', user)
        user.value = demoUser
        console.log('user after ', user)
    }

    const signOut = () => {
        // firebase sing out function here
        console.log('user before ', user)
        user.value = null
        console.log('user after ', user)
    }

    return{
        user,
        signIn,
        signOut
    }
}