<script setup>
import { ref, onBeforeMount } from 'vue';
import router from '@/composables/router';
import MenuDown from 'vue-material-design-icons/MenuDown.vue'
import useAuth from '@/composables/auth';

import { app } from "@/composables/firebase.js"

import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth"

import { 
    getFirestore, 
    doc, 
    getDoc 
} from "firebase/firestore"

const { logOut } = useAuth()

const dropdown = ref(false)

const submitSignOut = async () => {
    await logOut()
    router.push('/')
}

const user = ref(null)
const loading = ref(true)

onBeforeMount(() => {
    setTimeout(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, async (_user) => {  
            if(_user) {
                const db = getFirestore(app)
                const docRef = doc(db, 'users', _user.uid)
                const docSnap = await getDoc(docRef)
                user.value = docSnap.data()
            } else {
                user.value = false
            } 
        })
    }, 1000);
    // loading.value = false
})
</script>

<template>
    <!-- <div v-if="loading" class="loading w-full h-full">
    </div> -->
    <div class="nav-container" :class="loading? 'loading': ''">
        <!-- Signed Out -->
        <div class="bg-white page-x-padding h-full table-cell align-middle" v-if="user === false">
            <div class="flex">
                <div class="flex justify-start w-1/3">
                    <div class="mr-[64px]">
                        <router-link to="/" >
                            <img src="../../public/Polysemes.svg" alt="" class="nav-img-sizing">
                        </router-link>
                    </div>
                    <div>
                        <router-link 
                        to="/gallery" 
                        class="nav-tabs mr-[50px] hover:text-primary hover:font-bold"
                        :style="$route.fullPath.split('/')[1] === 'gallery'? 'color: #283d3b; font-weight: 700;' : ''"
                        >Components</router-link>
                        <router-link 
                        to="/themes" 
                        class="nav-tabs hover:text-primary hover:font-bold"
                        :style="$route.path === '/themes'? 'color: #283d3b; font-weight: 700;' : ''"
                        >Themes</router-link>
                    </div>
                </div>
                <div class="flex justify-end w-2/3">
                    <router-link 
                    to="/auth/sign-in">
                        <button class="button_primary">
                            Sign In
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- Signed In -->
        <div class="bg-white page-x-padding h-full table-cell align-middle" v-if="user" @mouseleave="dropdown = false">
            <div class="flex">
                <div class="flex justify-start w-1/3">
                    <div class="mr-[64px]">
                        <router-link to="/" >
                            <img src="../../public/Polysemes.svg" alt="" class="nav-img-sizing">
                        </router-link>
                    </div>
                    <div>
                        <router-link 
                        to="/gallery" 
                        class="nav-tabs mr-[50px] hover:text-primary hover:font-bold"
                        :style="$route.fullPath.split('/')[1] === 'gallery'? 'color: #283d3b; font-weight: 700;' : ''"
                        >Components</router-link>
                    </div>
                </div>
                <div class="flex justify-end w-2/3">
                    <div class="dropdown-container">
                        <div 
                        class="flex right-[50px] bg-brown py-[6px] px-[12px] align-middle text-primary2 cursor-pointer hover:bg-brown/[0.75]"
                        @click="dropdown = true"
                        >
                            <img src="../../public/avatar.svg" alt="" class="my-auto"> 
                            <span class="mx-[10px] my-auto text-span-three">{{user.firstName}}</span>
                            <MenuDown class="text-span-two my-auto"/>
                        </div>
                        <div 
                        class="dropdown bg-red"
                        :style="dropdown? 'display: block' : ''"
                        >
                            <div class="w-[200px] py-[25px] bg-white border">
                                <button class="button_primary mb-[25px]" @click="submitSignOut()">
                                    Sign Out
                                </button>
                                <router-link to="auth/reset-password">
                                    <button class="button_primary">
                                        Change Password
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    