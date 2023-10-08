import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import 'virtual:windi.css'
import 'ant-design-vue/dist/reset.css'
import '@/polyfill/polyfill'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
