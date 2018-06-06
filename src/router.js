import Vue from 'vue'
import Router from 'vue-router'

<<<<<<< HEAD

const Home = () =>
    import ('@/pages/worldcup/home')
const LoginSuccess = () =>
    import ('@/pages/worldcup/login-success')
const List = () =>
    import ('@/pages/worldcup/list')
const Index = () =>
    import ('@/pages/worldcup/index')
const Share = () =>
    import ('@/pages/worldcup/share')
=======
const Index = () => import('@/pages/worldcup/index')
const Activity = () => import('@/pages/worldcup/activity')
>>>>>>> 1a5dc5c4148266db340422edea8223ecad15d67f

Vue.use(Router)

const router = new Router({
<<<<<<< HEAD
    mode: 'history',
    routes: [{
        path: '/worldcup',
        name: '首页',
        component: Home,
        meta: {
            title: '首页'
        }
    }, {
        path: '/worldcup/share',
        name: '分享',
        component: Share,
        meta: {
            title: '贴近世界杯，瓜分600万'
        }
    }, {
        path: '/list',
        name: '列表页',
        component: List,
        meta: {
            title: '列表'
        }
    }]

=======
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      meta: {
        title: '领取机会'
      }
    },{
      path: '/activity',
      name: '贴近世界杯 瓜分600万',
      component: Activity,
      meta: {
        title: '贴近世界杯 瓜分600万'
      }
    }
  ]
>>>>>>> 1a5dc5c4148266db340422edea8223ecad15d67f
})

// router.beforeEach(({meta, path}, from, next) => {
//     const isLogin = hasAuthToken() // true用户已登录， false用户未登录

//     // 不需要验证的地址
//     if (/^\/example/.test(path)) return next()
//     const noLoginArr = ['/pwd']
//     for (let i = 0, len = noLoginArr.length; i < len; i++) {
//         if (noLoginArr[i] === path) {
//         next()
//         return
//         }
//     }

//     if (path === '/login' && isLogin) {
//         clearSession()
//         location.reload()
//     }
//     if (path !== '/login' && !isLogin) {
//         return next({ path: '/login' })
//     }
//     next()
// })

export default router