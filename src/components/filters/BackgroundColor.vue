<script setup>
import useComponents from '@/composables/components'
import { watch, ref } from 'vue'
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

const hexCode = ref(props.value.split('#')[0])
const transparancy = ref(props.value.split('#')[1]? props.value.split('#')[1] : 100)

const colorInputValue = ref('#'+Object.assign(hexCode.value))

watch(props, (newValue, oldValue) => {
    updateComponent(props.component.name, props.type, newValue.value)
})

watch([hexCode, transparancy], () => {
    const newValue = hexCode.value + '#' + transparancy.value
    updateComponent(props.component.name, props.type, newValue)
})

watch(colorInputValue, () => {
    hexCode.value = colorInputValue.value.split('#')[1]
})




</script>

<template>
    <div class="my-[10px]">
        <label for="text-input" class="text-span-four text-primary/[0.5]">{{ title }}</label>
        <div class="flex justify-between">
            <div class="form-inputs flex justify-between mb-[10px] w-[100px]">
                <input 
                name="text-input" 
                type="text" 
                :placeholder="title"
                v-model="hexCode"
                class="outline-none bg-transparent w-full"
                >
                <input type="color" v-model="colorInputValue" class="w-[20px] h-[20px] outline-none"/>
            </div>
            <div class="form-inputs flex mb-[10px] w-[50px]">
                <input 
                name="text-input" 
                type="number"
                min="0"
                max="100"
                placeholder="100%"
                v-model="transparancy"
                class="outline-none bg-transparent w-full"
                >
            </div>
        </div>
        <hr>
    </div>
</template>