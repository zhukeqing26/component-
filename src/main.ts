import { createApp } from 'vue'
import '@/assets/style/index.sass'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
