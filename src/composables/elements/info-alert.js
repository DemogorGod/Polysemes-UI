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
    'margin': 'auto',
    'width': 'auto',
    'height': 'auto',
    'color': '#197278',
    'font-family': 'Red Hat Display',
    'font-style': 'normal',
    'font-weight': '500',
    'font-size': '16px',
    'line-height': '21px',
    'text-align': 'center',
    'letter-spacing': '0.0025em',
    'text-transform': '',
    'text-decoration-line': '',
    'align-items': 'center',
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

            const text = selectedComponent.value.filters.find(item => {
                return item.name === 'textStyling'
            })
            defaultStyle.value['color'] = text.value['color']
            defaultStyle.value['font-family'] = text.value['font-family']
            defaultStyle.value['font-style'] = text.value['font-style']
            defaultStyle.value['font-weight'] = text.value['font-weight']
            defaultStyle.value['font-size'] = text.value['font-size']
            defaultStyle.value['line-height'] = text.value['line-height']
            defaultStyle.value['text-align'] = text.value['text-align']
            defaultStyle.value['letter-spacing'] = text.value['letter-spacing']
            defaultStyle.value['text-transform'] = text.value['text-transform']
            defaultStyle.value['text-decoration-line'] = text.value['text-decoration-line']
            defaultStyle.value['align-items'] = text.value['align-items']
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