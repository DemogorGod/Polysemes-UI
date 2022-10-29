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
                    // {
                    //     value: 'icon',
                    //     'component': defineAsyncComponent(() => import( '@/components/filters/example.vue')),
                    // }
                ]
            }
        ]
    }
])

const selectedComponent = ref(
    {
        name: 'N/A',
        'component': null, 
        filters: []
    }
)

export default function useComponents() {

    const updateComponent = ( name, type, value ) =>{
        // Component Name, Component Filter, newValue
        // console.log('reached', name, type, value)

        selectedComponent.value.filters.map(item => {
            if(item.name === type){
                item.value = value
            }
        })

        console.log(selectedComponent.value)

        // console.log('update ' + props.type + ' to the new value of...' + newValue.value)

        // const filter = props.component.filters.find(item => {
        //     return item.name === props.type
        // })
        // filter.value = newValue.value

        // console.log(filter)

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