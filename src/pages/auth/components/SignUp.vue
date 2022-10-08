<script setup>
    import { ref, watch } from 'vue'
    import ArrowTopRightThinCircleOutlineIcon from 'vue-material-design-icons/ArrowTopRightThinCircleOutline.vue'
    import useAuth from '../../../composables/auth'

    import CloseIcon from 'vue-material-design-icons/Close.vue'
    import EyeOff from 'vue-material-design-icons/EyeOff.vue'
    import Eye from 'vue-material-design-icons/Eye.vue'

    const loading = ref(false)
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')

    const showPassword = ref('password')
    const toggleInputType =  () => {
        if(showPassword.value === 'password'){
            showPassword.value = 'text'
        } else {
            showPassword.value = 'password'
        }
    }

    const passwrodsMatch = ref(true)
    watch([password, confirmPassword], (newValue, oldValue)=> {
        if(newValue[0].length > 0 && newValue[1].length > 0){
            if(newValue[0] != newValue[1]){
                passwrodsMatch.value = false
            }else{
                passwrodsMatch.value = true
            }
        }
    })

    const { signUp } = useAuth()
    const signUpResponse = ref(false)

    const submitSignUp = async () => {
        loading.value = true
        signUpResponse.value = await signUp(firstName.value, lastName.value, email.value, password.value)
        loading.value = false
    }
</script>

<template>
    <div class="p-[4px]" :class="loading? 'loading' : ''">
        <div class="card px-[25px] py-[25px] w-[350px] h-[500px]">
            <router-link to="/" class="flex mb-[15px]"> 
                <img src="../../../../public/Polysemes.svg" alt="" class="w-[30px]">
            </router-link>
            <div class="text-primary2/[0.5] mb-[25px]">
                <h1 class="text-span-three text-primary2/[0.5] mb-[10px]">Being a member will allow you to</h1>
                <h1 class="text-span-three ml-[5px] mb-[2px]"> 
                    <ArrowTopRightThinCircleOutlineIcon class="mr-[5px] my-auto text-primary"/>
                    Customize components 
                </h1>
                <h1 class="text-span-three ml-[5px] mb-[2px]"> 
                    <ArrowTopRightThinCircleOutlineIcon class="mr-[5px] my-auto text-primary"/>
                    Untilize them with tailwind plugins
                </h1>
                <h1 class="text-span-three ml-[5px] mb-[2px]"> 
                    <ArrowTopRightThinCircleOutlineIcon class="mr-[5px] my-auto text-primary"/>
                    Save multiple themes to your account
                </h1>
            </div>
            <div class="input flex mb-[10px]">
                <input 
                type="text" 
                v-model="firstName"
                placeholder="First Name"
                class="outline-none bg-transparent w-full"
                >
                <button 
                @click="firstName = ''"
                class="hover:text-primary2"
                >
                    <CloseIcon />
                </button>
            </div>
            <div class="input flex mb-[10px]">
                <input 
                type="text" 
                v-model="lastName"
                placeholder="Last Name"
                class="outline-none bg-transparent w-full"
                >
                <button 
                @click="lastName = ''"
                class="hover:text-primary2"
                >
                    <CloseIcon />
                </button>
            </div>
            <hr>
            <div class="input flex my-[10px]">
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
            <div class="input flex mb-[10px]">
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
            <div class="input flex mb-[15px]">
                <input 
                :type="showPassword" 
                v-model="confirmPassword"
                placeholder="Confirm Password"
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
                @click="confirmPassword = ''"
                class="hover:text-primary2"
                >
                    <CloseIcon />
                </button>
            </div>
            <div class="w-full text-center mb-[20px]">
                <span class="text-primary/[0.75] text-span-four" v-if="passwrodsMatch">
                    Password must be at least 8 characters long
                </span>
                <span class="text-pink text-span-four" v-else-if="!passwrodsMatch" >
                    Invalid Email or Password
                </span>
                <span class="text-pink text-span-four" v-else-if="signUpResponse" >
                    Invalid Email or Password, or User already Created
                </span>
            </div>
            <div class="flex justify-between text-span-three align-middle">
                <div class="text-primary2/[.5] my-auto pl-[6px]">
                    Already a member? <router-link to="/auth/sign-in" class="text-secondary2 hover:text-pink"> sing in</router-link>
                </div>
                <div>
                    <button 
                    class="button_primary font-bold	" 
                    @click="submitSignUp()" 
                    :disabled="email.length === 0 || password.length === 0 || firstName.length === 0 || lastName.length === 0 || confirmPassword.length === 0 || !passwrodsMatch">
                        Sing Up
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
