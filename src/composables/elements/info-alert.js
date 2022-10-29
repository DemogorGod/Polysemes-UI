import { ref, onMounted } from "vue"

const defaultStyle  = ref({
    'background': '#DEECED',
    'border-radius': '2px',
    'padding': '6px',
    'color': '#197278',
    'margin': 'auto',
})

const defaultContainerStyle  = ref({
    'vertical-align': 'middle',
})

const text  = ref('Info Text Here...')

export default function useInfoAlert  () {

    return {
        defaultStyle,
        text,
        defaultContainerStyle
    }
}