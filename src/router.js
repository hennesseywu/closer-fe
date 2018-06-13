import Vue from 'vue';
import Router from 'vue-router';
import Store from './store'

const Index = () =>
    import ('@/pages/worldcup/index')
const Activity = () =>
    import ('@/pages/worldcup/activity')

const Share = () =>
    import ('@/pages/worldcup/share')


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
        }
    ]

})
router.beforeEach(({ meta, path, name, params }, from, next) => {
    document.title = meta.title ? meta.title : '贴近'
    setTimeout(() => {
        document.title = meta.title ? meta.title : '贴近'
    }, 500)

    let ua = navigator.userAgent || window.navigator.userAgent;
    Store.state.UA = ua.toLowerCase();
    ua = Store.state.UA;
    if (Store.state.UA.indexOf("closer-android") > -1 || Store.state.UA.indexOf("closer-ios") != -1) {
        Store.state.IS_APP = true;
        console.log("isApp true");
    }
    if (name == "worldcupIndex") {
        console.log("params", params)
        if (params.channelCode && params.channelCode != "0") {
            Cookies.set("aid", params.channelCode, { expires: 30 });
            console.log("set cookies", params.channelCode);
        }
        if (ua.indexOf("closer-android") > -1) {
            console.log("router android", typeof window.bridge != "undefined")
                //安卓检查登录状态
            if (typeof window.bridge != "undefined") {
                let token = window.bridge.getUserToken(null);
                console.log("android", token)
                if (token) {
                    Cookies.set("GroukAuth", token, { expires: 7 });
                    router.push({ name: "worldcupActivity" });
                }
            }
        } else if (ua.indexOf("closer-ios") > -1) {
            if (Store.state.IS_APP) { //app内打开 ios补救措施
                let ua = Store.state.UA;
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
                                    router.push({ name: "worldcupActivity" });
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
            if (Cookies.get("GroukAuth")) {
                console.log("已登录，直接进活动首页") //1.d64db76d966f377795a7940e06c6283889b3e3fa3b58f3796260a32c7f4377bc
                if (params && params.channelCode) {
                    Store.state.CHANNEL_CODE = params.channelCode;
                }
                router.push({ name: "worldcupActivity" });
            }
        }

    }

    if (name == "worldcupActivity" && !Cookies.get("GroukAuth")) {
        router.push({ name: "worldcupIndex", params: { channelCode: 0 } })
    }
    next()
})

export default router