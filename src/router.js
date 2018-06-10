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

    let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
    Store.state.UA = ua;
    console.log("ua", ua);
    if (ua.indexOf("closer-android") != -1 || ua.indexOf("closer-ios") != -1) {
        Store.state.IS_APP = true;
    }
    console.log("name", name)
    if (Cookies.get("GroukAuth") && (name == "worldcupIndex")) {
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
            console.log("router closer-ios", window.JsBridge);
            if (window.WebViewJavascriptBridge) {
                setupWebViewJavascriptBridge(function(bridge) {
                    console.log("ios bridge", bridge)
                    if (bridge) {
                        //ios获取用户token 判断登录
                        bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                            console.log("ios token", token)
                            if (token) {
                                Cookies.set("GroukAuth", token, { expires: 7 });
                                router.push({ name: "worldcupActivity" });
                            }
                        });
                    }
                })
            }
        } else {
            console.log("已登录，直接进活动首页") //1.d64db76d966f377795a7940e06c6283889b3e3fa3b58f3796260a32c7f4377bc
            if (params && params.channelCode) {
                Store.state.CHANNEL_CODE = params.channelCode;
            }
            router.push({ name: "worldcupActivity" });
        }

    }

    if (name == "worldcupActivity" && !Cookies.get("GroukAuth")) {
        router.push({ name: "worldcupIndex", params: { channelCode: 0 } })
    }
    next()
})

export default router