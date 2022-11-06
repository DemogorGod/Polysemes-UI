<script setup>
import useComponents from '@/composables/components'
import { ref, watch, onMounted } from 'vue'

import CloseIcon from 'vue-material-design-icons/Close.vue'


const props = defineProps({
    value: String,
    component: Object,
    type: String,
    title: String
})

const units = [ 
'px', 
'em', 
'rem', 
'vw', 
'vh', 
'auto', 
'min-content', 
'max-content', 
'fit-content'
]

const width = ref(props.value.split('#')[0])
const widthUnit = ref('')
const widthVolume = ref('')
const disableWidth = ref(false)

const height = ref(props.value.split('#')[1])
const heightUnit = ref('')
const heightVolume = ref('')
const disableHeight = ref(false)

const {
    updateComponent
} = useComponents()

watch(props, (newValue, oldValue) => {
    updateComponent(props.component.name, props.type, newValue.value)
})

const setVariables = () => {
    const widthValues = width.value.split(/([0-9]+)/)
    if(widthValues.length > 1){
        widthUnit.value = widthValues[2]
        widthVolume.value = widthValues[1]
    } else {
        widthUnit.value = widthValues[0]
        widthVolume.value = ''
        disableWidth.value = true
    }

    const heightValues = height.value.split(/([0-9]+)/)
    if(heightValues.length > 1){
        heightUnit.value = heightValues[2]
        heightVolume.value = heightValues[1]
    } else {
        heightUnit.value = heightValues[0]
        heightVolume.value = ''
        disableHeight.value = true
    }
}

const filterInputs = () => {
    width.value = widthVolume.value + widthUnit.value
    height.value = heightVolume.value + heightUnit.value

    setVariables()
    if(
        units.find(item => {
            return item === widthUnit.value
        }) === undefined
    ) {
        console.log(1)
        widthUnit.value = 'auto'
        widthVolume.value = ''
        disableWidth.value = true
    } else {
        if(
            widthUnit.value === 'auto' ||
            widthUnit.value === 'fit-content' ||
            widthUnit.value === 'min-content' ||
            widthUnit.value === 'max-content' 
        ) {
            console.log(2)
            widthVolume.value = ''
            disableWidth.value = true
        } else {
            if(widthVolume.value.length === 0) {
                console.log(3)
                widthVolume.value = '100'
                disableWidth.value = false
            }
        }
    }

    if(
        units.find(item => {
            return item === heightUnit.value
        }) === undefined
    ) {
        console.log(1)
        heightUnit.value = 'auto'
        heightVolume.value = ''
        disableHeight.value = true
    } else {
        if(
            heightUnit.value === 'auto' ||
            heightUnit.value === 'fit-content' ||
            heightUnit.value === 'min-content' ||
            heightUnit.value === 'max-content' 
        ) {
            console.log(2)
            heightVolume.value = ''
            disableHeight.value = true
        } else {
            if(heightVolume.value.length === 0) {
                console.log(3)
                heightVolume.value = '100'
                disableHeight.value = false
            }
        }
    }


    width.value = widthVolume.value + widthUnit.value
    height.value = heightVolume.value + heightUnit.value


}

watch([widthVolume, widthUnit, heightVolume, heightUnit], (newValue, oldValue) => {
    filterInputs()
    const newMeasurements  = width.value + '#' + height.value
    updateComponent(props.component.name, props.type, newMeasurements)
})

onMounted(() =>{
    filterInputs()
    const newMeasurements  = width.value + '#' + height.value
    updateComponent(props.component.name, props.type, newMeasurements)
})

</script>

<template>
    <div class="my-[10px]">
        <label for="text-input" class="text-span-four text-primary/[0.5]">{{ title }}</label>
        <div class="flex my-[5px] align-middle">
            <label for="text-input" class="text-span-four text-primary/[0.5] my-auto"> W: </label>
            <div class="form-inputs flex ml-[10px] w-[200px]">
                <input 
                :disabled="disableWidth"
                name="text-input" 
                type="text" 
                :placeholder="'Width'"
                v-model="widthVolume"
                class="outline-none bg-transparent w-full"
                >
                <select 
                name="input-types"
                v-model="widthUnit"
                class="form-selects border-l border-primary/[0.5]"
                >
                    <option 
                    v-for="i in units" :key="i"
                    :value="i"
                    >{{i}}</option>
                </select>
            </div>
        </div>

        <div class="flex my-[5px] align-middle">
            <label for="text-input" class="text-span-four text-primary/[0.5] my-auto"> H: </label>
            <div class="form-inputs flex ml-[13px] w-[200px]">
                <input 
                :disabled="disableHeight"
                name="text-input" 
                type="text" 
                :placeholder="'Height'"
                v-model="heightVolume"
                class="outline-none bg-transparent w-full"
                >
                <select 
                name="input-types"
                v-model="heightUnit"
                class="form-selects border-l border-primary/[0.5]"
                >
                    <option 
                    v-for="i in units" :key="i"
                    :value="i"
                    >{{i}}</option>
                </select>
            </div>
        </div>
        <hr>
    </div>
</template>