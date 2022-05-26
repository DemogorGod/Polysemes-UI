import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './composables/router.js'

createApp(App).use(router).mount('#app')