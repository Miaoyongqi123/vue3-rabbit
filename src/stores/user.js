import { ref} from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/api/user'
export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }

    return { userInfo, getUserInfo, }
})