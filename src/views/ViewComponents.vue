<script setup>
import { ref, watch, shallowRef } from 'vue'
import router from '../composables/router.js'
import Card from '../components/Card.vue'

const path = ref(router.currentRoute._rawValue.fullPath.split('/')[2])

const routes = {
    'card': Card
}

const currentComponent = shallowRef(routes[path.value])

watch(path, (newValue, oldValue) => {
    currentComponent.value = routes[newValue]
})

const width = ref(200)
const widthMettric = ref('px')
const widthMettricOptions = ['px', '%', 'em', 'auto', 'screen', 'full', 'min', 'max']

// defineProps({
// })


</script>

<template>
    <div class="border mb-10 p-4">
       <h1 class="text-xl font-bold text-background">{{currentComponent.name}}</h1>
       <h2 class="text-sm mb-4 text-grey">
           Please note that not all filters will effect the component, 
           we are working on making all components dynamic yet some things are 
           either in implementation or not currently on our list
        </h2>
       <component 
       :is="currentComponent"
       :width="width + widthMettric"
       height="150px"
       background-color="#c9c9c9"
       border-radius="5px"
       />
    </div>

    <hr class="primary-2">

    <h1 class="text-secondary-2 my-2 font-bold">Sizing & Border</h1>

    <div class="flex flex-wrap m-2">
        <div>
            <div>
                <label for="customRange1" class="form-label mr-2">Width:</label>
                <input type="text" class="border rounded" v-model="width">
                <select 
                v-model="widthMettric"
                class="ml-4 border rounded"
                >
                    <option v-for="option in widthMettricOptions" :value="widthMettric">{{option}}</option>
                </select>
            </div>
            <input
                type="range"
                class="
                appearance-none
                w-full
                h-2
                p-0
                bg-grey
                rounded-lg
                focus:outline-none focus:ring-0 focus:shadow-none focus:border-secondary
                "
                id="customRange1"
            />
        </div>
    </div>
</template>

<style scoped>
</style>
