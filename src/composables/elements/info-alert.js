import { ref, onMounted, watch } from "vue"
import useComponents from '@/composables/components'


const {
    selectedComponent
} = useComponents()

const defaultStyle  = ref({
    'background': '#DEECED',
    'border-radius': '2px',
    'padding': '6px',
    'color': '#197278',
    'margin': 'auto',
    'width': 'auto',
    'height': 'auto'
})

const defaultContainerStyle  = ref({
    'vertical-align': 'middle',
})

export default function useInfoAlert  () {

    const filterStyle = () =>{
        const measurements = selectedComponent.value.filters.find(item => {
            return item.name === 'measurement'
        }).value.split('#')
        // o => width 1 => height
        defaultStyle.value['width'] = measurements[0]
        defaultStyle.value['height'] = measurements[1]
    }
    
    
    onMounted(() =>{
        filterStyle()
    })
    
    watch(selectedComponent.value, (newValue, oldValue) => {
        filterStyle()
    })


    return {
        defaultStyle,
        defaultContainerStyle
    }
}