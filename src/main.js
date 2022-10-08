import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './composables/router.js'
import 'vue-material-design-icons/styles.css';
router.push('/')

createApp(App).use(router).mount('#app')
