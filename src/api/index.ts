import { get } from "@/utils/axios";

export function getHome(params: object) {
    return get<any>({
        url: 'https://api.wangbo98.cn/',
        params
    })
}