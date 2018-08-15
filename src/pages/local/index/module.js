

export default {
  namespaced: true,
  state: {

  },
  actions: {
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
  },
  mutations: {

  }
}