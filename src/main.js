import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 全局指令注册
import { lazyPlugin } from '@/directives'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
