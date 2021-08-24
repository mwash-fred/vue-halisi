import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/flexible.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'



createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
