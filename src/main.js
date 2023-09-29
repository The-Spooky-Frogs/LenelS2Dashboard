import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/assets/sass/global.scss";

createApp(App).use(router).mount('#app')
