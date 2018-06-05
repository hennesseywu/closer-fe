import { login, getCode } from './service'

export default {
    namespaced: true,

    // 定义状态
    state: {
        user: {
            phone: ''
        }
    },
    actions: {
        async getCode({ commit, state }, phone) {
            console.log('module', phone)
            let code = await getCode(phone);
        },
        // 封装一个 ajax 方法
        login({ commit, state }, payload) {
            console.log(commit)
        }
    }
}