<script setup>
import { ref } from 'vue';
import MenuDown from 'vue-material-design-icons/MenuDown.vue'
import useAuth from '../composables/auth';

const { user, logOut, loadingAuth } = useAuth()
const dropdown = ref(false)


</script>

<template>
    <!-- Signed Out -->
    <div v-if="loadingAuth " class="loading w-full h-full">
    </div>
    <div v-else class="nav-container">
        <div class="bg-white page-x-padding h-full table-cell align-middle" v-if="!user">
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
                                <button class="button_primary mb-[25px]" @click="logOut()">
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
    