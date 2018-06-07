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
            path: '/',
            name: '首页',
            component: Index,
            meta: {
                title: '领取机会'
            }
        }, {
            path: '/activity',
            name: '贴近世界杯 瓜分600万',
            component: Activity,
            meta: {
                title: '贴近世界杯 瓜分600万'
            }
        },
        {
            path: '/share/:id',
            name: '贴近世界杯 瓜分600',
            component: Share,
            meta: {
                title: '贴近世界杯 瓜分600'
            }
        }
    ]

})
router.beforeEach(({ meta, path }, from, next) => {

    document.title = meta.title ? meta.title : '贴近'
    setTimeout(() => {
        document.title = meta.title ? meta.title : '贴近'
    }, 500)

    let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
    Store.state.UA = ua;
    if (ua.indexOf("closer-ios") != -1 || ua.indexOf("closer-ios") != -1) {
        Store.state.IS_APP = true;
    }
    Cookies.set("GroukAuth", "1.d64db76d966f377795a7940e06c6283889b3e3fa3b58f3796260a32c7f4377bc")
    if (Cookies.get("GroukAuth") && (path == "/" || path == "/index")) {
        console.log("已登录，直接进活动首页") //1.d64db76d966f377795a7940e06c6283889b3e3fa3b58f3796260a32c7f4377bc
        router.push("/activity");
    }
    // const isLogin = hasAuthToken() // true用户已登录， false用户未登录

    // // 不需要验证的地址
    // if (/^\/example/.test(path)) return next()
    // const noLoginArr = ['/pwd']
    // for (let i = 0, len = noLoginArr.length; i < len; i++) {
    //     if (noLoginArr[i] === path) {
    //         next()
    //         return
    //     }
    // }

    // if (path === '/login' && isLogin) {
    //     clearSession()
    //     location.reload()
    // }
    // if (path !== '/login' && !isLogin) {
    //     return next({ path: '/login' })
    // }
    next()
})

export default router