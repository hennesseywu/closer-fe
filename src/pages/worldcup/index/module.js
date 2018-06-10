import { login, getCode, getUserById } from './service'
import { Toast } from 'mint-ui';
import Router from '../../../router'

export default {
    namespaced: true,
    // 定义状态 
    state: {
        loginSuccess: false,
        chanceBoxShow: false,
        loginBoxShow: true,
        isApp: false,
        sendCode: "发送验证码",
        countDown: 60
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
        }
    },
    actions: {
        checkLogin({ state, rootState }) {
            if (rootState.IS_APP) { //app内打开
                let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
                console.log("ua", ua);
                if (ua.indexOf("closer-android") > -1) {
                    console.log("android", typeof window.bridge != "undefined")
                        //安卓检查登录状态
                    if (typeof window.bridge != "undefined") {
                        let token = window.bridge.getUserToken(null);
                        console.log("android", token)
                        if (token) {
                            Cookies.set("GroukAuth", token, { expires: 7 });
                            Router.push({ name: "worldcupActivity" });
                        }
                    }
                } else if (ua.indexOf("closer-ios") > -1) {
                    console.log("closer-ios", window.JsBridge);
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
                                    }
                                });
                            }
                        })
                    }
                } else {
                    this.chanceBoxShow = true;
                }
            }
        },
        openLoginBox({ state, rootState }) {
            console.log("rootState", rootState)
            if (rootState.IS_APP) { //app内打开
                let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
                console.log("ua", ua);
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
            if (!(/^(0|86|17951)?(13[0-9]|15[012356789]|16[012356789|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone))) {
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
            if (payLoad.phone && !(/^(0|86|17951)?(12[0-9]|13[0-9]|15[012356789]|16[012356789|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(payLoad.phone))) {
                Toast('请输入正确的手机号');
                return;
            };
            if (payLoad.code.length == 0) {
                Toast("请输入验证码")
                return;
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
                    Router.push({ path: "/worldcup/activity/" });
                }
            }
        }
    }
}