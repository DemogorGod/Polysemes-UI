import { ref, shallowRef, watch } from "vue"

import card from '../components/gallery/card.vue'

const components = shallowRef([
    {
        category: 'Alerts',
        detail: 'Alert components are used to convey important information to userss through color, icons, and placement, ',
        components: [
            {
                name: 'Info Alert',
                'component': card
            },
            {
                name: 'Success Alert',
                'component': card
            },
            {
                name: 'Warning Alert',
                'component': card
            },
            {
                name: 'Error Alert',
                'component': card
            },
            {
                name: 'Loading Alert',
                'component': card
            },
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