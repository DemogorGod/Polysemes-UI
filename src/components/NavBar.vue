<script setup>
import { ref } from 'vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import useAuth from '../composables/auth';

const { user, signIn, signOut} = useAuth()
const dropdown = ref(false)


</script>

<template>
    <!-- Signed Out -->
    <div class="bg-white page-x-padding h-full table-cell align-middle" v-show="!user">
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
                to="/gallery">
                    <button class="button_primary" @click="signIn()">
                        Sign In
                    </button>
                </router-link>
            </div>
        </div>
    </div>
    <!-- Signed In -->
    <div class="bg-white page-x-padding h-full table-cell align-middle" v-show="user" @mouseleave="dropdown = false">
        <div class="flex">
            <div class="flex justify-start w-1/3">
                <div class="mr-[64px]">
                    <router-link to="/" >
                        <img src="../../public/Polysemes.svg" alt="" class="nav-img-sizing">
                    </router-link>
                </div>
                <div>
                    <router-link to="/gallery" class="nav-tabs mr-[10px]">{{$route.fullPath}}</router-link>
                </div>
            </div>
            <div class="flex justify-end w-2/3" >
                <div class="dropdown-container">
                    <div 
                    class="flex right-[50px] bg-brown py-[3px] px-[12px] text-primary cursor-pointer hover:bg-brown/[0.75]"
                    @click="dropdown = true"
                    >
                        <img src="../../public/avatar.svg" alt="" class=""> 
                        <span class="mx-[10px]">Steve</span>
                        <ChevronDownIcon class=""/>
                    </div>
                    <div 
                    class="dropdown"
                    :style="dropdown? 'display: block' : ''"
                    >
                        <button class="button_primary" @click="signOut()">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
    