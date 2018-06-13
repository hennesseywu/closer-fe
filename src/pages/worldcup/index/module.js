import { login, getCode, getUserById, viewCount, getAdCookies } from './service'
import { Toast } from 'mint-ui';
import Router from '../../../router'

export default {
    namespaced: true,
    // 定义状态 
    state: {
        loginSuccess: false,
        chanceBoxShow: true,
        loginBoxShow: false,
        isApp: false,
        sendCode: "发送验证码",
        countDown: 60,
        deviceType: '',
        deviceVersion: '',
        adid: ''
    },
    mutations: {
        updateCountDown(state) {
            state.countDown = 59;
            let countDown = setInterval(() => {
                state.countDown--;
                state.sendCode = state.countDown + " s"
                if (state.countDown == 0) {
                    clearInterval(countDown);
                    state.countDown = 60;
                    state.sendCode = "再次发送";
                }
            }, 1000)
        },
        viewCount(state, payload) {
            state.id = payload.id
        }
    },
    actions: {
        async viewCount({ state, commit }, payload) {
            const { data, cookies } = await viewCount(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            commit({
                type: 'viewCount',
                data
            })
        },
        async getAdCookies({ rootState }, payload) {
            if (payload.adid && payload.adid == "0") {
                delete payload["adid"];
            }
            const { data } = await getAdCookies(payload).catch(err => {
                return;
            });
            if (data.result) {
                let result = data.result;
                if (result.udid) {
                    Cookies.set("uid", result.udid, { expires: 30 })
                }
                if (result.adid) {
                    Cookies.set("aid", result.adid, { expires: 30 })
                    f5a04728c71beed3e683d197ae9b85835bc0bd96
                }
            }
        },
        checkLogin({ state, rootState }) {
            return;
            console.log("checkLogin", rootState.IS_APP);
            if (rootState.IS_APP) { //app内打开 ios补救措施
                let ua = rootState.UA;
                if (ua.indexOf("closer-ios") > -1) {
                    console.log("module closer-ios");
                    setupWebViewJavascriptBridge(function(bridge) {
                        console.log("ios bridge", bridge)
                        if (bridge) {
                            //ios获取用户token 判断登录
                            bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                                console.log("ios token", token)
                                if (token) {
                                    Cookies.set("GroukAuth", token, { expires: 7 });
                                    Router.push({ name: "worldcupActivity" });
                                } else {
                                    console.log("ios jumpLogin")
                                    setupWebViewJavascriptBridge(function(bridge) {
                                        bridge.callHandler("jumpLogin", null);
                                    });
                                }
                            });
                        }
                    })
                }
            }
        },
        openLoginBox({ state, rootState }) {
            console.log("openLoginBox", rootState.IS_APP)
            if (rootState.IS_APP) { //app内打开
                let ua = rootState.UA;
                if (ua.indexOf("closer-android") > -1) {
                    console.log("android", typeof window.bridge != "undefined")
                        //安卓检查登录状态
                    if (typeof window.bridge != "undefined") {
                        let token = window.bridge.getUserToken(null);
                        console.log("android", token)
                        if (token) {
                            Cookies.set("GroukAuth", token, { expires: 7 });
                            Router.push({ name: "worldcupActivity" });
                        } else {
                            console.log("android jumpLogin")
                            window.bridge.jumpLogin(null);
                        }
                    }
                } else if (ua.indexOf("closer-ios") > -1) {
                    console.log("closer-ios", window.WebViewJavascriptBridge);
                    if (window.WebViewJavascriptBridge) {
                        setupWebViewJavascriptBridge(function(bridge) {
                            console.log("ios bridge", bridge)
                            if (bridge) {
                                //ios获取用户token 判断登录
                                bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                                    console.log("ios token", token)
                                    if (token) {
                                        Cookies.set("GroukAuth", token, { expires: 7 });
                                        Router.push({ name: "worldcupActivity" });
                                    } else {
                                        console.log("ios jumpLogin")
                                        setupWebViewJavascriptBridge(function(bridge) {
                                            bridge.callHandler("jumpLogin", null);
                                        });
                                    }
                                });
                            }
                        })
                    }
                }
            } else {
                state.loginBoxShow = true;
                state.chanceBoxShow = false;
            }
        },
        async getUserById({ state }, uid) {
            return await getUserById(uid).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });;
        },
        async getCode({ commit, state, rootState }, phone) {
            if (!(/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(phone))) {
                Toast('请输入正确的手机号');
                return;
            };
            if (state.countDown == 60) {
                let codeRes = await getCode(phone).catch(err => {
                    Toast('网络开小差啦，请稍后再试')
                    return;
                });
                if (codeRes.status && codeRes.status == 200) {
                    commit('updateCountDown');
                    Toast("验证码发送成功")
                }
            }
        },
        // 登录
        async login({ commit, state, rootState }, payLoad) {
            console.log("loginModule", payLoad);
            if (payLoad.phone && !(/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(payLoad.phone))) {
                Toast('请输入正确的手机号');
                return;
            };
            if (payLoad.code.length == 0) {
                Toast("请输入验证码")
                return;
            }

            if (Cookies.get("uid")) {
                payLoad['udid'] = Cookies.get("uid");
            }

            if (Cookies.get("aid")) {
                payLoad['adid'] = Cookies.get("aid");
            }
            let loginRes = await login(payLoad).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });

            console.log("loginRes", loginRes)
            if (loginRes.data) {
                let data = loginRes.data;
                if (data.code && data.code != 0) {
                    Toast(data.result);
                    return;
                }

                if (data.result && data.result.token) {
                    Cookies.set("GroukAuth", data.result.token, { expires: 7 });
                    if (data.result.user) {
                        Cookies.set("user", JSON.stringify(data.result.user), { expires: 7 });
                    }
                    if (data.result.isNewUser) {
                        rootState.isNewUser = data.result.isNewUser;
                    }
                    console.log("push worldcupActivity")
                    Router.push({ name: "worldcupActivity" });
                }
            }
        }
    }
}