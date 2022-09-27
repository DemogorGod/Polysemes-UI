import { ref, shallowRef, watch } from "vue"

import card from '../components/gallery/card.vue'

const components = shallowRef([
    {
        category: 'Cards',
        detail: 'Designed to be used in various ways, from containing content, creating panels, to image rendering.',
        components: [
            {
                name: 'Card',
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