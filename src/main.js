import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import axios from 'axios'
import VueAxios from 'vue-axios'


import './assets/main.css'
axios.defaults.baseURL = import.meta.env.VITE_API_ADDRESS
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
