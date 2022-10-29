<script setup>
    import { ref } from 'vue'

    import router from '@/composables/router'

    import useAuth from '../../../composables/auth'

    import CloseIcon from 'vue-material-design-icons/Close.vue'
    import EyeOff from 'vue-material-design-icons/EyeOff.vue'
    import Eye from 'vue-material-design-icons/Eye.vue'

    const { logIn } = useAuth()
    const email = ref('')
    const password = ref('')
    const showPassword = ref('password')

    const logInResponse = ref(false)

    const toggleInputType =  () => {
        if(showPassword.value === 'password'){
            showPassword.value = 'text'
        } else {
            showPassword.value = 'password'
        }
    }
    const loading = ref(false)
    const submitSignIn = async () => {
        loading.value = true
        logInResponse.value = await logIn(email.value, password.value)
        router.push('/gallery')
        loading.value = false
    }
</script>

<template>
    <div class="p-[4px]" :class="loading? 'loading' : ''">
        <div class="card px-[25px] py-[25px] w-[350px] h-[450px]">
            <div class="mb-[15px]">
                <router-link to="/">
                    <img src="../../../../public/Polysemes.svg" alt="" class="w-[30px]">
                </router-link>
            </div>
            <div class="text-primary2 text-span-two mb-[50px]">
                Being creative starts here
            </div>
            <div class="input flex mb-[30px]">
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

            <div class="flex justify-end text-span-four text-primary2/[0.5] pb-[5px]">
                <router-link to="/auth/reset-password" class="hover:text-primary"> Forgot Password?</router-link>
            </div>
            <div class="input flex mb-[5px]">
                <input 
                :type="showPassword" 
                v-model="password"
                placeholder="Password"
                class="outline-none bg-transparent w-full"
                >
                <button 
                @click="toggleInputType"
                class="mx-[10px] hover:text-primary2 hover:bg-grey px-[5px]"
                >
                    <Eye v-if="showPassword === 'password'" />
                    <EyeOff v-else/>
                </button>
                <button 
                @click="password = ''"
                class="hover:text-primary2"
                >
                    <CloseIcon />
                </button>
            </div>
            <div class="w-full text-center mb-[45px]">
                <span class="text-pink text-span-four" v-if="logInResponse">
                    Invalid Email or Password
                </span>
            </div>

            <div class="flex justify-between text-span-three align-middle">
                <div class="text-primary2/[.5] my-auto pl-[6px]">
                    Not a member? <router-link to="/auth/sign-up" class="text-secondary2 hover:text-pink"> sing up</router-link>
                </div>
                <div>
                    <button class="button_primary font-bold	" @click="submitSignIn()" :disabled="email.length === 0 || password.length === 0">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</template>