import { ref, shallowRef, onMounted, defineAsyncComponent } from "vue"
import router from './router.js'

const initalized = ref(false)

const components = shallowRef([
    {
        category: 'Alerts',
        detail: 'Alert components are used to convey important information to userss through color, icons, and placement, ',
        components: [
            {
                name: 'InfoAlert',
                'component': defineAsyncComponent(() => import( '@/components/gallery/InfoAlert.vue')),
                filters: [
                    {
                        value: 'Info Text Here...',
                        name: 'text',
                        title: 'Alert Text',
                        'component': defineAsyncComponent(() => import( '@/components/filters/TextInput.vue')),
                    },
                    {
                        value: false,
                        name: 'icon',
                        title: 'Hide Icon',
                        'component': defineAsyncComponent(() => import( '@/components/filters/Toogle.vue')),
                    },
                    {
                        value: 'auto#auto',
                        name: 'measurement',
                        title: 'Sizing',
                        'component': defineAsyncComponent(() => import( '@/components/filters/Measurement.vue')),
                    },
                    {
                        value: 'DEECED',
                        name: 'backgroundcolor',
                        title: 'Background Color',
                        'component': defineAsyncComponent(() => import( '@/components/filters/BackgroundColor.vue')),
                    },
                    {
                        value: {
                            'border-radius': '2px 2px 2px 2px',
                            'border': '0px #ffffff solid'
                        },
                        name: 'border',
                        title: 'Border',
                        'component': defineAsyncComponent(() => import( '@/components/filters/Border.vue')),
                    },
                    {
                        value: {
                            'color': '#197278',
                            'font-family': 'Red Hat Display',
                            'font-style': 'normal',
                            'font-weight': '500',
                            'font-size': '16px',
                            'line-height': '21px',
                            'text-align': 'center',
                            'letter-spacing': '0.0025em',
                            'text-transform': '',
                            'text-decoration-line': 'none',
                            'align-items': 'center'
                        },
                        name: 'textStyling',
                        title: 'Text',
                        'component': defineAsyncComponent(() => import( '@/components/filters/Text.vue')),
                    },
                ]
            }
        ]
    }
])

const selectedComponent = ref(null)

export default function useComponents() {

    const updateComponent = ( name, type, value ) =>{
        selectedComponent.value.filters.map(item => {
            if(item.name === type){
                item.value = value
            }
        })
        console.log('updated', value)
    }
    onMounted( () => {
        const routes = router.currentRoute.value.fullPath.split('/')
        const route = routes[routes.length -1]

        for (let i = 0; i < components.value.length; i++) {
            for (let j = 0; j < components.value[i].components.length; j++) {
                if(components.value[i].components[j].name === route){
                    selectedComponent.value = components.value[i].components[j]
                }
            }
        }
    })

    return{
        initalized,
        components,
        selectedComponent,
        updateComponent
    }
}