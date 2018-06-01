import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/home')
const LoginSuccess = () => import('@/pages/login-success')
const List = () => import('@/pages/list')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      meta: {
        title: '首页'
      }
    },{
      path: '/loginSuccess',
      name: '首页',
      component: LoginSuccess,
      meta: {
        title: '登录成功'
      }
    },{
      path: '/list',
      name: '列表页',
      component: List,
      meta: {
        title: '列表'
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
