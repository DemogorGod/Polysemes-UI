<script setup>
    import { ref } from 'vue';
    import useAuth from '../../../composables/auth'

    import CloseIcon from 'vue-material-design-icons/Close.vue'

    import { app } from "../../../composables/firebase.js"

    import {
        getAuth,
        sendPasswordResetEmail,
        signOut
    } from "firebase/auth"

    const { user } = useAuth()

    // step 0: email input,  step 1: email link varification
    const step = ref(0)
    const email = ref('')
    const loading = ref(false)

    const error = ref(null)

    const sendEmail = async () => {
        const actionCodeSettings = {
            url: 'http://localhost:5173/',
            handleCodeInApp: true
        };
        const auth =  getAuth(app)
        await sendPasswordResetEmail(auth, email.value, actionCodeSettings)
            .then(async () => {
                error.value = false
                step.value = 1
                user.value = await signOut(auth)
                loading.value = true
            })
            .catch(() => {
                error.value = true
            })
    }
</script>

<template>
    <div class="p-[4px]" :class="loading? 'loading' : ''">
        <div 
        v-if="step === 0"
        class="card px-[25px] py-[25px] w-[350px] h-[450px]" 
        >
            <div class="mb-[15px]">
                <router-link to="/">
                    <img src="../../../../public/Polysemes.svg" alt="" class="w-[30px]">
                </router-link>
            </div>
            <div class="text-primary2 text-span-two mb-[50px]">
                Change Password
            </div>
            <div>
                <span class="text-span-three text-primary/[0.5]">Verify your email</span>
                <div class="input flex mb-[10px] mt-[10px] mb-[100px]">
                    <input 
                    type="text" 
                    v-model="email"
                    placeholder="Email"
                    class="outline-none bg-transparent w-full"
                    >
                    <button 
                    @click="email = ''"
                    class="hover:text-primary2"
                    >
                        <CloseIcon />
                    </button>
                </div>

                <div class="flex w-full justify-center mb-[10px]">
                    <button class="button_primary" @click="sendEmail">
                        Send Varification Code
                    </button>
                </div>
                <div class="w-full text-center">
                    <span 
                    v-if="!error"
                    class="text-span-three text-primary/[0.5]"
                    >
                        You should recieve your varification email soon
                    </span>
                    <span 
                    v-else-if="error"
                    class="text-span-three text-secondary/[0.5]"
                    >
                        Invalid Email
                    </span>
                </div>
            </div>
        </div>
        <div 
        v-if="step === 1"
        class="card px-[25px] py-[25px] w-[350px] h-[450px] text-center" 
        >
            <span class="text-primary/[0.5] text-span-three">
                An email varification link will be sent you shortly
            </span>
            <hr class="text-secondary my-[20px]">
            <div class="text-span-three">
                <RouterLink to="/" class="text-secondary/[0.65] hover:text-secondary text-span-three">
                    Home
                </RouterLink> 
                <span class="mx-[10px]">|</span>
                <RouterLink to="/auth/sign-in" class="text-secondary/[0.65] hover:text-secondary text-span-three">
                    Sign In
                </RouterLink>
            </div>
            
        </div>
    </div>
    
</template>