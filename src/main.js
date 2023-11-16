import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入全局组件插件

// 全局指令注册
import{componentPlugin} from '@/components/index.js'
import { lazyPlugin } from '@/directives'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
