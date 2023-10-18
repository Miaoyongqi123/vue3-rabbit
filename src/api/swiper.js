import http from '@/utils/http'

export function getSwiperList() {
    return http({
        url: '/home/banner'
    })
}