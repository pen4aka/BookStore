import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router
import './assets/main.css'

createApp(App)
  .use(router) // Register the router
  .mount('#app')
