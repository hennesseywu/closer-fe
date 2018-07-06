import Vue from 'vue';
import Router from 'vue-router';
import api from './utils/api';
import Store from './store';

const Index = () =>
    import ('@/pages/worldcup/index')
const Activity = () =>
    import ('@/pages/worldcup/activity')

const Share = () =>
    import ('@/pages/worldcup/share')

// landing 页
const Landing = () =>
    import ('@/pages/landing/index')

// teabar activity页 
const Tblogin = () =>
    import ('@/pages/teabar/index')

Vue.use(Router)

const router = new Router({

    mode: 'history',
    routes: [{
            path: '/worldcup/activity',
            name: 'worldcupActivity',
            component: Activity,
            meta: {
                title: '贴近世界杯 瓜分600万'
            }
        }, {
            path: '/worldcup/:channelCode',
            name: 'worldcupIndex',
            component: Index,
            meta: {
                title: '领取机会'
            }
        },
        {
            path: '/worldcup/share/',
            name: 'worldcupShare',
            component: Share,
            meta: {
                title: '贴近世界杯 瓜分600万'
            }
        },
        {
            path: '/landing',
            name: 'landing',
            component: Landing,
            meta: {
                title: '贴近Closer'
            }
        },
        {
            path: '/teabar/:channelCode',
            name: 'Tblogin',
            component: Tblogin,
            meta: {
                title: '贴近Closer'
            }
        }
    ]

})
router.beforeEach(async({
    meta,
    path,
    name,
    params,
    query
}, from, next) => {
    document.title = meta.title ? meta.title : '贴近'
    let ua = navigator.userAgent || window.navigator.userAgent;
    ua = ua.toLowerCase();
    Store.state.UA = ua;
    if (Store.state.UA.indexOf("closer-android") > -1 || Store.state.UA.indexOf("closer-ios") != -1) {
        Store.state.IS_APP = true;
    }
    if (name == "worldcupIndex") {
        Cookies.set("aid", "0", {
            expires: 30
        })
        if (params.channelCode && params.channelCode != "0") {
            Cookies.set("aid", params.channelCode, {
                expires: 30
            });
        }
        if (ua.indexOf("closer-android") > -1) {
            //console.log("router android", typeof window.bridge != "undefined")
            //安卓检查登录状态
            if (typeof window.bridge != "undefined") {
                let token = window.bridge.getUserToken(null);
                //console.log("android", token)
                if (token) {
                    Cookies.set("GroukAuth", token, {
                        expires: 7
                    });
                    router.push({
                        name: "worldcupActivity"
                    });
                } else {
                    window.bridge.jumpLogin(null);
                }
            }
            next()
        } else if (ua.indexOf("closer-ios") > -1) {
            if (Store.state.IS_APP) { //app内打开 ios补救措施
                let ua = Store.state.UA;
                if (ua.indexOf("closer-ios") > -1) {
                    //console.log("module closer-ios");
                    setupWebViewJavascriptBridge(function(bridge) {
                        //console.log("ios bridge", bridge)
                        if (bridge) {
                            //ios获取用户token 判断登录
                            bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                                //console.log("ios token", token)
                                if (token) {
                                    Cookies.set("GroukAuth", token, {
                                        expires: 7
                                    });
                                    router.push({
                                        name: "worldcupActivity"
                                    });
                                } else {
                                    //console.log("ios jumpLogin")
                                    setupWebViewJavascriptBridge(function(bridge) {
                                        bridge.callHandler("jumpLogin", null);
                                    });
                                }
                            });
                        }
                    })
                }
            }
            next()

        } else {
            if (Cookies.get("GroukAuth")) {
                //console.log("已登录，直接进活动首页") //1.d64db76d966f377795a7940e06c6283889b3e3fa3b58f3796260a32c7f4377bc
                if (params && params.channelCode) {
                    Cookies.set("aid", params.channelCode, {
                        expires: 30
                    });
                }
                router.push({
                    name: "worldcupActivity"
                });
            }
            next()

        }
    } else if (name = "tbLogin") {
        console.log("getAUth")
        if (ua.indexOf("closer-android") > -1) {
            console.log("closer-android")
            console.log("router android", typeof window.bridge != "undefined")
                //安卓检查登录状态
            if (typeof window.bridge != "undefined") {
                let token = window.bridge.getUserToken(null);
                console.log("android", token)
                if (token) {
                    Cookies.set("GroukAuth", token.substring(10), { expires: 7 });
                    let { data } = await axios.post(api.admin.user_show).catch(err => {
                        Toast('网络开小差啦，请稍后再试')
                        return;
                    })
                    console.log("android", data.result);
                    if (data.result) {
                        Cookies.set("user", JSON.stringify(data.result), { expires: 60 });
                        next();
                    }
                } else {
                    console.log("android jumpLogin")
                    window.bridge.jumpLogin(null);
                }
            }
        } else if (ua.indexOf("closer-ios") > -1) {
            console.log("closer-ios")
            next();
            // setupWebViewJavascriptBridge(function(bridge) {
            //     console.log("ios bridge", bridge)
            //     if (bridge) {
            //         //ios获取用户token 判断登录
            //         bridge.callHandler("getUserToken", null, async function(token, responseCallback) {
            //             console.log("ios token", token)
            //             if (token) {
            //                 Cookies.set("GroukAuth", token, {
            //                     expires: 7
            //                 });
            //                 let { data } = await axios.post(api.admin.user_show, params).catch(err => {
            //                     Toast('网络开小差啦，请稍后再试')
            //                     return;
            //                 })
            //                 console.log("ios", data.result.user);
            //                 if (data.result.user) {
            //                     Cookies.set("user", JSON.stringify(data.result.user), { expires: 60 });
            //                 }
            //             } else {
            //                 console.log("ios jumpLogin")
            //                 setupWebViewJavascriptBridge(function(bridge) {
            //                     bridge.callHandler("jumpLogin", null);
            //                 });
            //             }
            //         });
            //     } else {
            //         next();
            //     }
            // })
        } else {
            if (query.code) {
                next();
                return;
            }
            let params = {
                path: api.wxLoginUrl
            };
            // if (Store.IS_DEV) {
            params.path = api.wxLoginDevUrl
                // }
            let { data } = await axios.post(api.admin.get_auth_path, params).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (typeof(data.code) != undefined && data.code == 0) {
                location.href = data.result;
            }
        }

    }

    if (name == "worldcupActivity" && !Cookies.get("GroukAuth")) {
        router.push({
            name: "worldcupIndex",
            params: {
                channelCode: 0
            }
        })
        next()

    }
})

export default router