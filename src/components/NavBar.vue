<script setup>
import { ref } from 'vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'

const user = ref({})
</script>

<template>
    <!-- Signed In -->
    <div class="bg-white page-x-padding h-full table-cell align-middle" v-show="!user">
        <div class="flex">
            <div class="flex justify-start w-1/3">
                <div class="mr-[64px]">
                    <router-link to="/" >
                        <img src="Polysemes.svg" alt="" class="nav-img-sizing">
                    </router-link>
                </div>
                <div>
                    <router-link to="/components" class="nav-tabs mr-[50px]">Components</router-link>
                    <router-link to="/themes" class="nav-tabs">Themes</router-link>
                </div>
            </div>
            <div class="flex justify-end w-2/3">
                <button class="button_primary">
                    Sign In
                </button>
            </div>
        </div>
    </div>
    <div class="bg-white page-x-padding h-full table-cell align-middle" v-show="user">
        <div class="flex">
            <div class="flex justify-start w-1/3">
                <div class="mr-[64px]">
                    <router-link to="/" >
                        <img src="Polysemes.svg" alt="" class="nav-img-sizing">
                    </router-link>
                </div>
                <div>
                    <router-link to="/gallery" class="nav-tabs mr-[10px]">Gallery</router-link> /
                </div>
            </div>
            <div class="flex justify-end w-2/3">
                <div class="flex right-[50px] bg-brown py-[3px] px-[12px] text-primary">
                    <img src="avatar.svg" alt="" class=""> 
                    <span class="mx-[10px]">Steve</span>
                    <ChevronDownIcon class=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
    