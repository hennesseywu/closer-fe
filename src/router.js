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
            name: 'tblogin',
            component: Tblogin,
            meta: {
                title: '贴近Closer'
            }
        }
    ]

})
router.beforeEach(({
    meta,
    path,
    query,
    name,
    params
}, from, next) => {
    document.title = meta.title ? meta.title : '贴近'
    setTimeout(() => {
        document.title = meta.title ? meta.title : '贴近'
    }, 500)
    let ua = navigator.userAgent || window.navigator.userAgent;
    ua = ua.toLowerCase();
    Store.state.UA = ua;
    if (ua.indexOf("closer-android") > -1 || ua.indexOf("closer-ios") != -1) {
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
            next();

        } else if (ua.indexOf("closer-ios") > -1) {
            setupWebViewJavascriptBridge(function(bridge) {
                if (bridge) {
                    //ios获取用户token 判断登录
                    bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                        console.log("ios token", token)
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
            next();
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
                next();
            } else {
                next();
            }
        }
    } else if (name == "tblogin") {
        console.log("tblogin")
        if (ua.indexOf("closer-ios") > -1 || ua.indexOf("closer-android") > -1) {
            console.log("closer device")
            Cookies.remove('user'); //app端user完全依赖APP
            next();
        } else {
            if (query.code) {
                next();
                return;
            }
            let params = {
                path: api.wxLoginUrl
            };
            if (Cookies.get("IS_DEV")) {
                params.path = api.wxLoginDevUrl
            }
            axios.post(api.admin.get_auth_path, params).then(({ data }) => {
                if (typeof(data.code) != "undefined" && data.code == 0) {
                    location.href = data.result;
                } else {
                    next()
                }
            }).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })

        }
    } else {
        next();
    }
    if (name == "worldcupActivity" && !Cookies.get("GroukAuth")) {
        router.push({
            name: "worldcupIndex",
            params: {
                channelCode: 0
            }
        })
    }

})

export default router