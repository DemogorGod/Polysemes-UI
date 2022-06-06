<script setup>
    // import { ref } from 'vue'

    // defineProps({
    // })
</script>

<template>
    <div class="my-10 flex justify-center">
        <div class="w-3/5">
            <span>
                New Vue component UI, we are working on creating a universal and very modifiable components, where it’s easily customizable with themses and apperance 
            </span>
        </div>
    </div>


    <div class="my-10 flex justify-center">
        <div class="w-1/2">
            <a href="https://github.com/DemogorGod" target="_blank"> https://github.com/DemogorGod</a>
        </div>
    </div>

    <div class="flex justify-center"> 
        <h1 class="text-3xl font-bold text-secondary-2 mt-2">
            Components Available 
        </h1>
    </div>

    <div>
        <router-link to="/view-component/card"> Card</router-link>
    </div>
</template>

<style scoped>
</style>
