import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'; // Import du fichier CSS global

createApp(App)
    .use(router)
    .mount('#app')
