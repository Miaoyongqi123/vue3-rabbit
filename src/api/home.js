import request from '@/utils/http.js'

export function getSwiperList(params = {}) {
  //默认为1，商品为2
  const { distributionSite = '1' } = params
  return request({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewGoods = () => {
  return request({
    url: '/home/new'
  })
}


/**
* @description: 获取人气推荐
* @param {*}
* @return {*}
*/
export const getHot = () => {
  return request({
    url: '/home/hot'
  })
}

/**
* @description: 获取所有商品模块
* @param {*}
* @return {*}
*/
export const getGoodsAPI = () => {
  return request({
    url: '/home/goods'
  })
}