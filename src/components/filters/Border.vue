<script setup>
import useComponents from '@/composables/components'
import { watch, ref } from 'vue'
import BorderALL from 'vue-material-design-icons/BorderALL.vue'
import BorderRadius from 'vue-material-design-icons/BorderRadius.vue'
import LockOpenOutline from 'vue-material-design-icons/LockOpenOutline.vue'
import LockOutline from 'vue-material-design-icons/LockOutline.vue'

const props = defineProps({
    value: String,
    component: Object,
    type: String,
    title: String
})

const {
    updateComponent
} = useComponents()

const border = ref(props.value['border'])
// [0] => borderSize [1] => boderColor [2] => borderStyle on split[' ']
const borderRadius = ref(props.value['border-radius'])
// [0] => topLeft [1] => topRight [2] => bottomLeft [3] => bottomRight on split[' ']

const borderSize = ref(border.value.split(' ')[0])
const borderColor = ref(border.value.split(' ')[1])
const borderStyle = ref(border.value.split(' ')[2])

const borderOptions = ref([
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset', 
    'none',
    'hidden',
])

const topLeft = ref(borderRadius.value.split(' ')[0].slice(0, borderRadius.value.split(' ')[0].length - 2))
const topRight = ref(borderRadius.value.split(' ')[1].slice(0, borderRadius.value.split(' ')[1].length - 2))
const bottomLeft = ref(borderRadius.value.split(' ')[2].slice(0, borderRadius.value.split(' ')[2].length - 2))
const bottomRight = ref(borderRadius.value.split(' ')[3].slice(0, borderRadius.value.split(' ')[3].length - 2))

const lockRadius = ref(false)

watch(props, (newValue, oldValue) => {
    updateComponent(props.component.name, props.type, newValue.value)
})

watch([borderSize, borderColor, borderStyle], ()=> {
    const newBorder = [borderSize.value, borderColor.value, borderStyle.value].join(' ')
    border.value = newBorder
    const newValue = {
        'border': border.value,
        'border-radius': borderRadius.value
    }
    updateComponent(props.component.name, props.type, newValue)
})

watch([topLeft, topRight, bottomLeft, bottomRight, lockRadius], ()=> {
    if(!lockRadius.value){
        const newBorderRadius = [topLeft.value, topRight.value, bottomLeft.value, bottomRight.value].join('px ')+'px'
        borderRadius.value = newBorderRadius
        const newValue = {
            'border': border.value,
            'border-radius': borderRadius.value
        }
        updateComponent(props.component.name, props.type, newValue)
    } else {
        topRight.value = topLeft.value
        bottomLeft.value = topLeft.value
        bottomRight.value = topLeft.value
        const newBorderRadius = [topLeft.value, topLeft.value, topLeft.value, topLeft.value].join('px ')+'px'
        borderRadius.value = newBorderRadius
        const newValue = {
            'border': border.value,
            'border-radius': borderRadius.value
        }
        updateComponent(props.component.name, props.type, newValue)
    }
})



</script>

<template>
    <div class="my-[10px]">
        <label for="text-input" class="text-span-four text-primary/[0.5]">{{ title }}</label>
        <div class="flex mb-[10px]">
            <!-- <BorderALL class="text-primary/[0.5] mr-[5px]"/> -->
            <div class="form-inputs flex justify-between px-[2px] w-[75px] mt-[5px] mr-[5px]">
                <input 
                name="text-input" 
                type="text" 
                v-model="borderColor"
                class="outline-none bg-transparent w-full"
                >
                <input type="color" v-model="borderColor" class="w-[16px] h-[16px] outline-none"/>
            </div>
            <div class="form-inputs  mt-[5px] mr-[5px]">
                <input 
                name="text-input"
                type="text"
                v-model="borderSize"
                class="outline-none bg-transparent w-[35px]"
                >
            </div>
            <div class="form-inputs flex mt-[5px] pl-0">
                <select 
                name="input-types"
                v-model="borderStyle"
                class="form-selects border-primary/[0.5] pl-[0px] w-[55px]"
                >
                    <option 
                    v-for="i in borderOptions" :key="i"
                    :value="i"
                    >{{i}}</option>
                </select>
            </div>
        </div>
        <div class="flex justify-between mb-[10px] w-full">
            <div class="flex">
                <BorderRadius class="text-primary/[0.5] mr-[5px]"/>
                <div class="form-inputs mt-[5px] mr-[5px]">
                    <input 
                    name="text-input" 
                    type="text" 
                    v-model="topLeft"
                    class="outline-none bg-transparent w-[15px] text-center"
                    >
                </div>
                <div class="form-inputs mt-[5px] mr-[5px]" v-if="!lockRadius">
                    <input 
                    name="text-input" 
                    type="text" 
                    v-model="topRight"
                    class="outline-none bg-transparent w-[15px] text-center"
                    >
                </div>
                <div class="form-inputs mt-[5px] mr-[5px]" v-if="!lockRadius">
                    <input 
                    name="text-input" 
                    type="text" 
                    v-model="bottomRight"
                    class="outline-none bg-transparent w-[15px] text-center"
                    >
                </div>
                <div class="form-inputs mt-[5px] mr-[5px]" v-if="!lockRadius">
                    <input 
                    name="text-input" 
                    type="text" 
                    v-model="bottomLeft"
                    class="outline-none bg-transparent w-[15px] text-center"
                    >
                </div>
            </div>
            <LockOpenOutline 
            class="mr-[5px] text-primary/[0.5] cursor-pointer hover:text-primary/[0.25]" 
            v-if="!lockRadius"
            @click="lockRadius = !lockRadius"
            />
            <LockOutline 
            class="mr-[5px] text-primary cursor-pointer  hover:text-primary/[0.25]" 
            v-else
            @click="lockRadius = !lockRadius"
            />
        </div>
        <hr>
    </div>
</template>