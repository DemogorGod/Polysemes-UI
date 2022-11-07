import { ref, onMounted, watch } from "vue"
import useComponents from '@/composables/components'


const {
    selectedComponent
} = useComponents()

const defaultStyle  = ref({
    'background': '#DEECED',
    'border-radius': '2px 2px 2px 2px',
    'border': '',
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
    const findRGBAValue = (hexValue, transparancy) => {
        let c
        let t = transparancy?  transparancy/ 100 : 1
        if(/^([A-Fa-f0-9]{3}){1,2}$/.test(hexValue)){
            c = hexValue
            c = c.split('');

            if(c.length == 3) {
                var ar = [];
                ar.push(c[0]); 
                ar.push(c[0]);
                ar.push(c[1]);
                ar.push(c[1]);
                ar.push(c[2]);
                ar.push(c[2]);
                c = ar;
            }

            c = '0x'+ c.join('');
            var r = (c>>16)&255; // 222
            var g = (c>>8)&255; // 236
            var b = c&255; //2237
            return 'rgba('+[r,g,b].join(',')+','+t+')';
        } else {
            return 'rgba(255, 255, 255, ' + t + ')'
        }
    }

    const filterStyle = () =>{
        if(selectedComponent.value) {
            const measurements = selectedComponent.value.filters.find(item => {
                return item.name === 'measurement'
            }).value.split('#')
            // o => width 1 => height
            defaultStyle.value['width'] = measurements[0]
            defaultStyle.value['height'] = measurements[1]

            const backgroundcolor = selectedComponent.value.filters.find(item => {
                return item.name === 'backgroundcolor'
            }).value.split('#')
            // o => hex value 1 => transparancy
            defaultStyle.value['background'] = findRGBAValue(backgroundcolor[0], backgroundcolor[1])

            const border = selectedComponent.value.filters.find(item => {
                return item.name === 'border'
            })
            defaultStyle.value['border-radius'] = border.value['border-radius']
            defaultStyle.value['border'] = border.value.border
        }
    }
    
    
    onMounted(() =>{
        filterStyle()
    })
    
    watch(selectedComponent.value, () => {
        filterStyle()
    })


    return {
        defaultStyle,
        defaultContainerStyle
    }
}