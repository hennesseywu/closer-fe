import { getAuthPath, loginWithWechat } from './service'
import { Toast } from 'mint-ui'
import api from '../../../utils/api'
import Router from 'vue-router';


export default {
    namespaced: true,
    state: {

    },
    mutations: {
        updateMatchlist(state, payload) {
            state.matchList = payload.data.result.data
            for (let i = 0, len = state.matchList.length; i < len; i++) {
                if (state.matchList[i].matchType != 'group') {
                    state.grayBtn = true
                } else {
                    state.grayBtn = false
                }
            }
        }
    },
    actions: {
        async getAuthPath({ rootState, state }, payload) {
            let params = {
                path: api.wxLoginUrl
            };
            console.log(rootState.isDev)
            if (rootState.IS_DEV) {
                params.path = api.wxLoginDevUrl
            }
            let { data } = await getAuthPath(params).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != undefined && data.code == 0) {
                location.href = data.result;
            }
        },
        async loginWithWechat({ rootState }, code) {
            let params = {
                'plateform': 2,
                'protocol': 'WEB_SOCKET'
            }
            params['code'] = code;
            console.log("loginWithWechat", params)
            let { data } = await loginWithWechat(params).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
        }

    }
}