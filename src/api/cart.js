// 加入购物车
import request from '@/utils/http.js'
export const insertCartAPI = ({ skuId, count }) => {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}
//获取最新购物车列表
export const findNewCartListAPI = () => {
    return request({
        url: '/member/cart',

    })
}