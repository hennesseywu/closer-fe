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
            //console.log("checkLogin")
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
            let { data } = await getInviteStatistic(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            // let data = {
            //     "result": {
            //         "data": [
            //             { "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL提现账号的", "phones": "12312348765", "updateTime": 1534392796126, "avatar": "\/avatar\/u\/9uxNUky7dr?v=1530096892354", "delete": false, "securitySignal": "02810000549", "objectType": "USER", "createTime": 1530003202559, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1534392796126, "userShareCard": "http:\/\/file-sandbox.tiejin.cn\/public\/9MdrLHrHMd\/9MdrLHtUav.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MdrMzezL4\/9MdrMzgM9m.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MdrNr1rJV\/9MdrNr3E8d.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MdrNr1rJW\/9MdrNr3E8e.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MdrOiuhb7\/9MdrOiwtzp.png?version=v5", "monitorClasses": ["9dp9pvhff6", "9L3ceqb1dQ", "9L31wg8Rxc", "9d6JvOz0OD", "9PnIPlg0hw"], "userRole": 4, "dayFirsttLoginTime": 1534387627126, "account": { "wechatx": {}, "phone": "+8612312348765", "email": "" } } }, "fullname": "CL提现账号的", "email": "12258258258@closerteam.sandbox.grouk.com", "objectID": "9uxNUky7dr", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9uxnuky7dq" }, "amount": 1000, "reminded": true, "loginAmount": 20, "inviter": "9uxNUky7dr", "awardedCount": 0, "invitee": "9uxNUky7dr" },
            //             { "userActions": [{ "userActionEnum": "listFeed", "count": 1 }, { "userActionEnum": "viewSubject", count: 1 }], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_5342108850", "phones": "12388568556", "updateTime": 1533809610378, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "000010000156", "objectType": "USER", "createTime": 1533804268998, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533809610378, "adid": "closer-invitenew", "userShareCard": "http:\/\/file-sandbox.tiejin.cn\/public\/9P8Yyr18uS\/9P8Yyr3kX3.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8Yyr18uT\/9P8Yyr3kX4.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8YzitXW4\/9P8Yziwaof.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8YAagPUV\/9P8YAaj2n6.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8YAagPUW\/9P8YAaj2n7.png?version=v5", "userRole": 4, "dayFirsttLoginTime": 1533804268998, "account": { "wechatx": {}, "phone": "+8612388568556", "email": "" } } }, "fullname": "CL_5342108850", "email": "12388568556@closerteam.sandbox.grouk.com", "objectID": "9P8ULLAhyq", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9p8ullahyp" }, "amount": 200, "remindTime": 1534313839304, "reminded": false, "create_time": 1533804269044, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60921249035452672", "awardedCount": 1, "invitee": "9P8ULLAhyq" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "Fhh", "phones": "12395555444", "updateTime": 1534214295035, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "02810000959", "objectType": "USER", "createTime": 1533784266727, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1534214295035, "adid": "closer-invitenew", "monitorClasses": ["9P7zBda47M"], "userShareCard": "http:\/\/file-sandbox.tiejin.cn\/public\/9P8Rv91VMh\/9P8Rv948ed.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8Rw0uLds\/9P8Rw0wXFo.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8Rw0uLdt\/9P8Rw0wXFp.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8RwShDck\/9P8RwSjPEg.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9P8RxK4vbb\/9P8RxK6HD7.png?version=v5", "userRole": 4, "dayFirsttLoginTime": 1534214295035, "account": { "wechatx": {}, "phone": "+8612395555444", "email": "" } } }, "fullname": "Fhh", "email": "12395555444@closerteam.sandbox.grouk.com", "objectID": "9P4ppCrXZJ", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9p4ppcrxzi" }, "amount": 200, "remindTime": 0, "reminded": false, "create_time": 1533784266780, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60910510006599949", "awardedCount": 3, "invitee": "9P4ppCrXZJ" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "xiaomi mix", "phones": "12984567091", "updateTime": 1533288351476, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "02810000926", "objectType": "USER", "createTime": 1533281364256, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533288327318, "adid": "closer-invitenew", "userShareCard": "http:\/\/file-sandbox.tiejin.cn\/public\/9Mizy01WG6\/9Mizy0499w.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MizyRuM7h\/9MizyRwYAH.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MizyRuM7i\/9MizyRwYAI.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MizzJhE69\/9MizzJjQzz.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MizAB4w50\/9MizAB6Iyq.png?version=v5", "userRole": 4, "dayFirsttLoginTime": 1533281364256, "account": { "wechatx": {}, "phone": "+8612984567091", "email": "" } } }, "fullname": "xiaomi mix", "email": "12984567091@closerteam.sandbox.grouk.com", "objectID": "9Mh01h5mHR", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9mh01h5mhq" }, "amount": 200, "remindTime": 1533804052159, "reminded": false, "create_time": 1533281364291, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60640516551213397", "awardedCount": 1, "invitee": "9Mh01h5mHR" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "红米5", "phones": "12875379087", "updateTime": 1533288852497, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "02810000925", "objectType": "USER", "createTime": 1533280889247, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533288852497, "adid": "closer-invitenew", "userShareCard": "http:\/\/file-sandbox.tiejin.cn\/public\/9MhWPFi1xm\/9MhWPFi1Bg.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MhWQx4Twd\/9MhWQx4TA7.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MhWQx4Twe\/9MhWQx4TA8.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MhWRoxIXp\/9MhWRoxJ1j.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MhWSgkAWg\/9MhWSgkB0a.png?version=v5", "userRole": 4, "dayFirsttLoginTime": 1533280889247, "account": { "wechatx": {}, "phone": "+8612875379087", "email": "" } } }, "fullname": "红米5", "email": "12875379087@closerteam.sandbox.grouk.com", "objectID": "9MgTnXtFy9", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9mgtnxtfy8" }, "amount": 1000, "remindTime": 0, "reminded": false, "create_time": 1533280889307, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60640261537005703", "awardedCount": 1, "invitee": "9MgTnXtFy9" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "华为", "phones": "12786532431", "updateTime": 1533804124527, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "000010000143", "objectType": "USER", "createTime": 1533280558502, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533804124527, "adid": "closer-invitenew", "userShareCard": "http:\/\/file-sandbox.tiejin.cn\/public\/9MiDxEngr5\/9MiDxEngvG.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MiDywa8pW\/9MiDywa8ux.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MiDznCXR7\/9MiDznCXVI.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MiDznCXR8\/9MiDznCXVJ.png?version=v5,http:\/\/file-sandbox.tiejin.cn\/public\/9MiDAfpPPZ\/9MiDAfpPUA.png?version=v5", "userRole": 4, "dayFirsttLoginTime": 1533804122922, "account": { "wechatx": {}, "phone": "+8612786532431", "email": "" } } }, "fullname": "华为", "email": "12786532431@closerteam.sandbox.grouk.com", "objectID": "9MgOLlbKeI", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9mgollbkeh" }, "amount": 200, "remindTime": 1533804162848, "reminded": false, "create_time": 1533280558552, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60640083832733814", "awardedCount": 2, "invitee": "9MgOLlbKeI" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "华为消息推送", "phones": "12639810941", "updateTime": 1533270016424, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "000010000142", "objectType": "USER", "createTime": 1533265665586, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533265665586, "adid": "closer-invitenew", "userRole": 4, "dayFirsttLoginTime": 1533265665586, "account": { "wechatx": {}, "phone": "+8612639810941", "email": "" } } }, "fullname": "华为消息推送", "email": "12639810941@closerteam.sandbox.grouk.com", "objectID": "9MdsLbkgNc", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9mdslbkgnb" }, "amount": 200, "remindTime": 0, "reminded": false, "create_time": 1533265665647, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60632088214765584", "awardedCount": 1, "invitee": "9MdsLbkgNc" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "iOS推送", "phones": "12555584558", "updateTime": 1533287188334, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "02810000907", "objectType": "USER", "createTime": 1533110819835, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533287188334, "adid": "closer-invitenew", "userRole": 4, "dayFirsttLoginTime": 1533264567251, "account": { "wechatx": {}, "phone": "+8612555584558", "email": "" } } }, "fullname": "iOS推送", "email": "12555584558@closerteam.sandbox.grouk.com", "objectID": "9Lkxz86G8j", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9lkxz86g8i" }, "amount": 200, "remindTime": 1533286294058, "reminded": false, "create_time": 1533110819885, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60548955901526401", "awardedCount": 0, "invitee": "9Lkxz86G8j" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "Android推送", "phones": "12488459985", "updateTime": 1533269522028, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "02810000911", "objectType": "USER", "createTime": 1533091004538, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533269522028, "adid": "closer-invitenew", "userRole": 4, "dayFirsttLoginTime": 1533264775832, "account": { "wechatx": {}, "phone": "+8612488459985", "email": "" } } }, "fullname": "Android推送", "email": "12488459985@closerteam.sandbox.grouk.com", "objectID": "9Lg4OUiKZc", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9lg4ouikzb" }, "amount": 200, "remindTime": 0, "reminded": false, "create_time": 1533091004596, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60538317804404992", "awardedCount": 1, "invitee": "9Lg4OUiKZc" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_5422037874", "phones": "12855253655", "updateTime": 1533090971967, "avatar": "\/avatar\/u\/9cuTjllpID?v=1526703845826", "delete": false, "securitySignal": "", "objectType": "USER", "createTime": 1533090971967, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533090971967, "adid": "closer-invitenew", "userRole": 4, "dayFirsttLoginTime": 1533090971967, "account": { "wechatx": {}, "phone": "+8612855253655", "email": "" } } }, "fullname": "CL_5422037874", "email": "12855253655@closerteam.sandbox.grouk.com", "objectID": "9Lg4mkueDZ", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9lg4mkuedy" }, "amount": 200, "remindTime": 0, "reminded": false, "create_time": 1533090972036, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60538300624011517", "awardedCount": 0, "invitee": "9Lg4mkueDZ" }, { "userActions": [], "inviteeUser": { "role": "NORMAL", "gender": "NONE", "bot": false, "displayName": "CL_2", "phones": "12358845884", "updateTime": 1533190926307, "avatar": "\/avatar\/u\/9LfXp6pf6y?v=1533190915077", "delete": false, "securitySignal": "02810000906", "objectType": "USER", "createTime": 1533090473091, "teamID": "9cuTjllPi9", "attributes": { "closerUserAttr": { "lastLoginTime": 1533090473091, "adid": "closer-invitenew", "userRole": 4, "dayFirsttLoginTime": 1533190149309, "account": { "wechatx": {}, "phone": "+8612358845884", "email": "" } } }, "fullname": "CL_2", "email": "12358845884@closerteam.sandbox.grouk.com", "objectID": "9LfXp6pf6y", "object": { "$ref": "@" }, "status": "ACTIVE", "username": "9lfxp6pf6x" }, "amount": 200, "remindTime": 0, "reminded": false, "create_time": 1533090473154, "attributes": {}, "inviter": "9uxNUky7dr", "id": "60538032725950736", "awardedCount": 1, "invitee": "9LfXp6pf6y" }
            //         ],
            //         "pagesize": 10,
            //         "count": 31,
            //         "pagenum": 1
            //     },
            //     "code": 0
            // }
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
                    //console.log("newUsersxxx", newUsers)
                    data.result.invitedUsers = newUsers;
                    commit("updatePullNewStatic", data.result);
                }
            }
        },
        async getYesterdayAwardAmt({ commit }, payload) {
            let { data } = await getYesterdayAwardAmt(payload).catch(err => {
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