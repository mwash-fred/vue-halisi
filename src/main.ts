import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Mouse from "@/components/Mouse.vue";
import Menu from "@/components/Menu.vue"
import Scrollspy from "@/components/Scrollspy.vue";
import Footer from "@/components/Footer.vue"

// import Polarchart from "@/components/Polarchart.vue";

const app = createApp(App)

// app.config.productionTip = false;

app.mixin({
  created: function () {
    this.gsap = gsap;
  }
});

app.component('Sidebar', Sidebar)
app.component('Menu', Menu)
app.component('Mouse', Mouse)
app.component('Header', Header)
app.component('Scrollspy', Scrollspy)
app.component('Footer', Footer)
// app.component('Polarchart', Polarchart)

app
    .use(store)
    .use(router)
    .mount('#app')
