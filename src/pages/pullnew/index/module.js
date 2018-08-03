import { Toast } from 'mint-ui'
import api from '../../../utils/api'
import Router from 'vue-router';
import { getInviteStatistic, getYesterdayAwardAmt, getInviteUserLoginPageList, remindLogin } from './service'
export default {
    namespaced: true,
    state: {
        pullNewStatic: {
            awardTotalAmt: 0,
            invitedUsers: {
                "1": {
                    amount: 1000,
                    isGrey: true
                },
                "2": {
                    amount: 200,
                    isGrey: true
                },
                "3": {
                    amount: 200,
                    isGrey: true
                },
                "4": {
                    amount: 200,
                    isGrey: true
                },
                "5": {
                    amount: 200,
                    isGrey: true
                },
                "6": {
                    amount: 200,
                    isGrey: true
                },
                "7": {
                    amount: 1000,
                    isGrey: true
                }
            }

        },
        awardAmt: 0
    },
    mutations: {
        updatePullNewStatic(state, payload) {
            state.pullNewStatic = payload;
        },
        updateAwardAmt(state, payload) {
            state.awardAmt = payload;
        }
    },
    actions: {
        checkLogin({ state, rootState }, cb) {
            let ua = rootState.UA;
            console.log("checkLogin")
            if (ua.indexOf("closer-ios") > -1) {
                setTimeout(() => {
                    setupWebViewJavascriptBridge(function(bridge) {
                        if (bridge) {
                            //ios获取用户token 判断登录
                            bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                                if (token) {
                                    Cookies.set("GroukAuth", token, { expires: 30 });
                                    axios.post(api.admin.user_show).then(({ data }) => {
                                        if (data.result) {
                                            Cookies.set("user", JSON.stringify(data.result), { expires: 30 });
                                            cb(true)
                                        } else {
                                            Cookies.remove('user'); //app端user完全依赖APP
                                            Cookies.remove('GroukAuth'); //app端user完全依赖APP
                                            cb();
                                        }
                                    }).catch(err => {
                                        Toast('网络开小差啦，请稍后再试')
                                        return;
                                    })
                                } else {
                                    Cookies.remove('user'); //app端user完全依赖APP
                                    Cookies.remove('GroukAuth'); //app端user完全依赖APP
                                    setupWebViewJavascriptBridge(function(bridge) {
                                        bridge.callHandler("jumpLogin", null);
                                    });
                                    cb();
                                }
                            });
                        }
                    })
                }, 500)
            } else if (ua.indexOf("closer-android") > -1) {
                //安卓检查登录状态
                if (typeof window.bridge != "undefined") {
                    let token = window.bridge.getUserToken(null);
                    if (token) {
                        Cookies.set("GroukAuth", token, { expires: 30 });
                        axios.post(api.admin.user_show).then(({ data }) => {
                            if (data.result) {
                                Cookies.set("user", JSON.stringify(data.result), { expires: 30 });
                                cb(true)
                            } else {
                                Cookies.remove('user');
                                Cookies.remove('GroukAuth'); //app端user完全依赖APP
                                cb();
                            }
                        }).catch(err => {
                            Toast('网络开小差啦，请稍后再试')
                            return;
                        })
                    } else {
                        Cookies.remove('user'); //app端user完全依赖APP
                        Cookies.remove('GroukAuth'); //app端user完全依赖APP
                        window.bridge.jumpLogin(null);
                        cb()
                    }
                }
            } else {
                cb()
            }
        },
        async getPullNewInfo({ commit }, payload) {
            let { data } = await getInviteStatistic().catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            // let data = { "result": { "awardTotalAmt": 0, "awardEnd": true, "inviteUserTotalCount": 0, "invitedUsers": [{ "amount": 200, "remindTime": 1532659481220, "create_time": 1531299414724, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576465247175075", "invitee": "9Bw5d2unBX" }, { "amount": 1000, "remindTime": 1532659465391, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" }, { "amount": 1000, "remindTime": 1532659465391, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" }, { "amount": 1000, "remindTime": 1532659465391, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" }], "todayNotLoginUserCount": 2 }, "code": 0 }
            if (typeof(data.code) != "undefined" && data.code == 0) {
                if (typeof(data.result.inviteUserTotalCount) != "undefined") {
                    let newUsers = {}
                    let inviteUserTotalCount = data.result.inviteUserTotalCount;
                    let invitedUsers = data.result.invitedUsers;
                    if (inviteUserTotalCount < 4) {
                        for (var i = 0; i < 7; i++) {
                            if (invitedUsers[i]) {
                                newUsers[i + 1] = invitedUsers[i];
                            } else {
                                let amount = 200;
                                if ((i + 1) % 7 == 0 || i == 0) {
                                    amount = 1000;
                                }
                                newUsers[i + 1] = { amount: amount, isGrey: true }
                            }
                        }
                    } else {
                        for (var i = 0; i < 7; i++) {
                            if (invitedUsers[i]) {
                                newUsers[inviteUserTotalCount - 3 + i] = invitedUsers[i];
                            } else {
                                let amount = 200;
                                if ((inviteUserTotalCount - 3 + i) % 7 == 0) {
                                    amount = 1000;
                                }
                                newUsers[inviteUserTotalCount - 3 + i] = { amount: amount, isGrey: true }
                            }
                        }
                    }
                    console.log("newUsersxxx", newUsers)
                    data.result.invitedUsers = newUsers;
                    commit("updatePullNewStatic", data.result);
                }
            }
        },
        async getYesterdayAwardAmt({ commit }, payload) {
            let { data } = await getYesterdayAwardAmt().catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            if (typeof(data.code) != "undefined" && data.code == 0) {
                commit("updateAwardAmt", data.result);
            }
        },
        async getInviteUserList({ commit }, payload) {
            let { data } = await getInviteUserLoginPageList(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            // let data = { "result": { "data": [ { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avat
            if (typeof(data.code) != "undefined" && data.code == 0) {
                return data.result;
            }
        },
        async remindLogin({ dispatch }, payload) {
            let { data } = await remindLogin(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            if (typeof(data.code) != "undefined" && data.code == 0) {
                Toast("提醒成功喽~");
                dispatch("getPullNewInfo")
                return true;
            }
        }

    }
}