import { ref, shallowRef, watch, defineAsyncComponent } from "vue"

const card = 'card'

const components = shallowRef([
    {
        category: 'Alerts',
        detail: 'Alert components are used to convey important information to userss through color, icons, and placement, ',
        components: [
            {
                name: 'InfoAlert',
                'component': defineAsyncComponent(() => import(`../components/gallery/InfoAlert.vue`))
            }
        ]
    }
])

const selectedComponent = ref(null)

export default function useComponents() {
    return{
        components,
        selectedComponent
    }
}