import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
//定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        //el：指令绑定的元素 img
        //binding: binding.value :指令绑定的值
        // console.log(el, binding)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                // console.log(isIntersecting);
                if (isIntersecting) {
                    //进入视口区域
                    el.src = binding.value
                }

            }
        )
    }
})