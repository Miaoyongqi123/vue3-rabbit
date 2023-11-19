import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/api/cart"

export const useCartStore = defineStore('cart', () => {
    // 1. 定义state - cartList
    const cartList = ref([])
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 2. 定义action - addCart
    const addCart = async (goods) => {

        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (isLogin.value) {
            const { skuId, count } = goods
            //登录之后购物车逻辑
            await insertCartAPI({ skuId, count })
            updateNewList()
        } else {
            //本地购物车逻辑
            if (item) {
                // 添加购物车操作
                // 已添加过 - count + 1
                // 没有添加过 - 直接push
                // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
                //找到了
                item.count++
            } else {
                //没找到
                cartList.value.push(goods)
            }
        }


    }
    //清除购物车
    const clearCart = () => {
        cartList.value = []
    }
    //获取最新购物车列表
    const updateNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }
    2.//删除购物车
    const deleteCart = async (skuId) => {
        if (isLogin.value) {
            await delCartAPI([skuId])
            updateNewList()
        } else {
            // 思路：
            // 1. 找到要删除项的下标值 - splice
            // 2. 使用数组的过滤方法 - filter
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }

    }

    //计算属性
    // 1.总的数量 所有项count 之和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

    // 2.总价 所有项count *price之和
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    // 3.已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 3.已选择总价
    const selectedAllPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    //全选功能
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))


    return { cartList, addCart, deleteCart, allCount, allPrice, singleCheck, isAll, allCheck, selectedCount, selectedAllPrice, clearCart, updateNewList }
},
    {
        persist: true,
    })
