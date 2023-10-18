import { ref,  } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/api/layout.js'
export const useCategoryStore = defineStore('category', () => {
    //导航列表数据管理
    //state 导航列表数据
    const categoryList = ref([])
    //action 获取导航数据方法
    const getAllCategory = async () => {
        const data = await getCategory()
        console.log(data);
        if (data.code == 1) {
            categoryList.value = data.result
        }

    }
    return {
        categoryList,
        getAllCategory
    }
})
