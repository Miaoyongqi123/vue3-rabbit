import http from '@/utils/http'

export function getSwiperList() {
    return http({
        url: '/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
 export const findNewGoods = () => {
    return http({
      url:'/home/new'
    })
  }


  /**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHot = () => {
    return http({
        url:'/home/hot'
      })
    }
  