import { login, getCode, getUserById } from './service'
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
        sendCode: "发送验证码"
    },
    mutations: {
        updateCountDown(state) {
            state.sendCode = 59;
            let countDown = setInterval(() => {
                state.sendCode--;
                if (state.sendCode == 0) {
                    clearInterval(countDown);
                    state.sendCode = "再次发送";
                }
            }, 1000)
        }
    },
    actions: {
        openLoginBox({ state, rootState }) {
            if (rootState.IS_APP) { //app内打开
                let ua = rootState.UA;
                console.log("ua", ua);
                if (ua.indexOf("closer-andriod") > 0) {
                    //安卓检查登录状态
                    if (typeof window.bridge != "undefined") {
                        let token = window.bridge.getUserToken(null);
                        Cookies.set("GroukAuth", token, { expires: 7 });
                        config.headers.Authorization = token;
                    }
                } else if (ua.indexOf("closer-ios") > 0) {
                    if (window.WebViewJavascriptBridge) {
                        //ios获取用户token 判断登录
                        bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                            if (token) {
                                Cookies.set("GroukAuth", token, { expires: 7 });
                                config.headers.Authorization = token;

                            } else {
                                JsBridge.setupWebViewJavascriptBridge(function(bridge) {
                                    bridge.callHandler("jumpLogin", null);
                                    return;
                                });
                            }
                        });
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

            let codeRes = await getCode(phone).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            if (codeRes.status && codeRes.status == 200) {
                commit('updateCountDown');
                Toast("验证码发送成功")
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