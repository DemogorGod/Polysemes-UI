<script setup>
import useComponents from '@/composables/components'
import { watch } from 'vue'

import CloseIcon from 'vue-material-design-icons/Close.vue'


const props = defineProps({
    value: String,
    component: Object,
    type: String,
    title: String
})

const {
    updateComponent
} = useComponents()

watch(props, (newValue, oldValue) => {
    updateComponent(props.component.name, props.type, newValue.value)
})

</script>

<template>
    <div class="my-[10px]">
        <div class="flex align-middle mb-[10px]">
            <div 
            @click="value = !value"
            class="flex border w-[40px] rounded-[25px] p-[3px] bg-[#F8F8F8] cursor-pointer my-auto" 
            :class="value? 'justify-start' : 'justify-end'"
            >
                <div class="rounded-lg w-[10px] h-[10px]" :class="value? 'bg-primary/[0.75]' : 'bg-primary/[0.25]'"></div>
            </div>

            <label 
            for="text-input" 
            class="text-span-four text-primary/[0.5] my-auto ml-[5px]"
            >{{ title }}</label>
        </div>
        
        <hr>
    </div>
</template>