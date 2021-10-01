import {
    createApp
} from "vue";
import VueSmoothScroll from 'v-smooth-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.css'


createApp(App).use(VueSmoothScroll).use(AOS.init()).use(store).use(router).mount("#app");