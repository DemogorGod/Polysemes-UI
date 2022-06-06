<script setup>
import { ref, watch, shallowRef } from 'vue'
import router from '../composables/router.js'
import useFilters from '../composables/filters';

//elements
import Card from '../components/ui-elements/Card.vue'

//icons 
import { LockOpenIcon, LockClosedIcon, CodeIcon } from '@heroicons/vue/outline'


const path = shallowRef(router.currentRoute._rawValue.fullPath.split('/')[2])

const routes = {
    'card': Card
}

const currentComponent = shallowRef(routes[path.value])

watch(path, (newValue, oldValue) => {
    currentComponent.value = routes[newValue]
})


const {
    widthMeasurement, 
    widthUnits,
    width,

    heightMeasurement,
    heightUnits,
    height,

    roundingTL,
    roundingTR,
    roundingBL,
    roundingBR,
    roundingUnits,
    lockRounding,
    rounding,

    border,
    borderColor,
    borderWidth,
    borderStyle,

    outlineColor,
    outlineWidth,
    outlineStyle,
    outline,
    
} = useFilters()

const metricOptions = ['%', 'px', 'rem', 'auto', 'vm', 'min', 'max']

const roudingOptions = ['%', 'px', 'rem']

const borderStyleOptions = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'hidden', 'none']


</script>

<template>
    <div class="border mb-10 p-4 pb-8">
       <h1 class="text-xl font-bold text-background">{{currentComponent.name}}</h1>
       <h2 class="text-sm mb-4 text-grey">
            Please note that not all filters will effect the component, 
            we are working on making all components dynamic yet some things are 
            either in implementation or not currently on our list. 

            <br>

            The screen is limitted to the width of the screen. Components will fill the screen without overflowing
        </h2>
        <component 
        :is="currentComponent"
        :width="width"
        :height="height"
        background-color=""
        :radius="rounding"
        :border="border"
        :outline="outline"
        />
        <button class="w-5 text-grey float-right pb-4">
            <CodeIcon />
        </button>
    </div>

    <hr class="primary-2">

    <h1 class="text-secondary-2 mt-6 mb-4 font-bold">Sizing & Border</h1>

    <div class="grid grid-cols-3 gap-4 text-left">

        <div>
            <label for="customRange1" class="form-label mr-2">Width:</label>
            <input type="text" class="border rounded" v-model="widthMeasurement" >
            <select 
            v-model="widthUnits"
            class="ml-2 border rounded"
            >
                <option v-for="option in metricOptions" >{{option}}</option>
            </select>
        </div>

        <div class="flex flex-row">
            <label for="customRange1" class="form-label mr-2">Border Radius:</label>
            <input type="text" class="border rounded w-9 mr-2 pl-1" v-model="roundingTL">
            <input type="text" class="border rounded w-9 mr-2 pl-1" v-model="roundingTR">
            <input type="text" class="border rounded w-9 mr-2 pl-1" v-model="roundingBL">
            <input type="text" class="border rounded w-9 pl-1" v-model="roundingBR">
            <select 
            class="mx-2 border rounded"
            v-model="roundingUnits"
            >
                <option v-for="option in roudingOptions" >{{option}}</option>
            </select>

            <button @click="lockRounding = !lockRounding">
                <LockOpenIcon class="w-5 text-grey" v-if="!lockRounding"/>
                <LockClosedIcon class="w-5" v-else="lockRounding"/>
            </button>
        </div>

        <div>
            <label for="customRange1" class="form-label mr-2">Border Color:</label>
            <input type="text" :placeholder="borderColor" class="border rounded  mr-2 pl-1" v-model="borderColor" >
        </div>

        <div>
            <label for="customRange1" class="form-label mr-2">Height:</label>
            <input type="text" class="border rounded" v-model="heightMeasurement" >
            <select 
            v-model="heightUnits"
            class="ml-2 border rounded"
            >
                <option v-for="option in metricOptions" >{{option}}</option>
            </select>
        </div>

        <div>
            <label for="customRange1" class="form-label mr-2">Border Width:</label>
            <input type="text" :placeholder="borderWidth + 'px'" class="border rounded  mr-2 pl-1" v-model="borderWidth">
        </div>

        <div>
            <label for="customRange1" class="form-label mr-2">Border Style:</label>
            <select 
            class="mx-2 border rounded"
            v-model="borderStyle"
            >
                <option v-for="option in borderStyleOptions" >{{option}}</option>
            </select>
        </div>

        <div>
            <label for="customRange1" class="form-label mr-2">Outline Color:</label>
            <input type="text" :placeholder="borderColor" class="border rounded  mr-2 pl-1" v-model="outlineColor" >
        </div>

        <div>
            <label for="customRange1" class="form-label mr-2">Outline Width:</label>
            <input type="text" :placeholder="borderWidth + 'px'" class="border rounded  mr-2 pl-1" v-model="outlineWidth">
        </div>

        <div>
            <label for="customRange1" class="form-label mr-2">Otline Style:</label>
            <select 
            class="mx-2 border rounded"
            v-model="outlineStyle"
            >
                <option v-for="option in borderStyleOptions" >{{option}}</option>
            </select>
        </div>


    </div>

    <h1 class="text-secondary-2 mt-6 mb-4 font-bold">Shadow, Color & Alignment</h1>

    <div class="grid grid-cols-3 gap-4 text-left">
        asd
    </div>
</template>

<style scoped>
</style>
