import { getAuthPath, loginWithWechat, bindPhone, waterChance, waterUpdate, waterJoin, wechatConfig } from './service'
import { Toast } from 'mint-ui'
import api from '../../../utils/api'
import Router from 'vue-router';


export default {
    namespaced: true,
    state: {
        sendCode: "发送验证码",
        countDown: 60,
        timestampNow: 0
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
        },
        updateTimestamp(state, payload) {
            state.timestampNow = Date.now();
        }
    },
    actions: {
        updateTimestamp({ commit }) {
            commit("updateTimestamp")
        },
        async bindPhone({ commit, state, rootState }, payload) {
            console.log("bindPhone", payload);
            if (payload.phone && !(/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(payload.phone))) {
                Toast('请输入正确的手机号');
                return;
            };

            if (payload.code.length == 0) {
                Toast("请输入验证码")
                return;
            }

            if (payload.imgCode.length == 0) {
                Toast("请输入图形验证码")
                return;
            }

            let { data } = await bindPhone(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            if (typeof(data.code) != "undefined") {
                if (data.code == 0) {
                    return true;
                } else {
                    Toast(data.result);
                    return false;
                }
            } else {
                Toast('网络开小差啦，请稍后再试')
                return false;
            }
        },

        checkLogin({ state, rootState }, cb) {
            console.log("checkLogin", rootState.IS_APP);
            let ua = rootState.UA;
            if (ua.indexOf("closer-ios") > -1) {
                console.log("module closer-ios");
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
                }, 500)
            } else if (ua.indexOf("closer-android") > -1) {
                console.log("closer-android")
                console.log("module android", typeof window.bridge != "undefined")
                    //安卓检查登录状态
                if (typeof window.bridge != "undefined") {
                    let token = window.bridge.getUserToken(null);
                    console.log("android", token)
                    if (token) {
                        Cookies.set("GroukAuth", token, { expires: 30 });
                        setTimeout(() => {
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

                        }, 1000)
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

        async getAuthPath({ rootState, state }, payload) {
            let params = {
                path: api.wxLoginUrl
            };
            if (rootState.IS_DEV) {
                params.path = api.wxLoginDevUrl
            }
            let { data } = await getAuthPath(params).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != "undefined" && data.code == 0) {
                location.href = data.result;
            }
        },
        async loginWithWechat({ rootState, dispatch }, code) {
            let params = {
                'plateform': 2,
                'protocol': 'WEB_SOCKET'
            }
            params['code'] = code;
            let { data } = await loginWithWechat(params).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != "undefined" && data.code == 0) {
                console.log("loginWithWechat", data.result)
                return data.result;
            } else {
                // Toast('微信认证异常');
                await dispatch("getAuthPath");
                return;
            }
        },
        async waterChance({}, payload) {
            let { data } = await waterChance(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != "undefined" && data.code == 0) {
                return data.result;
            } else {
                Toast('网络开小差啦，请稍后再试')
                return;
            }
        },
        async waterUpdate({}, payload) {
            console.log("info", payload)
            if (payload.name.length == 0) {
                Toast("请输入真实姓名")
                return;
            }

            if (payload.address.length == 0) {
                Toast("请输入收货地址")
                return;
            } else if (payload.address.length < 12) {
                Toast("收货地址不少于12字")
                return;
            } else if (payload.address.length > 50) {
                Toast("收货地址太长，最多50字")
                return;
            }
            let { data } = await waterUpdate(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != "undefined" && data.code == 0) {
                return true;
            } else {
                Toast('网络开小差啦，请稍后再试')
                return;
            }
        },
        async waterJoin({ dispatch }, payload) {
            let { data } = await waterJoin(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != "undefined" && data.code == 0) {
                return data.result;
            } else {
                // await dispatch("getAuthPath");
                return false;
            }
        },

        async wechatConfig({ rootState }, payload) {
            let params = {
                url: location.href
            };
            // if (rootState.IS_DEV) {
            //     params.url = api.wxLoginDevUrl
            // }
            let { data } = await wechatConfig(params).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != "undefined" && data.code == 0) {
                return data.result;
            } else {
                return;
            }
        }

    }
}