<template>
   <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加 key 强制更新 -->
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//获取导航列表的action
import { useCategoryStore } from "@/stores/category.js"
import { onMounted } from 'vue'
//得到仓库实例对象
const categoryStore = useCategoryStore()
onMounted(()=>{
  categoryStore.getAllCategory()
})
</script>@/stores/categoryStore.js