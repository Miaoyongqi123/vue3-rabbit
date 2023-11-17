import request from '@/utils/http.js'

export function getCategory() {
    return request({
        url: 'home/category/head'
    })
}