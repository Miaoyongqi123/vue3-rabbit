<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProductList from './components/HomeProductList.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProductList />
    <!-- //测试 -->
    <!-- <HomePanel title="新鲜好物" sub-title="好多商品">

    </HomePanel>
    <HomePanel title="人气推荐" sub-title="好多推荐">
        
    </HomePanel> -->
</template>
