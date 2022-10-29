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
        <label for="text-input" class="text-span-three">{{ title }}</label>
        <div class="input flex my-[10px]">
            <input 
            name="text-input" 
            type="text" 
            :placeholder="title"
            v-model="value"
            class="outline-none bg-transparent w-full"
            >
            <button 
            @click="value = ''"
            class="hover:text-primary2"
            >
                <CloseIcon />
            </button>
        </div>
        <hr>
    </div>
</template>