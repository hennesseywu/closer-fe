import Vue from 'vue'
import App from './App'
import './reset.css'
import './common.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
// vconsole 调试
// import Vconsole from 'vconsole'
// var vconsole = new Vconsole()



Vue.config.productionTip = false

Vue.use(MintUI)

// 运行时动态设置
pageResize()
window.onresize = pageResize
function pageResize() {
  let fontSize= Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 375 * 16
  document.documentElement.style.fontSize = (fontSize >= 32 ? 32 : fontSize) + 'px'
}

// 路由跳转时动态设置标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : '贴近'
  setTimeout(() => {
    document.title = to.meta.title ? to.meta.title : '贴近'
  }, 500)
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')