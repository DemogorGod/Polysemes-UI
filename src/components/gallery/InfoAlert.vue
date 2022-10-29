<script setup>
import useInfoAlert from '@/composables/elements/info-alert.js'
import { onMounted, ref, watch } from 'vue';
import useComponents from '@/composables/components';
import InformationOutline from 'vue-material-design-icons/InformationOutline.vue'

// information-outline

const {
    defaultStyle,
    // text,
    defaultContainerStyle
} = useInfoAlert()

const props = defineProps({
    demo: {
        type: Boolean,
        default: false
    },
    // filters: {
    //     type: Array,
    // }
})

const text = ref('')


const {
    selectedComponent
} = useComponents()


onMounted(() =>{
    // const t = props.filters.find(item => {
    //     return item.name === 'text'
    // })
    // text.value = t.value
})

watch(selectedComponent, (newValue, oldValue) => [
    console.log('changed', newValue, oldValue)
])


</script>

<template>
    <div :style="defaultContainerStyle">
        <div v-if="!demo" :style="defaultStyle">
            <InformationOutline class="text-md"/> | 
            {{selectedComponent.filters[0].value}}
        </div>
        <div v-else :style="defaultStyle">
            <InformationOutline class="text-md"/> | Text...
        </div>
    </div>
    
</template>