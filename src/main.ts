import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/my-gsap.js'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css';

import Header from "@/components/Header.vue";
import Mouse from "@/components/Mouse.vue";
import Menu from "@/components/Menu.vue"
import Scrollspy from "@/components/Scrollspy.vue";
import Footer from "@/components/Footer.vue"

const app = createApp(App)

app.component('Menu', Menu)
app.component('Mouse', Mouse)
app.component('Header', Header)
app.component('Footer', Footer)
app.component('Scrollspy', Scrollspy)
app.component('Footer', Footer)


app
    .use(store)
    .use(router)
    .mount('#app')
