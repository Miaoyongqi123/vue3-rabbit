import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/api/user'
import { useCartStore } from './cartStore'


export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }
    //退出时清楚用户信息
    const clearUserInfo =  () => {
        userInfo.value = {}
        //执行清除购物车的action
         cartStore.clearCart()
    }
    return { userInfo, getUserInfo, clearUserInfo }

}, { persist: true })
