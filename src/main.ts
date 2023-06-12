import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import our custom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const app = createApp(App)

app.use(createPinia())

app.mount('#app')