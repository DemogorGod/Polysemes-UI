<script setup>
import useInfoAlert from '@/composables/elements/info-alert.js'
import { onMounted, ref, watch } from 'vue';
import useComponents from '@/composables/components';
import InformationOutline from 'vue-material-design-icons/InformationOutline.vue'

// information-outline

const {
    defaultStyle,
    defaultContainerStyle
} = useInfoAlert()

const props = defineProps({
    demo: {
        type: Boolean,
        default: false
    },
})



const {
    selectedComponent
} = useComponents()


const text = ref('')
const hideIcon = ref(false)

const filterComponent = () =>{
    const textFilter = selectedComponent.value.filters.find(item => {
        return item.name === 'text'
    })
    text.value = textFilter.value

    const iconFilter = selectedComponent.value.filters.find(item => {
        return item.name === 'icon'
    })
    hideIcon.value = iconFilter.value
}


onMounted(() =>{
    filterComponent()
})

watch(selectedComponent.value, (newValue, oldValue) =>{
    filterComponent()
})


</script>

<template>
    <div :style="defaultContainerStyle">
        <div 
        v-if="!demo" 
        :style="defaultStyle"
        class="flex w-[200px] h-max overflow-x-auto"
        >
            <div 
            v-show="!hideIcon" 
            class="
            border-r-2 
            border-primary2 
            pr-[10px] 
            mr-[10px] 
            grid place-content-center
            pb-[5px]
            "
            >
                <InformationOutline class="text-lg my-auto "/> 
            </div> 
            <div>{{text}}</div>
        </div>
        <div v-else :style="defaultStyle">
            <InformationOutline class="text-md"/> | Text...
        </div>
    </div>
    
</template>