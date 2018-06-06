import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/pages/worldcup/index')
const Activity = () => import('@/pages/worldcup/activity')

Vue.use(Router)

const router = new Router({

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