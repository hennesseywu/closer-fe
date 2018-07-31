import { Toast } from 'mint-ui'
import api from '../../../utils/api'
import Router from 'vue-router';
import { getInviteStatistic, getYesterdayAwardAmt, getInviteUserLoginPageList, remindLogin } from './service'
export default {
    namespaced: true,
    state: {
        pullNewStatic: { awardTotalAmt: 0 },
        awardAmt: 0
    },
    mutations: {
        updatePullNewStatic(state, payload) {
            console.log("updatePullNewStatic", payload)
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
            axios.post(api.admin.user_show).then(({ data }) => {
                console.log("ios", data.result);
                if (data.result) {
                    Cookies.set("user", JSON.stringify(data.result), { expires: 30 });
                    cb(true)
                } else {
                    cb();
                }
            }).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (ua.indexOf("closer-ios") > -1) {
                setTimeout(() => {
                    setupWebViewJavascriptBridge(function(bridge) {
                        console.log("ios bridge", bridge)
                        if (bridge) {
                            //ios获取用户token 判断登录
                            bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                                console.log("ios token", token)
                                if (token) {
                                    Cookies.set("GroukAuth", token, { expires: 30 });
                                    // setTimeout(() => {
                                    axios.post(api.admin.user_show).then(({ data }) => {
                                        console.log("ios", data.result);
                                        if (data.result) {
                                            Cookies.set("user", JSON.stringify(data.result), { expires: 30 });
                                            cb(true)
                                        } else {
                                            cb();
                                        }
                                    }).catch(err => {
                                        Toast('网络开小差啦，请稍后再试')
                                        return;
                                    })
                                } else {
                                    console.log("ios jumpLogin")
                                    setupWebViewJavascriptBridge(function(bridge) {
                                        bridge.callHandler("jumpLogin", null);
                                    });
                                    cb();
                                }
                            });
                        }
                    })
                }, 2000)
            } else if (ua.indexOf("closer-android") > -1) {
                console.log("closer-android")
                console.log("module android", typeof window.bridge != "undefined")
                    //安卓检查登录状态
                if (typeof window.bridge != "undefined") {
                    let token = window.bridge.getUserToken(null);
                    console.log("android", token)
                    if (token) {
                        Cookies.set("GroukAuth", token, { expires: 30 });
                        axios.post(api.admin.user_show).then(({ data }) => {
                            console.log("android", data.result);
                            if (data.result) {
                                Cookies.set("user", JSON.stringify(data.result), { expires: 30 });
                                cb(true)
                            } else {
                                cb();
                            }
                        }).catch(err => {
                            Toast('网络开小差啦，请稍后再试')
                            return;
                        })
                    } else {
                        console.log("android jumpLogin")
                        window.bridge.jumpLogin(null);
                        cb()
                    }
                }
            } else {
                cb()
            }
        },
        async getPullNewInfo({ commit }, payload) {
            // let { data } = await getInviteStatistic();
            let data = { "result": { "awardTotalAmt": 0, "inviteUserTotalCount": 2, "invitedUsers": [{ "amount": 200, "remindTime": 0, "create_time": 1531299414724, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576465247175075", "invitee": "9Bw5d2unBX" }, { "amount": 1000, "remindTime": 0, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" }] }, "code": 0 }
            if (typeof(data.code) != "undefined" && data.code == 0) {
                if (data.result.invitedUsers && data.result.invitedUsers.length < 8 && data.result.invitedUsers.length > 0) {
                    let len = 7 - data.result.invitedUsers.length;
                    let invitedUsers = {};
                    let normalUsers = [];
                    if (len > 2) {
                        for (var j = 0; j < data.result.invitedUsers.length; j++) {
                            invitedUsers[j + 1] = data.result.invitedUsers[j];
                        }
                        let userLen = Object.keys(invitedUsers).length
                        for (var i = 1; i <= len; i++) {
                            let key = userLen + i;
                            if (key % 7 == 0) {
                                invitedUsers[key] = { amount: 1000, isGrey: true }
                            } else {
                                invitedUsers[key] = { amount: 200, isGrey: true }
                            }
                        }
                    } else {
                        for (var j = data.result.invitedUsers.length - 4; j < data.result.invitedUsers.length; j++) {
                            invitedUsers[j + 1] = data.result.invitedUsers[j];
                        }
                        for (var i = 0; i < 3; i++) {
                            let key = data.result.invitedUsers.length + 1 + i;
                            if (key % 7 == 0) {
                                invitedUsers[key] = { amount: 1000, isGrey: true }
                            } else {
                                invitedUsers[key] = { amount: 200, isGrey: true }
                            }
                        }
                    }
                    data.result.normalUsers = normalUsers;
                    console.log("invitedUsers", invitedUsers)
                    data.result.normalUsers = normalUsers;
                    data.result.invitedUsers = invitedUsers;

                }
                commit("updatePullNewStatic", data.result);
            }
        },
        async getYesterdayAwardAmt({ commit }, payload) {
            // let { data } = await getYesterdayAwardAmt();
            let data = { result: 0 }
            if (typeof(data.code) != "undefined" && data.code == 0) {
                commit("updateAwardAmt", data.result);
            }
        },
        async getInviteUserList({ commit }, payload) {
            // let { data } = await getInviteUserLoginPageList();
            let data = {
                "result": {
                    "data": [
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_8148155217", "phones": "12321212122", "updateTime": 1531299414680, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299414680, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299414680, "userRole": 4, "dayFirsttLoginTime": 1531299414680, "account": { "wechatx": {}, "phone": "+8612321212122", "email": "" } } }, "fullname": "CL_8148155217", "email": "12321212122@closerteam.sandbox.grouk.com", "objectID": "9Bw5d2unBX", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw5d2unbw" }, "amount": 200, "remindTime": 1532659481220, "reminded": true, "create_time": 1531299414724, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576465247175075", "invitee": "9Bw5d2unBX" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        // { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                        { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_7684865424", "phones": "12321212121", "updateTime": 1531299378100, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1531299378100, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1531299378100, "userRole": 4, "dayFirsttLoginTime": 1531299378100, "account": { "wechatx": {}, "phone": "+8612321212121", "email": "" } } }, "fullname": "CL_7684865424", "email": "12321212121@closerteam.sandbox.grouk.com", "objectID": "9Bw4HRFug1", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9bw4hrfug0" }, "amount": 1000, "remindTime": 1532659465391, "reminded": true, "create_time": 1531299378151, "attributes": {}, "inviter": "9cvmI6wW0u", "id": "59576445919822231", "invitee": "9Bw4HRFug1" },
                    ],
                    "pagesize": 20,
                    "count": 2,
                    "pagenum": 1
                },
                "code": 0
            }
            if (typeof(data.code) != "undefined" && data.code == 0) {
                return data.result;
            }
        },
        async remindLogin({ dispatch }, payload) {
            let { data } = await remindLogin(payload);
            if (typeof(data.code) != "undefined" && data.code == 0) {
                Toast("提醒成功");
                dispatch("getInviteUserList")
            }
        }

    }
}