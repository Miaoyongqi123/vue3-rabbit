import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//引入全局组件插件

// 全局指令注册
import { componentPlugin } from '@/components/index.js'
import { lazyPlugin } from '@/directives'
const app = createApp(App)
// const pinia = createPinia()
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
// app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


